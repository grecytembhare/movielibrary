// src/components/SearchBar.jsx
import React, { useState } from 'react';
import axios from 'axios';
import DetailsArea from './DetailsArea';

const SearchBar = () => {
  const [takeInput, setTakeInput] = useState('');
  const [movieData, setMovieData] = useState({});
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const omdbId = import.meta.env.VITE_APP_OMDB_ID;
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const handleSearch = async (moviename) => {
    try {
      const response = await axios.get(`${apiUrl}?i=${omdbId}&apikey=${apiKey}&t=${moviename}`);
      if (response.data && response.data.Poster) {
        setMovieData(response.data);
      } else {
        console.error('Invalid or missing data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Movie Name"
        maxLength={40}
        onChange={(e) => setTakeInput(e.target.value)}
        value={takeInput}
        style={{ padding: 10 }}
      />
      <button onClick={() => handleSearch(takeInput)}>Search</button>
      <DetailsArea movieData={movieData} />
    </div>
  );
};

export default SearchBar;
