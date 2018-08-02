export interface Props {
  text?: string;
  onSubmit: (text: string) => void;
}

export interface State {
  draftText: string;
}