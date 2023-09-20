import React from 'react';
import './index.css';
import WordsData from './data.json';
import Search from './Search';

function App() {
  return (
    <div>
      <h1>English-Arabic Dictionary</h1>
      <h1>قاموس عربي-انجليزي</h1>
      <Search data={WordsData} />
    </div>
  );
}

export default App;
