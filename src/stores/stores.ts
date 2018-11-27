import { createContext, useContext } from 'react';

import { NotesStore } from './notes.store';

const stores = Object.freeze({
  notesStore: new NotesStore(),
})

const StoreContext = createContext(stores);

export const useStore = () => {
  return useContext(StoreContext);
}

