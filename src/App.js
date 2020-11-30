import React from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import './App.css'
import Cart from './components/Cart.jsx'
import Description from './components/Description.jsx'
import Product from './components/Product.jsx'
import Navigate from './components/Navigate.jsx'

function App() {
  return (
    <div>     
      <div className="container-fluid px-0">
        <Router>
            <Navigate />
            <Switch>
                <Route exact path={["/", "/product"]} component={Product} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/description/:id" component={Description} />
            </Switch>
        </Router>
      </div>
    </div>
    
  );
}

export default App;
