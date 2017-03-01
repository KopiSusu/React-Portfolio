/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';


// import { Fat, Icon } from './../../themes';

import './contact.styl';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact"> 
        <h1>Want to work together?</h1>
        <p>I'm currently accepting new projects and full-time positions and would love to hear about yours. <br/> Please take a few minutes to tell me about it.</p>
        <a className="email" href="mailto:komangwluce@gmail.com">Email me</a>
      </div>
    );
  }
}