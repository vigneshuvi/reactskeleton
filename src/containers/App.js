import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withCookies, Cookies } from 'react-cookie';


import Header from '../components/Header'
import NavMenu from '../components/NavMenu'
import MainContainer from '../components/MainContainer'
import AppFooter from '../components/AppFooter'
import LoginPanel from '../components/LoginPanel'

import * as AllActions from '../actions'



class App extends Component {
 
  handleUserDetailsChange(email, token) {
    const { cookies } = this.props;
    cookies.set('email', email, { path: '/' });
    cookies.set('token', token, { path: '/' });
  }
 
  render() {
    const { cookies } = this.props;
    var email = cookies.get('email') || '';
    var token = cookies.get('token') || '';

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
          <div>
            <LoginPanel user={user}  loginUser={this.props.actions.loginUser}/>
          </div>
        );
    }

    return (
      <div >
        <Header user={user} changeDrawerStatus={this.props.actions.changeDrawerStatus}/>
        <NavMenu user={user} page={page} changeDrawerStatus={this.props.actions.changeDrawerStatus} logOut={this.props.actions.logOut}/>
        <MainContainer page={page} user={user} posts={posts}/>
        <AppFooter  user={user} />
      </div>
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
