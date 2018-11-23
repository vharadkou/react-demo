import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { Props } from './EditNoteForm.types';

export const EditNoteForm = ({ value, onSubmit, onCancel }: Props) => {
  const [draftText, onUpdate] = useState(value);

  const submit = () => {
    onSubmit(draftText);
  }

  const cancel = () => {
    onCancel();
  }

  const updateDraftText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(e.target.value);
  }

  return (
    <>
      <Input value={draftText} onChange={updateDraftText} placeholder="Note message" />
      <Button onClick={submit}>Save Note</Button>
      <Button onClick={cancel}>Cancel</Button>
    </>
  )
}