import React, { useState, useEffect } from "react";
import axios from "axios";

const initialValue = {
    id:0,
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const UpdateMovie = props => {
    const [ movie, setMovie ] = useState(props.movie);
    console.log(props)

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;

        if(e.target.name === "stars"){
            setMovie({
                ...movie,
                [e.target.name] :[value]
            });
        }
        else{
            setMovie({
                ...movie,
                [e.target.name]: value
            });
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => props.history.push(`/movies/${movie.id}`) )
            .catch(err => console.log(err))
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                onChange={changeHandler}
                placeholder='title'
                value={movie.title}
            />
            <input
                type='text'
                name='director'
                onChange={changeHandler}
                placeholder='director'
                value={movie.director}
            />
            <input
                type='text'
                name='metascore'
                onChange={changeHandler}
                placeholder='metascore'
                value={movie.metascore}
            />           
            <input
                type='text'
                name='stars'
                onChange={changeHandler}
                placeholder='stars'
                value={movie.stars}
            />     
            <button onSubmit={handleSubmit}>submit</button>      
        </form>
    );
};

export default UpdateMovie;