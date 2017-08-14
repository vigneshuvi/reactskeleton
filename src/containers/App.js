import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withCookies, Cookies } from 'react-cookie';

import Header from '../components/Header'
import NavMenu from '../components/NavMenu'
import MainContainer from '../components/MainContainer'
import AppFooter from '../components/AppFooter'
import MyForm from '../components/MyForm'

import * as AllActions from '../actions'

class App extends Component {
 
  componentWillMount() {
    const { cookies } = this.props;
 
    this.state = {
      name: cookies.get('name') || ''
    };
  }
 
  handleNameChange(name) {
    const { cookies } = this.props;
    cookies.set('name', name, { path: '/' });
  }
 
  render() {
    var name = this.state.name;
    const { user, posts, page } = this.props;
    if (user.user.email.length !== 0) {
      name = user.user.email;
      this.handleNameChange(user.user.email)
    }
    if ( name.length === 0 && !user.loggedIn) {
        return (
          <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header ">
            <Header user={user}/>
            <NavMenu user={user}/>
            <MyForm user={user}  loginUser={this.props.actions.loginUser}/>
          </div>
        );
    }

    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header user={user}/>
        <NavMenu user={user}/>
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
  actions: PropTypes.object.isRequired
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
