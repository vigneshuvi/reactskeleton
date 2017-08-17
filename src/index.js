import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'
import injectTapEventPlugin from 'react-tap-event-plugin';


import App from './containers/App'
import LoginPanel from './components/LoginPanel'
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

render(
  <Provider store={store}>
  	<CookiesProvider>
  		<Router history={history}>
  			<div>
      		<Route exact path="/" component={App}/>
      		<Route path="/login" component={LoginPanel}/>
      		</div>
      	</Router>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
)
