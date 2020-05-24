import React from "react";
import style from "./movie.module.css"

const Movie = ({name, price})  => {

    return(
        <div className={style.movie}>
        <h3>{name}</h3>
        <p>{price}</p>
        </div>
    );
}


export default Movie;