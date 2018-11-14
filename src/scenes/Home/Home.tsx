import { observer } from 'mobx-react';
import React from 'react';

import { Form } from 'components/Form';
import { NoteList } from 'components/NoteList';

import { Props } from './Home.types';

@observer
export class Home extends React.Component<Props> {
  public render(): JSX.Element {
    const { notesStore } = this.props;

    return (
      <div>
        <Form onSubmit={notesStore.addNote} />
        <NoteList notesStore={notesStore} />
      </div>
    )
  }
}
