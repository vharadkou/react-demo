import { Note } from 'models';
import { v4 } from 'uuid';

export const notes = Object.freeze({
  async addNote(message: string): Promise<Note> {
    return new Promise<Note>(resolve =>
      resolve({
        id: v4(),
        message,
      })
    );
  },
  async removeNote(id: string): Promise<void> {
    return new Promise<void>(resolve => resolve());
  },
  async updateNote(id: string, message: string): Promise<void> {
    return new Promise<void>(resolve => resolve());
  },
});
