import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Buy from "./pages/Buy";
import Deals from "./pages/Deals";
import GDeals from "./pages/GDeals";
import Wallet from "./pages/Wallet";
import Support from "./pages/Support";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/buysell" component={Buy} />
          <Route path="/deals" component={Deals} />
          <Route path="/gDeals" component={GDeals} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/support" component={Support} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
