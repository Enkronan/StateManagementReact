import React, { useCallback, useContext } from "react";
import {MovieContext} from './MovieContext';


const Nav = ()  => {

    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div className="nav">
        <h3>Robin Moe</h3>
        <p>Amount of movies: {movies.length}</p>
        </div>
    );
}


export default Nav;