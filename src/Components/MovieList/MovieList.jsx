import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

function MovieList({ movies, valueRate, readTitle }) {
    console.log(movies);
    return (
        <div className="movieList">
            {movies
                .filter(
                    (movie) =>
                        movie.rating >= valueRate &&
                        movie.title
                            .toLowerCase()
                            .includes(readTitle.toLowerCase())
                )
                .map((element, index) => (
                    <MovieCard movie={element} key={index} />
                ))}
        </div>
    );
}

export default MovieList;
