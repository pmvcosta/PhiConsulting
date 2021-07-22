import web3 from './web3'; //retrieving the created instance of Web3
import CampaignFactory from './build/CampaignFactory.json';

//give the location of the deployed factory Contract
//pass the ABI (interface) and the address contract was deployed to

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x74E13F6C7652dc847e1C3E93da22104475ABB61a'
);

/*const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  process.env.FACTORY_ADDRESS
);*/

export default instance;
