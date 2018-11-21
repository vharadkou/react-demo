import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { StoreContext } from 'store-context';

import { NewNoteForm } from 'components/NewNoteForm';
import { Note } from 'components/Note';

export const Home = observer(() => {
  const { notesStore: { notes, addNote, updateNote, removeNote } } = useContext(StoreContext);

  return (
    <div>
      <NewNoteForm onSubmit={addNote} />
      {notes.map(note => (
        <Note key={note.id} note={note} onUpdate={updateNote} onRemove={removeNote} />
      ))}
    </div>
  )
});
