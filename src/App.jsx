import React from 'react';
import { useState } from 'react';
import './index.css';
import Table from './Table';
import WordsData from './data.json';

function App() {
  const [query, setQuery] = useState('');

  const search = (words) => {
    return words.filter(
      (word) =>
        word.english.toLowerCase().includes(query) ||
        word.arabic.toLowerCase().includes(query)
    );
  };

  return (
    <div className='container'>
      <input
        type='text'
        placeholder='Search a word in English or Arabic'
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
      <Table words={search(WordsData)} />
    </div>
  );
}

export default App;
