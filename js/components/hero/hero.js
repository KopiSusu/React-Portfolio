/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

import * as actions from './../../actions/index';

import Typist from 'react-typist';

import { Logo, Icon, Fat, Circle} from './../../themes';

import './hero.styl';

@connect(state => ({
    textOptions: state.hero.textOptions,
    selectedIndex: state.hero.selectedIndex
}), actions)
export default class Hero extends Component {
  state = {typing: true, mobile: false}
  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  done = () => {
    this.setState({ typing: false }, () => {
      setTimeout(() => {
        this.props.sendDispatch({
          type: 'TEXT_SELECT',
          response: this.getRandomInt(0,7)
        })
        this.setState({ typing: true })
      }, 3300);
    });
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this).offsetWidth < 600 ? this.setState({mobile: true}) : null
  }
  render() {
    const { textOptions, selectedIndex } = this.props
    const selectedText = textOptions[selectedIndex]

    return (
      <div className="hero" style={{height: window.innerHeight}}> 
        <div className='content'>
          <div className="row">
            <h1 className='title'>Hi, I'm Koh! I <span>{'<'}&nbsp;</span><span>build</span><span>&nbsp;{'/>'}</span> & <span>D</span><span>E</span><span>S</span><span>I</span><span>G</span><span>N</span></h1>
            {
              this.state.typing ?
              <Typist 
                cursor={{
                  show: true
                }} avgTypingDelay={100} stdTypingDelay={0} onTypingDone={this.done}><h1>{selectedText}</h1></Typist>
              : <div className='Static'><h1>{selectedText}</h1><span className='Cursor Cursor--blinking'>|</span></div>
            }
          </div>
          <div className="row row-19">
          </div>
          <div className="action row row-8">
            <div className="button row-1">
              <p className="row-2">Yes, I am available for hire!</p>
              <Icon icon='Down' iconClass="row-2"/>
            </div>
          </div>
          <div className="row row-16">
          </div>
        </div>
        <div className='background'>
          {
            [0,1,2].map((i) => (
              <div key={i} className='water'>
                <div className='reflection'></div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}