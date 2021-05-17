
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/landing';
import Page1 from './components/page1';
import Header from './core/header';
import Footer from './core/footer';
import Team from 'components/team';
import Electricalcomp from './components/electricalcomp';

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
          path="/page1"
          component={Page1}
          exact={Page1}
        />
        <Route
          path="/team"
          component={Team}
          exact={Team}
        />
        <Route
          path="/electricalcomp"
          component={Electricalcomp}
          exact={Electricalcomp}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
