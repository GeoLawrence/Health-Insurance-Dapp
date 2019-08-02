import React, { Component } from 'react';
import {DrizzleProvider} from 'drizzle-react';
import {LoadingContainer} from 'drizzle-react-components';
import drizzleOptions from './drizzleOptions.js';
import UnderwriteComponent from './UnderwriteComponent';

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <UnderwriteComponent />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
