import { Note } from 'models';
import { v1 } from 'uuid';

export function addNote(message: string): Promise<Note> {
  return new Promise(resolve => resolve({
    id: v1(),
    message,
  }));
};

export function removeNote(id: string): Promise<void> {
  return new Promise(resolve => resolve());
}