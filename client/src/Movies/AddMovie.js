import React, { useState, useEffect } from "react";
import axios from "axios";
import { Label, Input, FormGroup, Form, Button } from 'reactstrap';

const initialValue = {
    title: "",
    director:"",
    metascore: 0,
    stars:[],
    id:0
}

const AddMovie = props => {

    const [ newMovie, setNewMovie ] = useState(initialValue)
    console.log(newMovie)

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/movies/', newMovie)
            .then(res =>props.history.push(`/`))
            .catch(err => console.log(err))
    };

    const changeHandler = e => {
        e.persist();
        let value = e.target.value

        if(e.target.name === 'stars'){
            setNewMovie({
                ...newMovie,
                [e.target.name]: [value]
            })
        }
        else{
            setNewMovie({
                ...newMovie,
                [e.target.name]: value
            })
        }
    }

    return(
        <div className="form">
        <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Input 
            className="inputs"
            type='text'
            name='title'
            onChange={changeHandler}
            placeholder='title'
            value={newMovie.title}
        />
        <Input 
            className="inputs"
            type='text'
            name='director'
            onChange={changeHandler}
            placeholder='director'
            value={newMovie.director}
        />
        <Input 
            className="inputs"
            type='text'
            name='metascore'
            onChange={changeHandler}
            placeholder='metascore'
            value={newMovie.metascore}
        />
        <Input 
            className="inputs"
            type='text'
            name='stars'
            onChange={changeHandler}
            placeholder='stars'
            value={newMovie.stars}
        />
        <Button onSubmit={handleSubmit}>Submit</Button>
        </FormGroup>
        </Form>
        </div>

    );
}

export default AddMovie;