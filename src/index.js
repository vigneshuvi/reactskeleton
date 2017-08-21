import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';
import { Router, Route } from 'react-router'


import createBrowserHistory from 'history/createBrowserHistory'
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App'
import store from './store'


console.log(store.getState())

let history = createBrowserHistory();


history.listen((location, action) => {
  console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  console.log(`The last navigation action was ${action}`)
})

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// listen to storage event
window.addEventListener('storage', function(event){
    // do what you want on logout-event
    if (event.key === 'login-event') {
      window.location.reload()
      // window.location = "logout.php";
    } 
}, false);


class UviApp extends Component {
  render() {
    return (<Provider store={store}>
      <CookiesProvider>
        <Router history={history}>
          <div>
           <Route exact path="/" component={App}/>
          </div>
        </Router>
      </CookiesProvider>
    </Provider>);
  }
}


render(<UviApp />, document.getElementById('root'));

