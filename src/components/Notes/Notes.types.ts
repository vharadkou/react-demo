import { NotesStore } from "stores/notes.store";

export interface Props {
  notesStore: NotesStore;
}

export interface State {
  draftNoteMessage: string;
}