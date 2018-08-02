import * as React from 'react';

import { observer } from 'mobx-react';
import { Props } from './Note.types';

@observer
export class Note extends React.Component<Props> {

  public removeNote = () => {
    this.props.onRemove(this.props.note.id);
  }

  public render(): JSX.Element {
    const { note } = this.props;

    return (
      <div>
        <span>{note.message}</span>
        <button onClick={this.removeNote}>-</button>
      </div>
    )
  }
}