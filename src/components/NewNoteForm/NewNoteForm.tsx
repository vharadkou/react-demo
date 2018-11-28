import React, { memo, useCallback, useState } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { Props } from './NewNoteForm.types';

export const NewNoteForm = memo(({ onSubmit }: Props) => {
  const [draftText, setDraftText] = useState('');

  const submit = useCallback(() => {
    onSubmit(draftText);
    setDraftText('');
  }, [draftText, setDraftText])

  const updateDraftText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDraftText(e.target.value);
  }, [setDraftText])

  return (
    <>
      <Input value={draftText} onChange={updateDraftText} placeholder="Note message" />
      <Button onClick={submit}>Add Note</Button>
    </>
  )
})