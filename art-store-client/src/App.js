import React from 'react';
import 'normalize.css'; // Note this;
import Home from './components/Home';
import Contact from './components/Contact'
import Order from './components/Order';
import Product from './components/Products'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';


import './App.scss'

function App() {
  return (
    <div className="App">
      <h1>
      <span> GATEWAY TO INDIAN ART</span>      </h1>

      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/product' component={Product}/>
          <Route exact path='/order/:id' component={Order}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/Home' component={Home}/>
          <Route exact path='/'  component={Home}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
