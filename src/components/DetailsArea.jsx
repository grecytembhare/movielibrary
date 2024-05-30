// src/components/DetailsArea.jsx
import React from "react";
import { Button } from "./ui/button";
import usePlaylist from "@/Hooks/useplaylist";

const DetailsArea = ({ movieData }) => {
  if (!movieData || Object.keys(movieData).length === 0) {
    return <div>Loading...</div>;
  }

  const { addToPlaylist } = usePlaylist(); // Correctly invoke usePlaylist
  // imdbID, title, year, released, language, country, imdbRating, genre
  const handleAddToPlaylist = () => {
    addToPlaylist(
      movieData.imdbID,
      movieData.Title,
      movieData.Year,
      movieData.Released,
      movieData.Language,
      movieData.Country,
      movieData.imdbRating,
      movieData.Genre
    );
  };

  return (
    <div className="details-container">
      <Button onClick={handleAddToPlaylist}>Add to Playlist</Button>
      <br />
      <img src={movieData.Poster || ""} alt="Movie Poster" className="poster" />
      <h2 className="title">{movieData.Title || "No Title"}</h2>
      <p className="release-date">{movieData.Released || "No Release Date"}</p>
      <p className="plot">{movieData.Plot || "No Plot Available"}</p>
      <p className="plot">{movieData.Country || "No Country Available"}</p>
      <p className="plot">{movieData.Language || "No Language Available"}</p>
      <p className="title">{movieData.Genre || "No Genre"}</p>
      <p className="title">{movieData.Runtime || "No Runtime"}</p>
      <p className="title">{movieData.Director || "No Director"}</p>
      <p className="title">{movieData.Writer || "No Writer"}</p>
      <p className="title">{movieData.Actors || "No Actors"}</p>
    </div>
  );
};

export default DetailsArea;
