/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// import { Fat, Icon } from './../../themes';

import './work.styl';

export default class Work extends Component {

  state = {mobile: false}

  componentDidMount() {
      ReactDOM.findDOMNode(this).offsetWidth < 600 ? this.setState({mobile: true}) : null
  }

  render() {
    return (
      <div className="work"> 
        <div className="column-1 row-1">
          <div className="title row-4">
            <h1>Recent Work</h1>
            <p>Want to see my full resume? <a className="email" href="mailto:komangwluce@gmail.com">Email me.</a> or check out my Linkedin</p>
          </div>
          <div className="example row-4-3">
            {
              this.state.mobile ? (
                <div className="row-1 column-2">
                  <div className='laptop image' style={
                    {
                      backgroundImage: `url(//web5.bnamericas.com/bnamericas/landing/marketing_media/img/macbook.png)`
                    }}>
                    <div className='image' style={
                      {
                        backgroundImage: `url(//s3.amazonaws.com/datadummy/kip.png)`
                      }}/>
                    </div>
                </div>
              ) : null
            }
            <div className="text row-1 column-2">
              <div className="inner">
                <h2>Kip</h2>
                <li>React, Redux, Javascript, D3, HTML5/CSS3, WebSocket, Node</li>
                <p>With over 1MM users spread across 100,000 Slack teams, Kip helps groups save time and frustration by collecting orders across across multiple messaging platforms and coordinating group shopping carts into a single checkout.</p>
                <a target="_blank" className="email" href="//www.kipthis.com">Check it out</a>
              </div>
            </div>  
            {
              !this.state.mobile ? (
                <div className="row-1 column-2">
                  <div className='laptop image' style={
                    {
                      backgroundImage: `url(//web5.bnamericas.com/bnamericas/landing/marketing_media/img/macbook.png)`
                    }}>
                    <div className='image' style={
                      {
                        backgroundImage: `url(//s3.amazonaws.com/datadummy/kip.png)`
                      }}/>
                    </div>
                </div>
              ) : null
            }
          </div>
          <div className='review row-1 column-1'>
            <p><span>"</span>Koh is amazing! His previous experiance dealing with both messenger and web applications really helped us streamline our sales/order funnel<span>"</span></p>
            <div className='person'>
              <div className='image' style={
                {
                  backgroundImage: `url(//media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/036/3e5/063a51e.jpg)`
                }}/>
              <p>Rachel Law <br/> <span>CEO</span></p>
            </div>
          </div>
          <div className="right example row-4-3">
            <div className="row-1 column-2">
              <div className='laptop image' style={
                {
                  backgroundImage: `url(http://web5.bnamericas.com/bnamericas/landing/marketing_media/img/macbook.png)`
                }}>
                <div className='image' style={
                  {
                    backgroundImage: `url(//s3.amazonaws.com/datadummy/homemade.png)`
                  }}/>
                </div>
            </div>
            <div className="text row-1 column-2">
              <div className="inner">
                <h2>Homemade / The Foodworks</h2>
                <li>React, Node, MongoDB, Javascript, Socket.io, HTML5/CSS3, Stylus</li>
                <p>We want to change the landscape of food from the ground up. To us, this means helping anyone with enough passion and grit to build a food business. <br/> Our Mission: Empower our community of food entrepreneurs to start and grow quality brands.</p>
                <a target="_blank" className="email" href="http://www.thefoodworks.com">Check it out</a>
              </div>
            </div>
          </div>
          <div className='review row-1 column-1'>
            <p><span>"</span>Amazing developer with solid designs, <br/> Koh built our web and analytics platforms from the ground up.<span>"</span></p>
            <div className='person'>
              <div className='image' style={
                {
                  backgroundImage: `url(//media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/04e/15c/217ca02.jpg)`
                }}/>
              <p>Mike Dee <br/> <span>CTO</span></p>
            </div>
          </div>
          <div className="example row-4-3">
            {
              this.state.mobile ? (
                <div className="row-1 column-2">
                  <div className='laptop image' style={
                    {
                      backgroundImage: `url(//web5.bnamericas.com/bnamericas/landing/marketing_media/img/macbook.png)`
                    }}>
                    <div className='image' style={
                      {
                        backgroundImage: `url(//s3.amazonaws.com/datadummy/ibi.png)`
                      }}/>
                    </div>
                </div>
              ) : null
            }
            <div className="text row-1 column-2">
              <div className="inner">
                <h2>Information Builders</h2>
                <li>UX/UI Design, Angular, Javascript, D3, HTML5/CSS3</li>
                <p>The WebFOCUS Performance Management Framework (PMF) from Information Builders is a set of business-level tools that improve the way you run your department or division – or even your entire business.</p>
                <a target="_blank" className="email" href="http://www.informationbuilders.com/products/webfocus/webfocuspmf">Check it out</a>
              </div>
            </div>
            {
              !this.state.mobile ? (
                <div className="row-1 column-2">
                  <div className='laptop image' style={
                    {
                      backgroundImage: `url(http://web5.bnamericas.com/bnamericas/landing/marketing_media/img/macbook.png)`
                    }}>
                    <div className='image' style={
                      {
                        backgroundImage: `url(//s3.amazonaws.com/datadummy/ibi.png)`
                      }}/>
                    </div>
                </div>
              ) : null
            }
          </div>
          <div className='review row-1 column-1'>
            <p><span>"</span>Koh has been a huge help to the PMF Team, both with design and implementation. He helped rebuild PMF into a responsive, fast, and modern business analytics application.<span>"</span></p>
            <div className='person'>
              <div className='image' style={
                {
                  backgroundImage: `url(//s3.amazonaws.com/datadummy/bob.jpg)`
                }}/>
              <p>Bob Ferrante <br/> <span>Director of Software Products</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}