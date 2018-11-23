import React, { Component } from 'react';
import logo from './logo.svg';
import {ImgCard} from './components/imageCard';
import { logoData } from "./data/data";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logos : logoData,
      currentLogo : logoData[0]
    }
  }

  leftClick(){
    debugger;
    const ind = this.state.currentLogo.id-1;
    this.setState({
      currentLogo: this.state.logos[ind]
    })
  }

  rightClick(){
    debugger;
    const ind = this.state.currentLogo.id+1;
    this.setState({
      currentLogo: this.state.logos[ind]
    })
  }

  componentDidMount(){

  }

  render() {
    const {logos, currentLogo} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <button onClick={() => this.leftClick()} >left</button>
          <button onClick={() => this.rightClick()} >right</button>
        </div>
        <div className={`image-scroll active-logo-${currentLogo.id}`} >
          <div className='image-scroll-wrapper' style={{
            'transform': `translateX(-${currentLogo.id*(100/logos.length)}%)`
          }}>
            {
              logos.map((logo) => <ImgCard key={logo.id} logo={logo}> </ImgCard>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
