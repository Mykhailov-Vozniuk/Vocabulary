import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import {VocabComponent} from './Components/vocabComponent';
import './Styles/App.css';
import './Styles/Vocab.css';
import './Styles/Word.css';

function App() {
  return (
    <Provider class="body" store={store}>
      <VocabComponent />
    </Provider>
  )
}

export default App;
