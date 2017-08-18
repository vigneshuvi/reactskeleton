import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

// Material Styles
import { withStyles } from 'material-ui/styles';


// Components
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader} from 'material-ui/Card';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import Slide from 'material-ui/transitions/Slide';


// Icons
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import SettingsPowerIcon from 'material-ui-icons/SettingsPower';
import cookie from 'react-cookies';

// Local Image
import remyImage from '../images/user.jpg';

// Style constant for Nav menu component
const styles = {
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
  avatar: {
    margin: 5,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

const mainOptions = [
  {
     "iconName": <InboxIcon/>,
     "title": "Inbox"
  },
  {
     "iconName": <StarIcon/>,
     "title": "Starred"
  },
  {
     "iconName": <SendIcon/>,
     "title": "Send mail"
  },
  {
     "iconName": <DraftsIcon/>,
     "title": "Drafts"
  },
];

const subOptions = [
  {
     "iconName": <SettingsPowerIcon/>,
     "title": "Logout"
  }
];

class NavMenu extends Component {

  state = {
    open: false,
  };

  logoutAction = () => {
        cookie.remove('token', { path: '/' });
        cookie.remove('email', { path: '/' });
        this.props.logOut();
  }

  handleLogoutAction = (status) => {
    this.setState({ open: false });
    if (status) {
        setTimeout(function() { 
          this.logoutAction(); 
        }.bind(this), 1000);
    }
  };


  handleLogoutYesAction = () => this.handleLogoutAction(true);
  handleLogoutNoAction = () => this.handleLogoutAction(false);

  handleLogoutState() {  
    this.setState({ open: true });
  }

  toggleDrawer = (side, open) => {
    this.props.changeDrawerStatus(open);
  };

  handleLeftOpen = () => this.toggleDrawer('left', true);
  handleLeftClose = () => this.toggleDrawer('left', false);




  render() {
    const page = this.props.page
    const classes = this.props.classes;

    const logoutPopupBox =  (
      <div>
        <Dialog open={this.state.open} transition={Slide} onRequestClose={this.handleLogoutNoAction}>
          <DialogTitle>
            {"React Skeleton"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure want to logout the app?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleLogoutYesAction} color="primary">
              Yes
            </Button>
            <Button onClick={this.handleLogoutNoAction} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
   
   // Main menu list
    const mainListItems = (
      <div>
        {mainOptions.map(option =>
            <ListItem button key={option.title}>
              <ListItemIcon>
                {option.iconName}
              </ListItemIcon>
              <ListItemText primary={option.title}/>
            </ListItem>
          )}
      </div>
    );

    // Sub menu list
    const subListItems = (
      <div>
        {subOptions.map(option =>
            <ListItem button key={option.title} onClick= {() => this.handleLogoutState()}>
              <ListItemIcon>
                {option.iconName}
              </ListItemIcon>
              <ListItemText primary={option.title}/>
            </ListItem>
          )}
      </div>
    );

    // Merge list with card.
    const sideList = (
      <div>
       <Card className={classes.card}>
          <CardHeader
            avatar= {
              <Avatar
                alt="Adelle Charles"
                src={remyImage}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            }
            title="Vignesh kumar"
            subheader="September 14, 2017"
          />
        </Card>
        <List className={classes.list} disablePadding>
          {mainListItems}
        </List>
        <Divider />
        <List className={classes.list} disablePadding>
          {subListItems}
        </List>
      </div>
    );

    const status = this.state.open ? this.state.open : page.drawerStatus;

    return (
      <Drawer
          open={status}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleLeftClose} >
        {sideList}
        {logoutPopupBox}
      </Drawer>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  user:  PropTypes.object.isRequired,
  page:  PropTypes.object.isRequired,
  changeDrawerStatus:  PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired
};


// No need to connect()!
export default withStyles(styles)(NavMenu);

