/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './app.styl';

export default class App extends Component {
	render() {
	  	return (
	      <div className='app'>
	        {this.props.children}
	      </div>
	    );
	}
}


