import React from 'react';
/*import logo from './logo.svg';*/
//import image from './assests/images/logo.png';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Dashboard from "./Containers/Dashboard";
import * as ROUTES from "./Constants/routes.js";
import About from "./Containers/About";
import Resume from './Containers/Resume';
import Calculator from './Containers/CalculatorPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Dashboard} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.RESUME} component={Resume} />
            <Route exact path={ROUTES.CALCULATOR} component={Calculator} />
            
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

