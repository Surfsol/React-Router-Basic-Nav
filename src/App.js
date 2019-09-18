import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';
//above, seems to be from ./components/index
//would make it eaiser to import from one location

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component = {Home} />
    <Route path="/about" component ={About}/>
    <Route path="/contact" component ={Contact}/>
  </div>
);

export default App;
