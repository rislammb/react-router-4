import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../auth';

class Logout extends Component {
  state = {
    redirect: false
  };
  componentDidMount() {
    Auth.logout(() => {
      this.setState({ redirect: true });
    });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    } else {
      return <h1>Login out....</h1>;
    }
  }
}

export default Logout;
