import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import List, { ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  container: {
    justify: 'center',
    align: 'center',
    flexGrow: 1,
    direction: 'row',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  card : {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  input: {
    justify: 'center',
    display: 'none',
  },
  grid:{
    minWidth: 300,
    maxWidth: 320
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
       <Grid container spacing={24}>
        <Grid item xs>
        </Grid>
        <Grid item item xs={12} className={classes.grid}>
            <Card className={classes.card}>
              <List>
                <ListItem>
                 <Typography type="headline" component="h2">
                    Login
                </Typography>
                </ListItem>
                 <Divider />
                <ListItem>
                  <TextField
                    required
                    id="email"
                    label="Email"
                    className={classes.textField}
                    fullWidth
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
                    fullWidth
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
        </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
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
