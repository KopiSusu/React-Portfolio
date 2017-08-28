/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';

import { Man, SignSmall } from './../../themes';

import './footer.styl';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer"> 
        <div className="logo row row-4-2">
          <SignSmall/>
        </div>
        <p>Digitalized by: www.the-bengkel.com (me)</p>
      </div>
    );
  }
}