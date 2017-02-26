/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as actions from './../../actions/index';

import { Customer } from './../../components'
import { Order } from './../../components'

import './Details.styl';

@connect(state => ({
		account: state.auth.account,
    user: state.auth.user,
    items: state.items.items,
    customer: state.customers.customer
	}), actions)
export default class Details extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    if (this.props.customer) {
      this.props.get(
        `http://chatchat.api.everybodysay.com:3000/collection/customer/${this.props.customer.id}/type/order`, 
        'ORDER'
      )  
      this.props.get(
        `http://chatchat.api.everybodysay.com:3000/account/${this.props.account.id}/customer/${this.props.customer.id}/msg`, 
        'MESSAGES'
      )            
    }

    if(!this.props.items) {
      this.props.get(
        `http://chatchat.api.everybodysay.com:3000/account/${this.props.account.id}/items`, 
        'ITEMS'
      )  
    }

  }

  componentWillUnmount() {
    this.props.sendDispatch({
      type: 'ORDER_SUCCESS',
      response: null
    })
    this.props.sendDispatch({
      type: 'CART_SUCCESS',
      response: null
    })
  }

  handleSubmit(values) {
    const { name, mobile_number, email, address } = values
    this.props.put(
      `http://chatchat.api.everybodysay.com:3000/account/${this.props.account.id}/customer/${this.props.customer.id}`, 
      'CUSTOMERS', 
      { name, mobile_number, email, address }
    )
  }

	render() {
  	return (
      <div className='details row-1'>
        <div className='column-2 row-1'>
          <Customer onSubmit={this.handleSubmit}/>
        </div>
        <div className='column-2 row-1'>
          <Order/>
        </div>
      </div>
    );
	}
}
