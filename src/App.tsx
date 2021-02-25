import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Lending from './components/Lending/Lending';
import Multiexchange from './components/Multiexchange/Multiexchange';


import "./App.css";
import BtcToEs from "./components/BtcToEs/BtcToEs";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/*" component={Navbar} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lending" exact component={Lending} />
          <Route path="/multiexchange" exact component={Multiexchange} />
          <Route path="/btc-to-es" exact component={BtcToEs} />
        </Switch>
        <Route path="/*" component={Footer} />
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
