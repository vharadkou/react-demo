import { createContext, useContext } from 'react';

import { NotesStore } from './notes.store';
import { SnackbarStore } from './snackbar.store';

const stores = Object.freeze({
  notesStore: new NotesStore(),
  snackbarStore: new SnackbarStore(),
});

const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext(StoreContext);
};
