import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavMenu extends Component {

  render() {
    const { user } = this.props.user
    if (user.email.length === 0) {
      return (
        <div className="demo-drawer mdl-layout__drawer visuallyhidden" aria-hidden="true">
        <header className="demo-drawer-header">
        </header>
        </div>
    );
    }
    return (
       <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50" aria-hidden="true">
        <header className="demo-drawer-header">
          <img src="images/user.jpg" className="demo-avatar"/>
          <div className="demo-avatar-dropdown">
            <span>hello@example.com</span>
            <div className="mdl-layout-spacer"></div>
            <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i className="material-icons" role="presentation">arrow_drop_down</i>
              <span className="visuallyhidden">Accounts</span>
            </button>
            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
              <li className="mdl-menu__item">hello@example.com</li>
              <li className="mdl-menu__item">info@example.com</li>
              <li className="mdl-menu__item"><i className="material-icons">add</i>Add another account...</li>
            </ul>
          </div>
        </header>
        <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Spam</a>
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
          <div className="mdl-layout-spacer"></div>
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span className="visuallyhidden">Help</span></a>
        </nav>
      </div>
    );
  }
}

NavMenu.propTypes = {
    user:  PropTypes.object.isRequired
}

// No need to connect()!
export default NavMenu;
