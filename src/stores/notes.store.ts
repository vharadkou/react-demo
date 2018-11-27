import { action, configure, observable, runInAction } from 'mobx';
import { AsyncStatus, Note } from 'models';

import { api } from 'services';

configure({ enforceActions: 'never' });

export class NotesStore {

  @observable.shallow public notes: Note[];
  @observable public addNoteStatus: AsyncStatus;
  @observable public removeNoteStatus: AsyncStatus;
  @observable public updateNoteStatus: AsyncStatus;

  public constructor() {
    this.init();
  }

  @action
  public readonly init = () => {
    this.notes = [];
    this.addNoteStatus = AsyncStatus.Init;
    this.removeNoteStatus = AsyncStatus.Init;
  }

  @action
  public readonly addNote = async (message: string) => {
    this.addNoteStatus = AsyncStatus.Pending;

    try {
      const note = await api.notes.addNote(message);

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
  public readonly updateNote = async (id: string, message: string) => {
    this.updateNoteStatus = AsyncStatus.Pending;

    try {
      await api.notes.updateNote(id, message);

      runInAction(() => {
        this.notes = this.notes.map(note => note.id === id ? ({ id, message, }) : note);
        this.updateNoteStatus = AsyncStatus.Success;
      });
    } catch {
      runInAction(() => {
        this.updateNoteStatus = AsyncStatus.Error;
      });
    }
  }

  @action
  public readonly removeNote = async (id: string) => {
    this.removeNoteStatus = AsyncStatus.Pending;

    try {
      await api.notes.removeNote(id);

      runInAction(() => {
        this.notes = this.notes.filter(note => note.id !== id);
        this.removeNoteStatus = AsyncStatus.Success;
      });
    } catch {
      runInAction(() => {
        this.removeNoteStatus = AsyncStatus.Error;
      });
    }
  }
}