const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts; //list of all accounts on local ganache network
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' }); //Deploy a factory

  campaign = await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000',
  }); //Create a campaign with minimum contribution of 100 wei

  //Take first element of array and place it into campaignAddress (below, ES-2016)

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  //no data is changed, hence the call

  //Contract has already been deployed by factory, just need to locate it by address
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('marks caller as campaign manager', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows people to contribute money, marks them as approvers', async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: '200',
    });

    //approvers is a public variable, thus there is a method to access it
    //entire mapping is not retrieved, can only obtain single values
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor); //fails if isContributor is a falsy value
  });

  it('requires a minimum contribution', async () => {
    try {
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: '150', //minimumContribution is 200 wei
      });
      assert(false); //so that test fails if condition isnt met
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    await campaign.methods
      .createRequest('Buy batteries', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000',
      });

    //requests is a public variable, thus it has an automatic "fetch" method
    //like mappings, can only return a certain index, and its properties

    const request = await campaign.methods.requests(0).call();
    assert.equal('Buy batteries', request.description); //Checking one variable should suffice
  });

  it('processes requests', async () => {
    //Here accounts[0] is the manager

    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether'),
    });

    await campaign.methods
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000',
      });

    //Only one request created, must be at index 0

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000',
    });

    let iniBalance = await web3.eth.getBalance(accounts[1]);
    iniBalance = web3.utils.fromWei(iniBalance, 'ether');
    iniBalance = parseFloat(iniBalance);
    //console.log(iniBalance);

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000',
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance); //Takes a string, tries to turn it into a decimal number
    //console.log(balance);
    assert(balance > iniBalance + 4.9);
  });

  //Test trying to finalize request without enough approval

  //Test trying to use manager-only functions without being the manager
});
