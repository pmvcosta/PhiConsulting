const routes = require('next-routes')();

//routes.add('...', '...');
//First argument is what we take as a "routing indicator", and the second is
//where we route it to
//Routes get parsed in the order they are written
routes
  .add('/', '/index')
  .add('/openCampaigns', '/openCampaigns')
  .add('/dashboard', '/dashboard/index')
  .add('/dashboard/activeCampaigns', '/dashboard/activeCampaigns')
  .add('/dashboard/pendingCampaigns', '/dashboard/pendingCampaigns')
  .add('/dashboard/completedCampaigns', '/dashboard/completedCampaigns')
  .add('/dashboard/pendingRequests', '/dashboard/pendingRequests')
  .add('/dashboard/completedRequests', '/dashboard/completedRequests')
  .add('/dashboard/newRequest', '/dashboard/newRequest')
  .add('/dashboard/newCampaign', '/dashboard/newCampaign')
  .add('/dashboard/:campaignName', '/dashboard/showCampaign')
  .add('/login', '/login')
  .add('/subscribe', '/subscribe')
  .add('/register', '/register')
  .add('/aboutUs', '/aboutUs')
  .add('/getStarted', '/getStarted');
//in the future maybe include a wildcard

//need to account for exceptions of routes within /campaigns that are not
//campaigns, i.e. "new"

module.exports = routes; //exports helpers to navigate application
