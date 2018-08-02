import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { Notes } from './components/Notes';
import { NotesStore } from './stores/notes.store';

class App extends React.Component {

  public notesStore: NotesStore = new NotesStore();

  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Notes notesStore={this.notesStore} />
      </div>
    );
  }
}

export default App;
