import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';
import { Router, Route } from 'react-router'
import 'react-grid-layout/css/styles.css'


import createBrowserHistory from 'history/createBrowserHistory'
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App'
import store from './store'

import ReactGA from 'react-ga'



ReactGA.initialize('UA-71297148-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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
    logPageView();
    return (<Provider store={store}>
      <CookiesProvider>
        <Router history={history} onUpdate={logPageView}>
          <div>
             <Route path="/" component={App}/>
          </div>
        </Router>
      </CookiesProvider>
    </Provider>);
  }
}


render(<UviApp />, document.getElementById('root'));

