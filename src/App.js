import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Logout from './components/Logout';
import Test from './components/Test';

import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <PrivateRoute path='/posts/:postId' component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
