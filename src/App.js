import React, { Component } from 'react';
import CharacterForm from './CharacterForm';
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
    this.setState({
      formId: (name && `character-${name}`) || 'none',
      character: this.constructor.characters[name],
    });
  };

  handleSubmit = (values) => {
    console.log('submitted', values);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>redux-form with no unmounting & no destroy on unmount</h2>
        </div>
        <div className="App-body">
          <ul>
            <li><button onClick={this.makeHandle('zoidberg')}>Load Zoidberg</button></li>
            <li><button onClick={this.makeHandle('bender')}>Load Bender</button></li>
            <li><button onClick={this.makeHandle()}>Unload</button></li>
          </ul>
        </div>
        <div className="App-intro">
          {this.state.character && (
            <CharacterForm
              form={this.state.formId}
              initialValues={this.state.character}
              onSubmit={this.handleSubmit}
            />
          )}
          {!this.state.character && (
            <p>Please select a character</p>
          )}
        </div>
        <div className="App-body">
          <div>
            <h2>Pbm: redux-form is broken when component tree is not unmounted.</h2>
            <p><a href="https://github.com/iamdey/RD_redux-form/tree/bug_no-unmount">Code source</a></p>
            <h3>How to reproduce</h3>
            <ol>
              <li>click "Load Zoidberg"</li>
              <li>click "Load Bender"</li>
              <li>try edit form: it is broken</li>
            </ol>
            <p>I will work fine after unmounting the form by clicking "Unload"</p>
          </div>
          <div>
            <h3>redux-form config</h3>
            <ul>
              <li><label><input type="checkbox" />enableReinitialize</label></li>
              <li><label><input type="checkbox" />destroyOnUnmount</label></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
