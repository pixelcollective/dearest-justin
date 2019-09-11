import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import {store} from './store'
import App from './App'
import DirectContribution from './containers/stripe/DirectContribution'

import {Container} from 'reactstrap'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Container className="components">
        <Route exact path="/crowdfund" component={DirectContribution} />
        <Route exact path='/' component={App} />
        <Route path='/via/:source' component={App} />
      </Container>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

registerServiceWorker()
