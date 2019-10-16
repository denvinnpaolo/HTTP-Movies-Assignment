import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import AddMovie from "./Movies/AddMovie";

const App = () => {
  const [ movie, setMovie ] = useState([])
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} updateMovie={setMovie}/>;
        }}
      />
      <Route 
        path="/updatemovie/:id"
        render={props => {
          return <UpdateMovie {...props} movie={movie}/>
        }}
      />
      <Route
      path="/addmovie"
      render={props=> {
        return <AddMovie {...props} />
      }} />
    </>
  );
};

export default App;
