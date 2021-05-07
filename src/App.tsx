import React, { Component } from 'react';
import Auth from './auth/Auth';
import Footer from './site/Footer';
import AdminNavbar from '../src/components/admin/AdminNavbar';
import Navbar from '../src/site/Navbar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/site/Home';
import SwitchController from '../src/site/SwitchController';

type sessionState = {
  sessionToken: string | null;
  firstName: string | null | undefined;
  userRole: string;
  userId: number;
};

export default class BoardApp extends Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);
    this.state = {
      sessionToken: "",
      firstName: "",
      userRole: "",
      userId: 0
    };
    this.protectedViews = this.protectedViews.bind(this);
  }

  componentDidUpdate() {
    console.log("Updated");
    console.log(`User is admin: ${localStorage.getItem('userRole')}`);
  }

  updateUserRole = (newUserRole: string) => {
    if (newUserRole !== null) {
      this.setState({ userRole: newUserRole });
      localStorage.setItem('userRole', newUserRole);
    } else {
      this.setState({ userRole: 'false' });
      localStorage.setItem('userRole', 'false');
    }
    console.log('Local Storage: ', localStorage);
    console.log(`Admin?: ${this.state.userRole}`);
  };

  updateSessionToken = (newToken: string) => {
    localStorage.setItem('sessionToken', newToken);
    this.setState({ sessionToken: newToken });
    console.log(`Token: ${newToken}`);
  };

  updateFirstName = (newFirstName: string) => {
    localStorage.setItem('firstName', newFirstName);
    this.setState({ firstName: newFirstName });
    console.log(`FirstName: ${newFirstName}`);
  };

  updateUserId = (newUserId: number) => {
    this.setState({ userId: newUserId });
    console.log('userId from app: ', newUserId);
  };

  clearUser = () => {
    localStorage.clear();
    this.setState({ sessionToken: '', userRole: 'false' });
  };

  protectedViews = () => {
    console.log('userRole: ', this.state.userRole);
    return this.state.sessionToken === localStorage.getItem('sessionToken') ? (
      localStorage.getItem('userRole') === 'true' ? (
        <AdminNavbar
          clearUser={this.clearUser}
          firstName={this.state.firstName}
        />
      ) : (
        <Navbar
          clearUser={this.clearUser}
          firstName={this.state.firstName}
          sessionToken={this.state.sessionToken}
        />
      )
    ) : (
      <Route exact path='/home'>
        <Auth
          updateSessionToken={this.updateSessionToken}
          updateUserRole={this.updateUserRole}
        />
        
        <Home />
      </Route>
    );
  };
  componentDidMount() {
    console.log('Mounted');
    if (localStorage.getItem('firstName')) {
      this.setState({ firstName: localStorage.getItem('firstName') });
    }
    if (localStorage.getItem('sessionToken')) {
      this.setState({ sessionToken: localStorage.getItem('sessionToken') });
    }
  }

  render() {
    const session = localStorage.getItem('sessionToken');
    return (
      <div>
          <Home />
        <h2>Board</h2>
        <Router>
          {!session ? (
            <Auth updateSessionToken={this.updateSessionToken} updateUserRole={this.updateUserRole} />
          ) : (
            this.protectedViews()
          )}
          <SwitchController
            updateSessionToken={this.updateSessionToken}
            updateUserRole={this.updateUserRole}
            updateFirstName={this.updateFirstName}
            protectedViews={this.protectedViews}
            clearUser={this.clearUser}
            sessionToken={this.state.sessionToken}
            firstName={this.state.firstName}
            userRole={this.state.userRole}
            userId={this.state.userId}
          />
          {console.log('Bottom of App')}
        </Router>
            <Footer />
      </div>
    )
  }

}



