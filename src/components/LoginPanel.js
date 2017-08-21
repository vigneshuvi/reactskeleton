import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material Styles
import { withStyles } from 'material-ui/styles';

// Material design components
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import List, { ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';
import { LinearProgress } from 'material-ui/Progress';



// Constants
import { EMAIL_REQUIRED, PASSWORD_REQUIRED, EMAIL_VALIDATE_ERROR, PASSWORD_VALIDATE_ERROR } from '../constants/LoginActionTypes'


const styles = theme => ({
  container: {
    justify: 'center',
    align: 'center',
    flexGrow: 1,
    direction: 'row',
    marginTop: 50,
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



const initialState = {
        email: "",
        password :"",
        error: false,
        errorMessage: "",
    };

class LoginPanel extends Component {
  constructor(props) {
  super(props);
    this.state = initialState;
  }

  handleRequestClose = () => {
    this.setState({
       error: false, errorMessage: ""
    });
  };

  handleLogin() {
     var email = document.getElementById('email').value
     var password = document.getElementById('password').value
     if (email.length === 0) {
        this.setState({ error: true, errorMessage: EMAIL_REQUIRED})
     } else if (!this.validateEmail(email)) {
        this.setState({ error: true, errorMessage: EMAIL_VALIDATE_ERROR})
     } else if (password.length === 0) {
        this.setState({ error: true, errorMessage: PASSWORD_REQUIRED})
     } else if (password.length < 5) {
        this.setState({ error: true, errorMessage: PASSWORD_VALIDATE_ERROR})
     } else if (email && password) {
        this.setState({ error: false, errorMessage: ""})
        this.props.loginUser(email,password)
     }
  }

  handleReload() {
     this.setState(initialState);
  }

  validateEmail = (email) => {
    if (email.length > 0) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let status = re.test(email);
      return status;
    }
    return false;
  }

  validateEmailWithErrorMessage = (email) => {
    if (email.length > 0) {
      let status = this.validateEmail(email);
      return !status ? EMAIL_VALIDATE_ERROR :  "";
    }
    return "";
  }

  handleEmailChange = () => this.validateEmailWithErrorMessage(this.state.email);

  render() {
    const { user, loggingIn } = this.props.user
    const classes = this.props.classes;
    console.log(user);
    return (
      <div className={classes.container}>
       <Grid container spacing={24}>
        <Grid item xs>
        </Grid>
        <Grid item xs className={classes.grid}>
            <Card className={classes.card}>
              <List>
                <ListItem>
                  <TextField
                    required
                    id="email"
                    type="email"
                    label="Email"
                    value={this.state.email}
                    onChange={event => this.setState({ email: event.target.value })}
                    helperText={this.handleEmailChange()} 
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    required
                    id="password"
                    value={this.state.password}
                    onChange={event => this.setState({ password: event.target.value })}
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
              {loggingIn && <LinearProgress mode="query"/>}
              <List>
                <ListItem>
                <Grid container spacing={24}>
                  <Grid item xs={6}>
                  <Button raised color="primary" className={classes.button} onClick={this.handleLogin.bind(this)} >
                      Sign In
                  </Button>
                  </Grid>
                  <Grid item xs={6}>
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
        <div>
        <Snackbar
          open={this.state.error}
          message={this.state.errorMessage}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
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
