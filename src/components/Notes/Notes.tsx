import * as React from 'react';

import { observer } from 'mobx-react';
import { Note } from '../Note';
import { Props, State } from './Notes.types';

@observer
export class Notes extends React.Component<Props, State> {

  public readonly state: State = {
    draftNoteMessage: ''
  }

  public removeNote = (id: string) => {
    this.props.notesStore.removeNote(id);
  }

  public addNote = () => {
    this.props.notesStore.addNote(this.state.draftNoteMessage);
  }

  public updateDraftNoteMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ draftNoteMessage: e.target.value });
  }

  public render(): JSX.Element {
    const { notesStore: { notes } } = this.props;

    return (
      <div>
        <input type="text" onChange={this.updateDraftNoteMessage} />
        <button onClick={this.addNote}>Add Note</button>
        {notes.map(note => (
          <Note key={note.id} note={note} onRemove={this.removeNote} />
        ))}
      </div>
    )
  }
}
