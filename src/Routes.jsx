var React = require("react");
var ReactRouter = require("react-router");
// var CreateHistory = require("history").createHashHistory;
var BrowserHistory = ReactRouter.browserHistory;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var useRouterHistory = ReactRouter.useRouterHistory;

var Base = require("./components/Base.jsx");
var PageTemplate = require("./components/PageTemplate.jsx");
var FoodRoulettePage = require("./components/FoodRoulettePage.jsx");

// var History = useRouterHistory(CreateHistory)({
//   queryKey: false
// });

var Routes = (
  <Router history = {BrowserHistory}>
    <Route path = "/" component = {Base}>
      <Route path = "*" component = {FoodRoulettePage} />
    </Route>
  </Router>
);

module.exports = Routes;
