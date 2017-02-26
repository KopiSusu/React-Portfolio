/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../actions/index';
import {
    Ribbon,
    Sidenav
  } from './../../components';

import './dashboard.styl';

@connect(state => ({
		account: state.auth.account,
    user: state.auth.user
	}), actions)
export default class Dashboard extends Component {
	render() {
    const {account, user} = this.props
  	return (
      <div className='dashboard'>
        <Ribbon {...this.props}/>
        <div className='view'>
          <Sidenav/>
          <span className='workspace inline'>
            {React.cloneElement(this.props.children, { account, user })}
          </span>
        </div>
      </div>
    );
	}
}


