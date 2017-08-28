/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';


// import { Fat, Icon } from './../../themes';

import './projects.styl';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects"> 
        <div className="column-1 row-1">
          <div className="title row-4">
            <h1>Projects</h1>
            <p>When I'm not working with someone, I'm working on my own projects.</p>
          </div>
          <div className="block row-4-3">
            <div className="project column-3 row-1"> 
              <div className='image' style={
                {
                  backgroundImage: `url(https://s3.amazonaws.com/datadummy/genesis.png)`
                }}>
                <div className='textContainer'>
                  <h3>Genesis</h3>
                </div>
              </div>
              <p>Genesis is a prototype mico-loan application, built using monax.io's eris blockchain-based technology</p>
            </div>
            <div className="project column-3 row-1"> 
              <div className='image' style={
                {
                  backgroundImage: `url(https://s3.amazonaws.com/datadummy/credScheduler.png)`
                }}>
                <div className='textContainer'>
                  <h3>CredSched</h3>
                </div>
              </div>
              <p>A capacity work scheduler for buisinesses. Allows for easy shift mannagment, while the calendars built in heatmap and credit system allows buisinesses to award their employees for working during specific times or covering for a fellow employee.</p>
            </div>
            <div className="project column-3 row-1"> 
              <div className='image' style={
                {
                  backgroundImage: `url(https://s3.amazonaws.com/datadummy/chatchat.png)`
                }}>
                <div className='textContainer'>
                  <h3>ChatChat</h3>
                </div>
              </div>
              <p>A Chat Commerce application that allows individuals to easily manage their conversations, products, orders, and sales across multiple messenger platforms using our universal inbox.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}