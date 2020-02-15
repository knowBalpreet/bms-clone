import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect } from '@reach/router';
import * as serviceWorker from './serviceWorker';
import Loading from './components/Loading';

import StoreProvider, { StoreConsumer } from './contexts/Store';

import '../assets/css/bootstrap.css';
import '../assets/css/main.css';

const NotFound = lazy(() => import('./containers/NotFound'));
const Dashboard = lazy(() => import('./containers/Dashboard'));

// Protected routes represent routes which can only be accessed if user is authenticated
// @ts-ignore
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <StoreConsumer>
    {props => (
      <>
        {props.loggedIn ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect from="" to="auth" noThrow />
        )}
      </>
    )}
  </StoreConsumer>
);

// Public routes represent routes which can be accessed if user is not authenticated
// @ts-ignore
const PublicRoute = ({ component: Component, ...rest }) => (
  <StoreConsumer>
    {props => (
      <>
        {props.loggedIn ? (
          <Redirect from="" to="dashboard" noThrow />
        ) : (
          <Component {...rest} {...props} />
        )}
      </>
    )}
  </StoreConsumer>
);

ReactDOM.render(
  <Suspense fallback={<Loading spinning title="Loading Route" />}>
    <StoreProvider
      value={{ loggedIn: false, token: null, role: 'guest', permissions: {} }}
    >
      <Router>
        <PublicRoute path="/" component={Dashboard} />
        <NotFound default />
      </Router>
    </StoreProvider>
  </Suspense>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
