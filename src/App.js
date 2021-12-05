import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
// import Wallet from "./pages/Wallet";
import Login from "./pages/Login";
import LoginForm from "./components/form/LoginForm";
import SignUpForm from "./components/form/SignUpForm";
import Tracker from "./pages/Tracker";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/hivecoin/" exact component={Dashboard} />
          <Route path="/hivecoin/buy" component={Buy} />
          <Route path="/hivecoin/sell" component={Sell} />
          <Route path="/hivecoin/wallet" component={Dashboard} />
          <Route path="/hivecoin/login" component={Login} />
          <Route path="/hivecoin/tracker" component={Tracker} />
          <Route path="/hivecoin/loginform" component={LoginForm} />
          <Route path="/hivecoin/signupform" component={SignUpForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
