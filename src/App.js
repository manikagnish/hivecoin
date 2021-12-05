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
          <Route path="/buy" component={Buy} />
          <Route path="/sell" component={Sell} />
          <Route path="/wallet" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/tracker" component={Tracker} />
          <Route path="/loginform" component={LoginForm} />
          <Route path="/signupform" component={SignUpForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
