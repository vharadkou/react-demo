import React from 'react';

import Button from '@material-ui/core/Button';

import { reaction } from 'mobx';
import { useDisposable } from 'mobx-react-lite';
import { AsyncStatus } from 'models';
import { OptionsObject } from 'notistack';
import { useStore } from 'stores';

const DEFAULT_DURATION = 5000;

// tslint:disable:jsx-no-lambda

export function useSnackbar(enqueueSnackbar: (message: string, options?: OptionsObject) => void): void {
  const { notesStore } = useStore();

  useDisposable(() => reaction(() => ({
    status: notesStore.addNoteStatus,
    latestNote: notesStore.latestAddedNote
  }), ({ status, latestNote }) => {
    if (status === AsyncStatus.Success) {
      enqueueSnackbar(`Success add note ${latestNote && latestNote.message}`, {
        variant: 'success',
        autoHideDuration: DEFAULT_DURATION,
        action: <Button onClick={() => latestNote && notesStore.removeNote(latestNote.id)}>Undo</Button>,
      });

      notesStore.resetAddNoteStatus();
    }

    if (status === AsyncStatus.Error) {
      enqueueSnackbar('Error add note', {
        variant: 'error',
        autoHideDuration: DEFAULT_DURATION
      });

      notesStore.resetAddNoteStatus();
    }
  }));
}
