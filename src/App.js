import React, { useState } from 'react';
import axios from 'axios';

const NumberManagement = () => {
  const [urls, setUrls] = useState('');
  const [mergedNumbers, setMergedNumbers] = useState([]);

  const handleFetchNumbers = async () => {
    try {
      const response = await axios.get(`/api/numbers?url=${urls}`);
      setMergedNumbers(response.data.numbers);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <h1>Number Management Service</h1>
      <div>
        <label>Enter URLs:</label>
        <input
          type="text"
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
        />
      </div>
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      <div>
        <h2>Merged Unique Integers</h2>
        <ul>
          {mergedNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NumberManagement;