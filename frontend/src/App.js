import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';

import CreateOwner from './components/CreateOwner';
import CreateBusiness from './components/CreateBusiness';
import CreateProduct from './components/CreateProduct';
import BusinessList from './components/BusinessList';

function App() {
  return (
    <Router>
      <Navigation>

      </Navigation>
        <div className="container p-4">
          <Route exact path="/" component={BusinessList}></Route>
          <Route path="/busine" component={CreateBusiness}></Route>
          <Route path="/owner" component={CreateOwner}></Route>
          <Route path="/product" component={CreateProduct}></Route>
        </div>
    </Router>
  );
}

export default App;
