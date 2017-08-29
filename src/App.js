import React, { Component } from 'react';
import EditCharacter from './EditCharacter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static characters = {
    zoidberg: {
      name: 'Doctor John A. Zoidberg',
      species: 'Decapodian',
    },
    bender: {
      name: 'Bender D Bending Rodríguez',
      species: 'Robot',
    },
  };

  state = {
    character: undefined,
  };
  makeHandle = (name) => () => {
    console.log(this);
    this.setState({
      character: this.constructor.characters[name],
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>redux-form with no unmounting & no destroy on unmount</h2>
        </div>
        <ul>
          <li><button onClick={this.makeHandle('zoidberg')}>Load Zoidberg</button></li>
          <li><button onClick={this.makeHandle('bender')}>Load Bender</button></li>
          <li><button onClick={this.makeHandle()}>Unload</button></li>
        </ul>
        <div className="App-intro">
          {this.state.character && <EditCharacter character={this.state.character} />}
          {!this.state.character && (
            <p>Please select a character</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
