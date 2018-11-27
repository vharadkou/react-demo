import React, { memo, useCallback, useState } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { EditNoteForm } from 'components/EditNoteForm';

import { Props } from './Note.types';

export const Note = memo(({ note, onRemove, onUpdate }: Props) => {
  const [isEditMode, updateEditMode] = useState(false);

  const handleRemoveNote = useCallback(() => {
    onRemove(note.id);
  }, [note]);

  const turnOnEditMode = useCallback(() => {
    updateEditMode(true);
  }, [])

  const turnOffEditMode = useCallback(() => {
    updateEditMode(false);
  }, [])

  const handleUpdateNote = useCallback((message: string) => {
    turnOffEditMode();
    onUpdate(note.id, message);
  }, [note])

  return (
    <div>
      {isEditMode ? (
        <EditNoteForm value={note.message} onSubmit={handleUpdateNote} onCancel={turnOffEditMode} />
      ) : (
          <>
            <Typography variant="subtitle1">{note.message}</Typography>
            <Button onClick={turnOnEditMode}>Edit</Button>
            <Button onClick={handleRemoveNote}>-</Button>
          </>
        )}
    </div>
  )
});