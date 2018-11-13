import React from 'react';

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
      <div>
        <input type="text" value={draftText} onChange={this.updateDraftText} />
        <button onClick={this.submit}>Add Note</button>
      </div>
    )
  }
}