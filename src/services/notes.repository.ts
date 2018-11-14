import { Note } from 'models';
import { v4 } from 'uuid';

export function addNote(message: string): Promise<Note> {
  return new Promise(resolve => resolve({
    id: v4(),
    message,
  }));
};

export function removeNote(id: string): Promise<void> {
  return new Promise(resolve => resolve());
}