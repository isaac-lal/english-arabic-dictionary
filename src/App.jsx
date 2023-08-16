import React from 'react';
import './index.css';
import WordsData from './data.json';
import Search from './Search';

function App() {
  return (
    <div>
      <h1>English-Arabic Translator</h1>
      <h1>مترجم عربي انجليزي</h1>
      <Search
        placeholder='Search يبحث'
        data={WordsData}
      />
    </div>
  );
}

export default App;
