import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    
    <Router>
      <Header />
      <Switch>
        <Route exact
          path="/"
          component={Landing}
        />
        <Route
          path="/electricalcomp"
          component={Electricalcomp }
          exact={Electricalcomp }
        />
        <Route
          path="/members"
          component={Members}
          exact={Members }
        />
        <Route
          path="/carrierview"
          component={Carrierview }
          exact={Carrierview }
        />
        <Route
          path="/payloadview"
          component={Payloadview }
          exact={Payloadview }
        />
        <Route
          path="/mission"
          component={Mission }
          exact={Mission }
        />
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
