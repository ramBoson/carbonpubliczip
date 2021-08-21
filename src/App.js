import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/HomePage';
import NFTMarketplace from './components/NFTMarketplace';


function App() {
  return (
    <Router basename="/">
        <Switch>
          <Route path="/nft-marketplace">
            <NFTMarketplace />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
