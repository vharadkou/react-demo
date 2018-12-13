import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

export const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
  },
  logo: {
    animation: 'logo-spin infinite 20s linear',
    height: 80,
  },
  header: {
    backgroundColor: '#222222',
    height: 150,
    padding: 20,
    color: '#ffffff',
  },
  title: {
    fontSize: '1.5em',
  },
  intro: {
    fontSize: 'large',
  },
});