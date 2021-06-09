import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Buy from "./pages/Buy";
import Deals from "./pages/Deals";
import Wallet from "./pages/Wallet";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import LoginForm from "./components/form/LoginForm";
import SignUpForm from "./components/form/SignUpForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/buysell" component={Buy} />
          <Route path="/deals" component={Deals} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/support" component={Support} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
          <Route path="/loginform" component={LoginForm} />
          <Route path="/signupform" component={SignUpForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
