import React, { memo } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Props } from './Note.types';

export const Note = memo(({ note, onRemove }: Props) => {
  const removeNote = () => {
    onRemove(note.id);
  }

  return (
    <div>
      <Typography variant="subtitle1">{note.message}</Typography>
      <Button onClick={removeNote}>-</Button>
    </div>
  )
})