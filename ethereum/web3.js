import Web3 from 'web3';

let web3; //so that it can be reassigned

//typeof can be used to check if a variable is defined

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //inside browser, metamask available
  console.log('BLAH');
  web3 = new Web3(window.web3.currentProvider);
  console.log(web3);
} else {
  //Not in browser (we are on the server) or metamask isnt available
  //Set up our own provider using infura
  console.log('I am here');
  /*const options = {
    keepAlive: true,
    timeout: 20000, // milliseconds,
    headers: [
      {
        name: 'Access-Control-Allow-Origin',
        value: process.env.INFURA_PROVIDER,
      },
    ],
    reconnect: {
      auto: true,
      delay: 5000, // ms
      maxAttempts: 5,
      onTimeout: false,
    },
  };*/
  const provider = new Web3.providers.HttpProvider(process.env.INFURA_PROVIDER);
  web3 = new Web3(provider);
  console.log(web3);
}

export default web3;

//const web3 = new Web3(window.web3.currentProvider);

//Assumes that metamask already injects a web3 instance onto the page

//Will fail if customer doesnt have metamask
