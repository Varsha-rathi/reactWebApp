import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Landing from './components/landing';
import Subsystems from './components/carrierview';
import Header from './core/header';
import Footer from './core/footer';
import Members from "./components/members";
import Electricalcomp from './components/electricalcomp';
import Carrierview from "./components/carrierview";
import Payloadview from "./components/payloadview";
import Mission from "./components/mission";

function App() {
  return (
    
    <div>
      <Header />
      <Switch>
        <Route exact
          path="/"
          component={Landing}
        />
        <Route
          path="/electricalcomp"
          component={Electricalcomp }
          exact={true }
        />
        <Route
          path="/members"
          component={Members}
          exact={true }
        />
        <Route
          path="/carrierview"
          component={Carrierview }
          exact={true }
        />
        <Route
          path="/payloadview"
          component={Payloadview }
          exact={true }
        />
        <Route
          path="/mission"
          component={Mission }
          exact={true }
        />
        <Route exact path="/model">
          <Redirect push to={"../model/index.html"} />
        </Route> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
