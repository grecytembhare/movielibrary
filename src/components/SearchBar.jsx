// src/components/SearchBar.jsx
import React, { useState } from "react";
import axios from "axios";
import DetailsArea from "./DetailsArea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  const [takeInput, setTakeInput] = useState("");
  const [movieData, setMovieData] = useState({});
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const omdbId = import.meta.env.VITE_APP_OMDB_ID;
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const handleSearch = async (moviename) => {
    try {
      const response = await axios.get(
        `${apiUrl}?i=${omdbId}&apikey=${apiKey}&t=${moviename}`
      );
      if (response.data && response.data.Poster) {
        setMovieData(response.data);
      } else {
        console.error("Invalid or missing data:", response.data);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-sm items-center space-x-2  mt-2">
      <div className="flex flex-row gap-3">
        <Input
          type="text"
          placeholder="Enter Movie Name"
          maxLength={40}
          onChange={(e) => setTakeInput(e.target.value)}
          value={takeInput}
        />
        
        <Button onClick={() => handleSearch(takeInput)}>Search</Button>
      </div>
      <DetailsArea movieData={movieData} />
    </div>
  );
};

export default SearchBar;
