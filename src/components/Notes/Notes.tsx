import { observer } from 'mobx-react';
import React from 'react';

import { Form } from 'components/Form';
import { Note } from 'components/Note';

import { Props } from './Notes.types';

@observer
export class Notes extends React.Component<Props> {
  public render(): JSX.Element {
    const { notesStore: { notes, addNote, removeNote } } = this.props;

    return (
      <div>
        <Form onSubmit={addNote} />
        {notes.map(note => (
          <Note key={note.id} note={note} onRemove={removeNote} />
        ))}
      </div>
    )
  }
}
