import { observer } from 'mobx-react';
import React from 'react';

import { Note } from 'components/Note';

import { Props } from './NoteList.types';

@observer
export class NoteList extends React.Component<Props> {
  public render(): JSX.Element {
    const { notesStore: { notes, removeNote } } = this.props;

    const list = notes.map(note => (
      <Note key={note.id} note={note} onRemove={removeNote} />
    ));

    return (
      <div>
        {list}
      </div>
    )
  }
}
