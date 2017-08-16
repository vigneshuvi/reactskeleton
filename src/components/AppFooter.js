import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
};

class AppFooter extends Component {
  render() {
    const classes = this.props.classes;
    return (
          <div className={classes.root}>
          <div>
            <div>
              More Information
            </div>
            <ul>
              <li><a href="">Web Starter Kit</a></li>
              <li><a href="">Help</a></li>
              <li><a href="">Privacy and Terms</a></li>
            </ul>
          </div>
        </div>

    );
  }
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

// No need to connect()!
export default withStyles(styles)(AppFooter);
