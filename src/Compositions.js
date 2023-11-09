// Compositions.js
import React from 'react';

function Compositions({ compositions }) {
  return (
    <div>
      <h2>List of Compositions</h2>
      <ul>
        {compositions.map((composition, index) => (
          <li key={index}>{composition}</li>
        ))}
      </ul>
    </div>
  );
}

export default Compositions;
