/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../actions/index';

import Typist from 'react-typist';

import { Fat, Icon } from './../../themes';

import './details.styl';

@connect(state => ({
    textOptions: state.hero.textOptions,
    selectedIndex: state.hero.selectedIndex
}), actions)
export default class Details extends Component {
  render() {
    const { textOptions, selectedIndex } = this.props
    const selectedText = textOptions[selectedIndex]

    return (
      <div className="details"> 
        <div className="expert column-1 row-1">
          <div className="title row-4">
            <h1>My Specialty</h1>
            <p>Server, client, and mobile development, all written in one language.</p>
          </div>
          <div className="skills row-4-3">
            <div className="column-3 row-1"> 
              <Icon icon='Server'/>
              <h2><span>{'<'}</span>Server<span>{'>'}</span></h2>
              <p>Node</p>
              <p>MongoDB</p>
              <p>Postgres</p>
              <p>AWS</p>
              <p>Digital Ocean</p>
              <p>Heroku</p>
            </div>
            <div className="column-3 row-1"> 
              <Icon icon='Client'/>
              <h2><span>{'<'}</span>Client<span>{'>'}</span></h2>
              <p>React</p>
              <p>Angular</p>
              <p>jQuery</p>
              <p>Javascript</p>
              <p>CSS3</p>
              <p>Sass/Less/Stylus</p>
            </div>
            <div className="column-3 row-1"> 
              <Icon icon='Mobile'/>
              <h2><span>{'<'}</span>Mobile<span>{'>'}</span></h2>
              <p>React Native iOS</p>
              <p>React Native Android</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}