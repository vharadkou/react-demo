import React, { useCallback, useState } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { Props } from './EditNoteForm.types';

export const EditNoteForm = ({ value, onSubmit, onCancel }: Props) => {
  const [draftText, setDraftText] = useState(value);

  const submit = useCallback(() => {
    onSubmit(draftText);
  }, [draftText, onSubmit]);

  const cancel = useCallback(() => {
    onCancel();
  }, [onCancel]);

  const updateDraftText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDraftText(e.target.value);
  }, [setDraftText]);

  return (
    <>
      <Input value={draftText} onChange={updateDraftText} placeholder="Note message" />
      <Button onClick={submit}>Save Note</Button>
      <Button onClick={cancel}>Cancel</Button>
    </>
  );
};