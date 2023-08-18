import React, { useState } from 'react';
import './index.css';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((words) => {
      return (
        words.english.toLowerCase().includes(searchWord.toLowerCase()) ||
        words.arabic.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className='search__container'>
      <div className='search__styles'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length != 0 && (
        <div>
          <table>
            <tbody>
              <tr>
                <th>English</th>
                <th>عربي</th>
              </tr>
              {filteredData.slice(0, 5).map((word) => (
                <tr>
                  <td>{word.english}</td>
                  <td>{word.arabic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
