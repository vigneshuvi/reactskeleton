import React, { Component } from 'react'

class AppFooter extends Component {


  render() {
    return (
          <footer className="mdl-mega-footer">
          <div className="mdl-mega-footer--bottom-section">
            <div className="mdl-logo">
              More Information
            </div>
            <ul className="mdl-mega-footer--link-list">
              <li><a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy and Terms</a></li>
            </ul>
          </div>

        </footer>

    );
  }
}

// No need to connect()!
export default AppFooter;
