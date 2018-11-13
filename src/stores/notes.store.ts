import { action, observable } from 'mobx';
import { AsyncStatus, Note } from 'models';
import { v1 } from 'uuid';

export class NotesStore {

  @observable.shallow public notes: Note[] = [];
  @observable public addNoteStatus: AsyncStatus = AsyncStatus.Init;
  @observable public removeNoteStatus: AsyncStatus = AsyncStatus.Init;

  @action
  public addNote = async (message: string) => {
    this.addNoteStatus = AsyncStatus.Pending;

    try {
      this.notes.push({
        id: v1(),
        message,
      });
      this.addNoteStatus = AsyncStatus.Pending;
    } catch {
      this.addNoteStatus = AsyncStatus.Error;
    }
  }

  @action
  public removeNote = (uuid: string) => {
    this.removeNoteStatus = AsyncStatus.Pending;

    try {
      this.notes = this.notes.filter(note => note.id !== uuid);
      this.removeNoteStatus = AsyncStatus.Success;
    } catch {
      this.removeNoteStatus = AsyncStatus.Error;
    }
  }
}