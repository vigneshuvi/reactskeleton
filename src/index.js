import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'



import App from './containers/App'
import MyForm from './components/MyForm'
import store from './store'

console.log(store.getState())

let history = createBrowserHistory();

history.listen((location, action) => {
  console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  console.log(`The last navigation action was ${action}`)
})

render(
  <Provider store={store}>
  	<CookiesProvider>
  		<Router history={history}>
  			<div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
      		<Route exact path="/" component={App}/>
      		<Route path="/login" component={MyForm}/>
      		</div>
      	</Router>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
)
