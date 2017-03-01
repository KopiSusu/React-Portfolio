/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';

import { Icon } from './../../themes';

import './ribbon.styl';

export default class Ribbon extends Component {
  render() {
    return (
      <div className="ribbon"> 
        <div className="row row-1">
          <div className="row-2">
            <Icon icon='Mobile'/>
            <p>(646) - 627 - 1185</p>
          </div>
          <div className="row-2">
            <a className="email" href="mailto:komangwluce@gmail.com">
              <Icon icon='Email'/>
              <p>Komangwluce@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="right row row-1">
          <div className="right row row-1">
            <a className="git" href="https://github.com/KopiSusu">
              <Icon icon='Github'/>
            </a>
          </div>
          <div className="right row row-1">
            <a className="linked" href="https://www.linkedin.com/in/komang-luce-87a7a9a8/">
              <Icon icon='Linkedin'/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}