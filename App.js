import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Globals/Header/Header";
import CustomerSignup from "./Components/Auth/Signup/Customer/Signup";
import DriverSignup from "./Components/Auth/Signup/Driver/Signup";
import CustomerLogin from "./Components/Auth/Login/Customer/Login";
import DriverLogin from "./Components/Auth/Login/Driver/Login";
import Footer from "./Components/Globals/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Mybookings from "./Components/Globals/Mybookings/Mybookings.jsx";
import Transactions from "./Components/Globals/Transactions/Transactions";
import Quotes from "./Components/Quotes/Quotes";
import Studentinfo from "./Components/Globals/Studentinfo/Studentinfo";
import Dashboard from "./Components/Globals/Dashboard/Dashboard";
import TrackLive from "./Components/Globals/TrackLive/TrackLive";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/booking" component={Mybookings} />
        <Route exact path="/track" component={TrackLive} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/customer" component={CustomerSignup} />
        <Route exact path="/driver" component={DriverSignup} />
        <Route exact path="/customerlogin" component={CustomerLogin} />
        <Route exact path="/driverlogin" component={DriverLogin} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/studentinfo" component={Studentinfo} />
        {/* <Route exact path="/" component={Login} /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
