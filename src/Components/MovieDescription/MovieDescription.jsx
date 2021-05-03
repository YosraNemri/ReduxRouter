import { Button } from "react-bootstrap";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDescription.css";
const MovieDescription = ({ movies }) => {
    const { MovieId } = useParams();

    const movie = movies.find((movie) => movie.id === Number(MovieId));
    return (
        <div className="movieDescription">
            <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <p>{movie.description}</p>
            <Button variant="light">
                <Link to="/"> Home </Link>
            </Button>
        </div>
    );
};

export default MovieDescription;
