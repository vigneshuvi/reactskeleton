import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
};


class Header extends Component {

  showMenu() {
     this.props.changeDrawerStatus(true)
  }
  
  render() {
    const { user } = this.props.user
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu" onClick={this.showMenu.bind(this)}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Home
            </Typography>
            <Button color="contrast">Home</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  user:  PropTypes.object.isRequired,
  changeDrawerStatus:  PropTypes.func.isRequired,
};


// No need to connect()!
export default withStyles(styles)(Header);