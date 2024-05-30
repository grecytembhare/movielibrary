import usePlaylist from "@/Hooks/useplaylist";
import React from "react";

function ListMovie() {
    const {playlist} = usePlaylist();
    return (
        <>
            <div className=''>
                {console.log(playlist)}
                {
                    playlist.map((movie, index) => (
                        <div key={index}>
                            <h2>{movie.data.title}</h2>
                            <ul>
                                {Object.keys(movie.data).map(key => (
                                    <li key={key}><strong>{key}:</strong> {movie.data[key]}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default ListMovie;
