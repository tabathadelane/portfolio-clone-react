import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Components/Header'
import Content from './Components/Content'

import About from "./Views/About";
import Contact from "./Views/Contact";
import Trversal from "./Views/Trversal";
import Critical from "./Views/Critical";
import Habitat from "./Views/Habitat";
import Vgct from "./Views/Vgct";



function App() {
  return (
    <div className="">
      <Header />
      <Router>
        <Content />

        <div className="p-3">

          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Habitat">
              <Habitat />
            </Route>
            <Route path="/Trversal">
              <Trversal />
            </Route>
            <Route path="/Critical">
              <Critical />
            </Route>
            <Route path="/Vgct">
              <Vgct />
            </Route>
          </Switch> 
        </div>
      </Router>
      
    </div>
  );
}

export default App;
