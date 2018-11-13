import { action, configure, observable, runInAction } from 'mobx';
import { AsyncStatus, Note } from 'models';

import { addNote, removeNote } from 'services/notes.repository';

configure({ enforceActions: 'always' });

export class NotesStore {

  @observable.shallow public notes: Note[];
  @observable public addNoteStatus: AsyncStatus;
  @observable public removeNoteStatus: AsyncStatus;

  public constructor() {
    this.init();
  }

  @action
  public init = () => {
    this.notes = [];
    this.addNoteStatus = AsyncStatus.Init;
    this.removeNoteStatus = AsyncStatus.Init;
  }

  @action
  public addNote = async (message: string) => {
    this.addNoteStatus = AsyncStatus.Pending;

    try {
      const note = await addNote(message);

      runInAction(() => {
        this.notes.push(note);
        this.addNoteStatus = AsyncStatus.Pending;
      });
    } catch {
      runInAction(() => {
        this.addNoteStatus = AsyncStatus.Error;
      });
    }
  }

  @action
  public removeNote = async (uuid: string) => {
    this.removeNoteStatus = AsyncStatus.Pending;

    try {
      await removeNote(uuid);

      runInAction(() => {
        this.notes = this.notes.filter(note => note.id !== uuid);
        this.removeNoteStatus = AsyncStatus.Success;
      });
    } catch {
      runInAction(() => {
        this.removeNoteStatus = AsyncStatus.Error;
      });
    }
  }
}