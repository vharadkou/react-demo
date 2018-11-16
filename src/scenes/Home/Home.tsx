import { observer } from 'mobx-react';
import React from 'react';

import { Form } from 'components/Form';
import { Note } from 'components/Note';

import { Props } from './Home.types';

export const Home = observer(({ notesStore: { notes, addNote, removeNote } }: Props) => {
  return (
    <div>
      <Form onSubmit={addNote} />
      {notes.map(note => (
        <Note key={note.id} note={note} onRemove={removeNote} />
      ))}
    </div>
  )
})
