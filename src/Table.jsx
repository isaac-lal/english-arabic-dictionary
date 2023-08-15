import React from 'react';

const Table = ({ words }) => {
  return (
  <table>
    <tbody>
      <tr>
        <th>English</th>
        <th>Arabic</th>
      </tr>
      {words.map((word) => (
        <tr>
          <td>{word.english}</td>
          <td>{word.arabic}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default Table;
