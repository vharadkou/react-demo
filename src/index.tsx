import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
