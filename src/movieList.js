import React, { useState } from "react";
import Movie from './Movie';

const MovieList = ()  => {

    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 23124
        },
        {
            name: "Game of Thrones",
            price: "$10",
            id: 256123
        },
        {
            name: "Titanic",
            price:"$10",
            id: 23411
        }
    ]);

    return(
        <div>
        {movies.map(movie => (
            <Movie key={movie.id} name={movie.name} price={movie.price}/>
        ))}
        </div>
    );
}


export default MovieList;