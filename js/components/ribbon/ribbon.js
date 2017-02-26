/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../actions/index';

import './ribbon.styl';

export default class Ribbon extends Component {
	render() {
    const {account, user} = this.props
  	return (
      <nav className='ribbon'>
        <h1 className='brand left'>
          <span>Chat</span>
          <span>Chat</span>
        </h1>
        <h3 className='account right'>
          {account ? account.name : null}
        </h3>
      </nav>
    );
	}
}


