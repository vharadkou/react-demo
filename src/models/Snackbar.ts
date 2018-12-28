import { OptionsObject } from 'notistack';

export interface Snackbar {
  key: number;
  message: string;
  options?: OptionsObject;
}