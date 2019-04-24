import { NewNoteForm } from 'components/NewNoteForm';
import { Note } from 'components/Note';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from 'stores';

export default observer(() => {
  const {
    notesStore: { notes, addNote, updateNote, removeNote },
  } = useStore();

  return (
    <div>
      <NewNoteForm onSubmit={addNote} />
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          onUpdate={updateNote}
          onRemove={removeNote}
        />
      ))}
    </div>
  );
});
