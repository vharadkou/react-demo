import React, { useEffect } from 'react';

import Button from '@material-ui/core/Button';

import { IObservableArray, observe, reaction } from 'mobx';
import { useDisposable } from 'mobx-react-lite';
import { AsyncStatus, Snackbar } from 'models';
import { OptionsObject } from 'notistack';
import { useStore } from 'stores';

const DEFAULT_DURATION = 3000;

function generateKey(): number {
  return new Date().getTime() + Math.random();
}

// tslint:disable:jsx-no-lambda

export function useSnackbar(enqueueSnackbar: (message: string, options?: OptionsObject) => void): void {
  const { notesStore, snackbarStore } = useStore();

  useDisposable(() => reaction(() => notesStore.addNoteStatus, (addNoteStatus) => {
    if (addNoteStatus === AsyncStatus.Success) {
      const key = generateKey();
      const message = 'Success add note';

      snackbarStore.createSnackbar(key, message, {
        variant: 'success',
        autoHideDuration: DEFAULT_DURATION,
        action: <Button onClick={() => notesStore.removeNote('')}>Undo</Button>,
      });

      notesStore.resetAddNoteStatus();
    }

    if (addNoteStatus === AsyncStatus.Error) {
      const key = generateKey();
      const message = 'Error add note';

      snackbarStore.createSnackbar(key, message, {
        variant: 'error',
        autoHideDuration: DEFAULT_DURATION
      });

      notesStore.resetAddNoteStatus();
    }
  }));

  useEffect(() => observe(snackbarStore.snackbars as IObservableArray<Snackbar>, (change) => {
    if (change.type === 'splice' && change.addedCount > 0) {
      change.added.forEach(addedItem => {
        enqueueSnackbar(addedItem.message, addedItem.options);
        snackbarStore.removeSnackbar(addedItem.key);
      });
    }
  }));
}
