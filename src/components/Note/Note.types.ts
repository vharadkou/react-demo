import { Note } from 'models';

export interface Props {
  note: Note;
  onRemove: (id: string) => void;
  onUpdate: (id: string, message: string) => void;
}
