import React, { lazy, Suspense } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';
import { useSnackbar } from 'hooks';
import { withSnackbar } from 'notistack';

import './App.css';

const HomeAsync = lazy(() => import('scenes/Home'));

import { styles } from './App.styles';
import logo from './logo.svg';

const useStyles = makeStyles(styles);

export const App = withSnackbar(({ enqueueSnackbar }) => {
  useSnackbar(enqueueSnackbar);
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <h1 className={classes.title}>Welcome to React</h1>
      </header>
      <p className={classes.intro}>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Suspense fallback={<CircularProgress />}>
        <HomeAsync />
      </Suspense>
    </div>
  );
});
