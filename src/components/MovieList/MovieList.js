import { useState } from 'react';
import moviesDataJSON from '../../dataFormFakeApi.json';
import AddMovie from '../AddMovie/AddMovie';
import FilterMovies from '../FilterMovies/FilterMovies';
import MovieCard from '../MovieCard/MovieCard';


function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON)

  const addNewMovie = newMovie => {
      const moviesCopy = [...movies, newMovie]
    //   moviesCopy.push(newMovie)  ===> al posar newMovie dins l'array anterior és com si ja estigués fent un push
      setMovies(moviesCopy)

      const moviesDataCopy = [...moviesDataJSON, newMovie]
      setMoviesData(moviesDataCopy)
  }

  const filteredMovies = str => {
      const filteredMovies = str === 'All' ? moviesData : moviesData.filter(eachMovie => eachMovie.title[0] === str)
      //exemple utilitzant el "includes" tant en title com en director.
      //const filteredMovies = str === 'All' ? moviesData : moviesData.filter(eachMovie => eachMovie.title.includes(str) || eachMovie.director.includes(str))
      setMovies(filteredMovies)
  }
 
  return (
    <div>
      <AddMovie addNewMovie={addNewMovie} />
      <FilterMovies filteredMovies={filteredMovies} />
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      //ho podem escriure també així:
      //{movies.map(movie => <MovieCard key={movie._id} movie={movie} />
      })}
    </div>
  );
}

export default MovieList;
