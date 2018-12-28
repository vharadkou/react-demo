import { action, observable } from 'mobx';
import { Snackbar } from 'models';
import { OptionsObject } from 'notistack';

export class SnackbarStore {

  @observable.shallow public snackbars: Snackbar[];

  public constructor() {
    this.init();
  }

  @action
  public readonly init = () => {
    this.snackbars = [];
  }

  @action
  public readonly createSnackbar = (key: number, message: string, options?: OptionsObject) => {
    this.snackbars.push({ key, message, options });
  }

  @action
  public readonly removeSnackbar = (key: number) => {
    const index = this.snackbars.findIndex(snackbar => snackbar.key === key);

    if (index) {
      this.snackbars.splice(index, 1);
    }
  }
}