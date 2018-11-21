import React, { memo, useState } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { EditNoteForm } from 'components/EditNoteForm';

import { Props } from './Note.types';

export const Note = memo(({ note, onRemove, onUpdate }: Props) => {
  const [isEditMode, updateEditMode] = useState(false);

  const removeNote = () => {
    onRemove(note.id);
  }

  const turnOnEditMode = () => {
    updateEditMode(true);
  }

  const turnOffEditMode = () => {
    updateEditMode(false);
  }

  const updateNote = (message: string) => {
    turnOffEditMode();
    onUpdate(note.id, message);
  }

  return (
    <div>
      {isEditMode ? (
        <EditNoteForm value={note.message} onSubmit={updateNote} onCancel={turnOffEditMode} />
      ) : (
          <>
            <Typography variant="subtitle1">{note.message}</Typography>
            <Button onClick={turnOnEditMode}>Edit</Button>
            <Button onClick={removeNote}>-</Button>
          </>
        )}
    </div>
  )
})