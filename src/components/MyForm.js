import React, { Component } from 'react'
import PropTypes from 'prop-types'


class MyForm extends Component {

  handleLogin() {
     var email = document.getElementById('email').value
     var password = document.getElementById('password').value
     if (email && password) {
        this.props.loginUser(email,password)
     }

  }

  handleReload() {
     this.props.loginUser("","")
  }

  render() {
    const { user} = this.props.user
    console.log(user);
    return (
          <div className="demo-cards mdl-grid">
            <ul className="mdl-list">
                <li className="mdl-list__item">
                  <form action="#">
                    <li className="mdl-list__item">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input className="mdl-textfield__input" type="email" id="email"/>
                          <label className="mdl-textfield__label" htmlFor="sample1">Email</label>
                         <span className="mdl-textfield__error">Please enter valid email!</span>
                      </div>
                    </li>
                    <li className="mdl-list__item">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" pattern="[a-zA-Z]{5,}" type="password" id="password"/>
                            <label className="mdl-textfield__label" htmlFor="sample1">Password</label>
                            <span className="mdl-textfield__error">Please enter valid password!</span>
                        </div>
                    </li>
                </form>
              </li>
              <li className="mdl-list__item">
                  <div className="mdl-grid">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.handleLogin.bind(this)}>
                      Submit
                    </button> 
                  </div>
                  <div className="mdl-grid">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.handleReload.bind(this)}>
                      Reload
                    </button>
                  </div>
            </li>
          </ul>
          </div>
    );
  }
}

MyForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    user:  PropTypes.object.isRequired
}

export default MyForm;
