import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

import Home from './views/Home';
import theme from './theme/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Home />
        </div>
    </ThemeProvider>
  );
}

export default App;
