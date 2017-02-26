import React from 'react';
import {IndexRoute, Route, browserHistory, Redirect} from 'react-router';

import {
    App,
    Dashboard,
    Inbox,
    Details,
    Login
  } from './containers';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { account }} = store.getState();
      if (!account) {
        // oops, not logged in, so can't be here!
        replace('/login');
      }
      cb();
    }

    // This is to check if its in localstorage first
    // if (!isAuthLoaded(store.getState())) {
    //   store.dispatch(loadAuth()).then(checkAuth);
    // } else {
      checkAuth();
    // }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
      <Route component={App}>
        { /* Home (main) route */ }
        <Route onEnter={requireLogin}>
          <Route component={Dashboard}>
            <Route path="inbox" component={Inbox}/>
            <Route path="inbox/:customerId" component={Details}/>
          </Route>
        </Route>
        { /* Catch all route */ }

        <Route path="login" component={Login}/>

        <Redirect from="/" to="inbox" />
      </Route>
  );
};


