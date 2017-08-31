import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';

import NavigationClose from 'material-ui-icons/Close';
import Button from 'material-ui/Button';

// Material design components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

// Meteraial Icons
import AccountBox from 'material-ui-icons/AccountBox';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
    fontSize:14,
  },
  title: {
    cursor: 'pointer',
  },
};

class FCPanel extends Component {

  leftIconClickAction() {
  }

  righttIconClickAction() {
  }

  render() {
    const  title = this.props.title
    const classes = this.props.classes;
    // layout is an array of objects, see the demo for more complete usage
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu" onClick={this.leftIconClickAction.bind(this)}>
              <AccountBox />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            <IconButton color="contrast" aria-label="Menu" onClick={this.leftIconClickAction.bind(this)}>
              <NavigationClose />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}


FCPanel.propTypes = {
    title:  PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
}

// No need to connect()!
export default withStyles(styles)(FCPanel);