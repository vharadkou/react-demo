import { action, observable } from 'mobx';
import { Note } from 'models';
import { v1 } from 'uuid';

export class NotesStore {

  @observable.shallow public notes: Note[] = [];

  @action
  public addNote(message: string): void {
    this.notes.push({
      id: v1(),
      message,
    });
  }

  @action
  public removeNote(uuid: string): void {
    this.notes = this.notes.filter(note => note.id !== uuid);
  }
}