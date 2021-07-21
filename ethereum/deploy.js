const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

//Only CampaignFactory needs to be deployed like this
//Instances of campaign are created by the factory

//Provide 12-word-mnemonic and address of node to connect to
/*const provider = new HDWalletProvider(
  'cereal lobster inject grow trigger match seed dog tone festival toward faint',
  'https://rinkeby.infura.io/v3/3a47dfdd4321468da86e76aa75ee63d3'
);*/
const provider = new HDWalletProvider(
  process.env.MM_MNEMONIC,
  process.env.INFURA_PROVIDER
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  //for version 0.0.3 of truffle-HDWalletProvider:
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  //for versions 0.0.4, 0.0.5 & 0.0.6 of truffle-HDWalletProvider.

  /*const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
     .send({from: accounts[0]}); // remove 'gas'*/

  //Console log interface and contract address
  console.log(compiledFactory.interface);
  console.log('Contract deployed to', result.options.address);
};

deploy();

//Deployed to address 0x3906e03c3d602a207959c17dD78dBe55998C632b
