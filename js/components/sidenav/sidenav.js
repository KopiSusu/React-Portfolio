/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../actions/index';

import './sidenav.styl';

export default class Sidenav extends Component {
  state = {
    navigation: [
      {
        name: 'chats',
        icon: 'blah',
        link: 'blah'
      },
      {
        name: 'customers',
        icon: 'blah',
        link: 'blah'
      },
      {
        name: 'products',
        icon: 'blah',
        link: 'blah'
      },
      {
        name: 'orders',
        icon: 'blah',
        link: 'blah'
      }
    ]
  };

	render() {
  	return (
      <ul className='sidenav inline'>
        {
          _.map(this.state.navigation, (nav, index) => {
            return (
              <li key={index}>
                <div className='icon'>
                </div>
                <p>
                  {nav.name}
                </p>
              </li>
            )
          })
        }
      </ul>
    );
	}
}


