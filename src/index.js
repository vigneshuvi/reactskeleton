import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'
import injectTapEventPlugin from 'react-tap-event-plugin';


import App from './containers/App'
import WelcomePage from './pages/WelcomePage'
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

render(
  <Provider store={store}>
  	<CookiesProvider>
  		<Router history={history}>
  			<div>
      		<App/>
      	</div>
      	</Router>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
)
