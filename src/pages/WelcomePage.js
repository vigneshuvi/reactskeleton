import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material Styles
import { withStyles } from 'material-ui/styles';

// Material design components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';


import LoginPanel from '../components/LoginPanel'

// Meteraial Icons
import CakeIcon from 'material-ui-icons/Cake';

const styles = theme => ({
  root: {
    marginTop: 30,
    width: '100%',
  },
  body: {
    marginTop: 65,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});


class WelcomePage extends Component {

  render() {
    const classes = this.props.classes;
    return (
        <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <CakeIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Login
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.body}>
        <LoginPanel user={this.props.user}  loginUser={this.props.loginUser}/>
        </div>
      </div>
    );
  }
}


WelcomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  user:  PropTypes.object.isRequired,
  loginUser:  PropTypes.func.isRequired,
};



// No need to connect()!
export default withStyles(styles)(WelcomePage);
