const routes = require('next-routes')();

//routes.add('...', '...');
//First argument is what we take as a "routing indicator", and the second is
//where we route it to
//Routes get parsed in the order they are written
routes
  .add('/', '/index')
  .add('/openCampaigns', '/openCampaigns')
  .add('/login', '/login')
  .add('/subscribe', '/subscribe')
  .add('/register', '/register')
  .add('/aboutUs', '/aboutUs')
  .add('/getStarted', '/getStarted')
  .add('/dashboard', '/dashboard/index') //in the future maybe include a wildcard
  .add('/campaigns/new', '/campaigns/new') //must come first!
  .add('/campaigns/:address', '/campaigns/show') //":" denotes a "wildcard"
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

//need to account for exceptions of routes within /campaigns that are not
//campaigns, i.e. "new"

module.exports = routes; //exports helpers to navigate application
