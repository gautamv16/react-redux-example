import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { MiniInfoBar } from 'components';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    const {showKitten} = this.state;
    const kitten = require('./cesar.jpg');
    return (
      <div className="container">
        <h1>About Us</h1>
        <Helmet title="About Us"/>

        <p>Hi , I am Varun Gautam. Developer at www.yooshopper.com
          (<a href="https://twitter.com/gautamv16" target="_blank">@gautamv16</a>). I want contribution on this repo from all contributers on github.
        </p>

        <h3>Mini Bar <span style={{color: '#aaa'}}>(not that kind)</span></h3>

        <p>Hey! You found the mini info bar below! The following component is display-only. Note that it shows the same
          time as the info bar.</p>

        <MiniInfoBar/>

        <h3>Guesss What Will you see !!! Surprise !!</h3>

        <p>
          Oye! Would you like to see most loveable person on the earth?

          <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleKitten}>
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}</button>
        </p>

        {showKitten && <div><img src={kitten}/></div>}
      </div>
    );
  }
}
