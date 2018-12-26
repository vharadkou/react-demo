import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { App } from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
