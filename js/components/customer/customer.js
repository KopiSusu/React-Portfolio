/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from './../../actions/index';

import './customer.styl';

@connect(state => ({
  account: state.auth.account,
  user: state.auth.user,
  users: state.auth.users,
  customer: state.customers.customer,
  initialValues: state.customers.customer,
  order: state.orders.order
}), actions)
@reduxForm({
  form: 'customer' // a unique name for this form
})
export default class Customer extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="customer" onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="last_message.source_type">Platform</label>
          <Field name="last_message.source_type" component="input" type="text" disabled="true"/>
        </div>
        <div>
          <label htmlFor="mobile_number">Mobile Number</label>
          <Field name="mobile_number" component="input" type="text" disabled="true"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Field name="address" component="textarea" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}