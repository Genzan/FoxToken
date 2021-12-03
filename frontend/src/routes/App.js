// Import external libraries
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import Internal Components
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import NotFound from '../pages/NotFound';

const App =() => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Navbar component={<Home />} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
