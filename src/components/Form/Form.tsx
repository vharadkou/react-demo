import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { Props } from './Form.types';

export const Form = ({ value, onSubmit }: Props) => {
  const [draftText, onUpdate] = useState(value || '');

  const submit = () => {
    onSubmit(draftText);
  }

  const updateDraftText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(e.target.value);
  }

  return (
    <>
      <Input value={draftText} onChange={updateDraftText} placeholder="new note" />
      <Button onClick={submit}>Add Note</Button>
    </>
  )
}