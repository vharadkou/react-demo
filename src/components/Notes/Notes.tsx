import * as React from 'react';

import { observer } from 'mobx-react';
import { Form } from '../Form';
import { Note } from '../Note';
import { Props } from './Notes.types';

@observer
export class Notes extends React.Component<Props> {

  public updateDraftNoteMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ draftNoteMessage: e.target.value });
  }

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
