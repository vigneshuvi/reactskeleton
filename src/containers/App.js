import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withCookies, Cookies } from 'react-cookie';
import axios from "axios";

// Custom Pages

import WelcomePage from '../pages/WelcomePage'

// Custom components
import Header from '../components/Header'
import NavMenu from '../components/NavMenu'
import MainContainer from '../components/MainContainer'
import AppFooter from '../components/AppFooter'

// All registered Actions.
import * as AllActions from '../actions'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';

import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme1 = createMuiTheme({
  palette: createPalette({
    type:  'light', // Switching the dark mode on is a single property value change.
  }),
});


const theme2 = createMuiTheme({
  palette: createPalette({
    primary: purple, // Purple and green play nicely together.
    accent: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  }),
});

class App extends Component {
 
  componentWillMount(){
    // perform any preparations for an upcoming update
     const { cookies } = this.props;
    var email = cookies.get('email') || null;
    var token = cookies.get('token') || null;
    if (email || token) {
        this.props.actions.loginSuccessEvent(email,"",token);
    }
  }
  handleUserDetailsChange(email, token) {
    const { cookies } = this.props;
    cookies.set('email', email, { path: '/' });
    cookies.set('token', token, { path: '/' });
  }
 
  render() {
    const { cookies } = this.props;
    var email = cookies.get('email') || '';
    var token = cookies.get('token') || '';

    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    }

    const { user, posts, page } = this.props;
    var isLoggedIn = user.loggedIn;

    if(isLoggedIn){
      email = user.user.email;
      token = user.user.token;
      this.handleUserDetailsChange(email, token)
    } else {
      if (token.length !== 0) {
        isLoggedIn = true;
      }
    } 

    if (!isLoggedIn) {
        email = user.user.email;
        token = user.user.token;
        this.handleUserDetailsChange(email, token)
        return (
          <MuiThemeProvider theme={theme1}>
            <div>
              <WelcomePage user={user}  loginUser={this.props.actions.loginUser}/>
            </div>
          </MuiThemeProvider >
        );
    }
    
    const changedTheme = page.themeChange ? page.themeChange : localStorage.getItem('theme-change-event');
    return (
      <MuiThemeProvider theme={changedTheme ? theme2 : theme1}>
        <div >
          <Header user={user} changeDrawerStatus={this.props.actions.changeDrawerStatus}/>
          <NavMenu user={user} page={page} changeDrawerStatus={this.props.actions.changeDrawerStatus} changeThemeStatus={this.props.actions.changeThemeStatus} logOut={this.props.actions.logOut}/>
          <MainContainer page={page} user={user} posts={posts}/>
          <AppFooter  user={user} />
        </div>
      </MuiThemeProvider >
    );
  }
}

App.propTypes = {
  posts: PropTypes.object.isRequired,
  user:  PropTypes.object.isRequired,
  page:  PropTypes.object.isRequired,
  cookies: instanceOf(Cookies).isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user,
  page:  state.page,
  env: state.env,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (withCookies(App));
