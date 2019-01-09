import React from 'react';

import Button from '@material-ui/core/Button';

import { reaction } from 'mobx';
import { useDisposable } from 'mobx-react-lite';
import { AsyncStatus } from 'models';
import { OptionsObject } from 'notistack';
import { useStore } from 'stores';

const DEFAULT_DURATION = 3000;

// tslint:disable:jsx-no-lambda

export function useSnackbar(enqueueSnackbar: (message: string, options?: OptionsObject) => void): void {
  const { notesStore } = useStore();

  useDisposable(() => reaction(() => notesStore.addNoteStatus, (addNoteStatus) => {
    if (addNoteStatus === AsyncStatus.Success) {
      enqueueSnackbar('Success add note', {
        variant: 'success',
        autoHideDuration: DEFAULT_DURATION,
        action: <Button onClick={() => notesStore.removeNote('')}>Undo</Button>,
      });

      notesStore.resetAddNoteStatus();
    }

    if (addNoteStatus === AsyncStatus.Error) {
      enqueueSnackbar('Error add note', {
        variant: 'error',
        autoHideDuration: DEFAULT_DURATION
      });

      notesStore.resetAddNoteStatus();
    }
  }));
}
