/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as actions from './../../actions/index';

import './inbox.styl';

@connect(state => ({
		account: state.auth.account,
    user: state.auth.user,
    users: state.auth.users,
    customers: state.customers.customers
	}), actions)
export default class Inbox extends Component {

  componentWillMount() {
    if (!this.props.customers) {
      this.props.get(
        `http://chatchat.api.everybodysay.com:3000/account/${this.props.account.id}/user`, 
        'USERS'
      )
      this.props.get(
        `http://chatchat.api.everybodysay.com:3000/account/${this.props.account.id}/customer`, 
        'CUSTOMERS'
      )
    }
  }

	render() {
    const { account, user, customers, users } = this.props

  	return (
      <div className='inbox'>
        <ul>
          {
            _.map(customers, (customer, index) => {
              let associatedUser = _.find(users, { id: (customer.user_id || 1) });

              return (
                <li key={index}>
                  {customer.mobile_number}
                  <select 
                    value={associatedUser.username}
                    onChange={(event)=> {
                        this.props.put(
                          `http://chatchat.api.everybodysay.com:3000/account/${account.id}/customer/${customer.id}`, 
                          'CUSTOMERS', 
                          {user_id: _.find(users, { username: event.target.value}).id}
                        )
                      }}>
                    {
                      _.map(users, (user, index) => (
                        <option key={index} value={user.username}>{user.username}</option> 
                      ))
                    }
                  </select>
                  <button onClick={() => {
                    this.props.sendDispatch({
                      type: 'CUSTOMER_SELECT',
                      response: customer
                    })
                    browserHistory.push(`/inbox/${customer.id}`);
                  }}>
                    Open Chat
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
	}
}


