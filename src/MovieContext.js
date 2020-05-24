import React, { useState, createContext } from "react";

export const MovieContext = createContext();


export const MovieProvider = props => {
    
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
        <MovieContext.Provider>
            {props.children}
        </MovieContext.Provider>
    );
}