import React from 'react'
import { Switch, Route, Router, Link } from 'react-router-dom';
import Home from './components/Home'
import OrderExports from './components/OrderExports'

function App({ history }) {
  return (
    <div>
      
      <Router history={history}>
      <nav>
          <ul>
            <li>
              <Link to="/frieza">Home</Link>
            </li>
            <li>
              <Link to="/frieza/order-exports">Order Exports</Link>
            </li>
          </ul>
        </nav>
          <hr />
        <Switch>
          <Route path="/frieza/order-exports" component={OrderExports} />
          <Route path="/frieza" component={Home} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  </div>
  );
}

export default App;
