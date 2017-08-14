import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyForm extends Component {

  handleLogin() {
     this.props.loginUser("vignesh","kumar")
  }

  handleReload() {
     this.props.loginUser("","")
  }

  render() {
    const { user } = this.props.user
    console.log(this.props.user);
    console.log(user.email);
    return (
      <div>
        <form >
            <div>
              <label>Email: </label>
              <input type="text" placeholder="Email" value={user.email}/> 
            </div>
            <div> 
              <label>Password: </label>
              <input type="password" placeholder="Password" value={user.password}/>
            </div>
        </form>
        <div>
          <button onClick={this.handleLogin.bind(this)}>Submit</button>
          <button onClick={this.handleReload.bind(this)}>Reload</button>
        </div>
      </div>
    );
  }
}


MyForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    user:  PropTypes.object.isRequired
}

// No need to connect()!
export default MyForm;
