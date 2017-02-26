/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import domtoimage from 'dom-to-image';

import * as actions from './../../actions/index';

import './order.styl';

@connect(state => ({
  account: state.auth.account,
  user: state.auth.user,
  customer: state.customers.customer,
  order: state.orders.order,
  cart: state.orders.cart
}), actions)
export default class Customer extends Component {

  constructor(props) {
    super(props)
    this._takeSnapshot = this._takeSnapshot.bind(this)
  }

  _takeSnapshot() {
    let node = ReactDOM.findDOMNode(this)
    domtoimage.toJpeg(node).then((dataUrl) => {
        this.props.postImage(dataUrl, `account/1/customer/${this.props.selectedTicket.id}/msg`, this.props.selectedTicket)
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.order && (!this.props.cart || this.props.cart.length !== nextProps.cart.length)) {
      this.props.get(
        `http://chatchat.api.everybodysay.com:3000/collection/items/${nextProps.order.id}`, 
        'CART'
      )    
    }
  }

  componentWillMount() {
    if (this.props.order) {
      this.props.get(
        `http://chatchat.api.everybodysay.com:3000/collection/items/${this.props.order.id}`, 
        'CART'
      )            
    }
  }

  render() {
    const { order, customer, user, account, cart } = this.props;
    const items = cart ? cart.item_objects : [];

    return (
      <div className="order"> 
        {
          _.map(items, (item, index) => (
            <div key={index} className='item'>
              <img src={item.img_src} className='row-3-2'/>
              <h2 className='row-3-1'>{item.name}</h2>
            </div>
          ))
        }
        order
      </div>
    );
  }
}
