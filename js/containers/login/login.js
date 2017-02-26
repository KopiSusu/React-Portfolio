/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as actions from './../../actions/index';

import './login.styl';

@connect(state => ({
		account: state.auth.account,
    user: state.auth.user
	}), actions)
export default class Login extends Component {

  _handleClick() {
    this.props.get('http://chatchat.api.everybodysay.com:3000/account/1', 'ACCOUNT')
    this.props.get('http://chatchat.api.everybodysay.com:3000/account/1/user/1', 'USER')
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.account && nextProps.user) {
      // login
      browserHistory.push('/inbox');
    }
  }

	render() {
  	return (
      <div className='login'>
        <button onClick={() => { this._handleClick() }}>
          Click to login!
        </button>
      </div>
    );
	}
}


