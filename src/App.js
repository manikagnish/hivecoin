import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Buy from "./pages/Buy";
import Deals from "./pages/Deals";
import Wallet from "./pages/Wallet";
import Support from "./pages/Support";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/buysell" component={Buy} />
          <Route path="/deals" component={Deals} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/support" component={Support} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
