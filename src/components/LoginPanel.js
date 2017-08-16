import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import List, { ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justify: 'center',
    align: 'flxe-start',
    direction: 'row',
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    justify: 'center',
    width: 300,
  },
  button: {
    margin: theme.spacing.unit,
    textAlign: 'center',
  },
  card : {
    justify: 'center',
  },
  input: {
    justify: 'center',
    display: 'none',
  },
});


class LoginPanel extends Component {

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

  handleChange() {
  }
  render() {
    const { user } = this.props.user
    const classes = this.props.classes;
    console.log(user);
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <List>
            <ListItem>
              <TextField
                required
                id="email"
                label="Email"
                className={classes.textField}
                margin="normal"
              />
            </ListItem>
            <ListItem>
              <TextField
                required
                id="password"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
            <Grid container spacing={24}>
              <Grid item xs={6}>
              <Button raised color="primary" className={classes.button} onClick={this.handleLogin.bind(this)} >
                  Sign In
              </Button>
              </Grid>
              <Grid item xs={6} >
                <Button raised color="accent" className={classes.button} onClick={this.handleReload.bind(this)}>
                  Reload
                </Button>
              </Grid>
            </Grid>    
            </ListItem>
          </List>
        </Card>
      </div>
    );
  }
}

LoginPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user:  PropTypes.object.isRequired
}

export default withStyles(styles)(LoginPanel);
