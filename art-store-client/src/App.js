import React from 'react';
import 'normalize.css'; // Note this;
import Home from './components/Home';
import Contact from './components/Contact'
import Order from './components/Order';
import Product from './components/Products'
import { BrowserRouter as Router, Route,Switch,  Link} from 'react-router-dom';
import Menubar from './Navbar'


import './App.scss'

function App() {
  return (
    <div className="App">
      <h1><button tag={Link} to="/Home">Enter</button>
      <span> GATEWAY TO INDIAN ART</span>      </h1>

      <Router>
        <Menubar/>        
        <Switch>
          <Route exact path='/product' component={Product}/>
          <Route exact path='/order/:id' component={Order}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/'  component={Home}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
