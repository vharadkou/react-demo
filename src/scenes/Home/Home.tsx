import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { StoreContext } from 'store-context';

import { Form } from 'components/Form';
import { Note } from 'components/Note';

export const Home = observer(() => {
  const { notesStore: { notes, addNote, removeNote } } = useContext(StoreContext);

  return (
    <div>
      <Form onSubmit={addNote} />
      {notes.map(note => (
        <Note key={note.id} note={note} onRemove={removeNote} />
      ))}
    </div>
  )
});
