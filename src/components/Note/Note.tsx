import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Props } from './Note.types';

export class Note extends React.Component<Props> {

  public removeNote = () => {
    this.props.onRemove(this.props.note.id);
  }

  public render(): JSX.Element {
    const { note } = this.props;

    return (
      <div>
        <Typography variant="subtitle1">{note.message}</Typography>
        <Button onClick={this.removeNote}>-</Button>
      </div>
    )
  }
}