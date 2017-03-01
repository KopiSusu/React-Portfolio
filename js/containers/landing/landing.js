/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';

import { Hero, Details, Work, Contact, Footer, Projects, Ribbon } from './../../components';

import './landing.styl';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing"> 
        <Ribbon/>
        <Hero/>
        <Details/>
        <Work/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}