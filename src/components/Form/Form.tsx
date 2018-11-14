import React from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { Props, State } from './Form.types';

export class Form extends React.Component<Props, State> {

  public readonly state: State = {
    draftText: this.props.text || ''
  }

  public submit = () => {
    this.props.onSubmit(this.state.draftText);
  }

  public updateDraftText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ draftText: e.target.value });
  }

  public render(): JSX.Element {
    const { draftText } = this.state;

    return (
      <>
        <Input value={draftText} onChange={this.updateDraftText} placeholder="new note" />
        <Button onClick={this.submit}>Add Note</Button>
      </>
    )
  }
}