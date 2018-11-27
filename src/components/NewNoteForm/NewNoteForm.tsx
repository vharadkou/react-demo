import React, { memo, useCallback, useState } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { Props } from './NewNoteForm.types';

export const NewNoteForm = memo(({ onSubmit }: Props) => {
  const [draftText, onUpdate] = useState('');

  const submit = useCallback(() => {
    onSubmit(draftText);
    onUpdate('');
  }, [draftText])

  const updateDraftText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(e.target.value);
  }, [])

  return (
    <>
      <Input value={draftText} onChange={updateDraftText} placeholder="Note message" />
      <Button onClick={submit}>Add Note</Button>
    </>
  )
})