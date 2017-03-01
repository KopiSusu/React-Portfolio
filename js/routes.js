import React from 'react';
import {IndexRoute, Route, browserHistory, Redirect} from 'react-router';

import {
    App,
    Landing
  } from './containers';

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
      <Route path="/" component={App}>
        <IndexRoute component={Landing}/>

        {/*<Redirect from="/" to="inbox" />*/}
      </Route>
  );
};


