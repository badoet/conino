import React, { Component } from 'react';

import '../../node_modules/normalize.css/normalize.css';

import FindPatient from './FindPatient/findPatient';

class App extends Component {
  render() {
    return (
      <div>
        Hello world
        <FindPatient></FindPatient>
      </div>
    );
  }
}

export default App;
