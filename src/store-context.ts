import React from 'react';

import { NotesStore } from './stores';

export const StoreContext = React.createContext({
  notesStore: new NotesStore(),
});
