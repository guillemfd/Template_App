// src/components/AddMovie.js

import { useState } from 'react';

function AddMovie(props) {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleTitleInput = e => setTitle(e.target.value)
  const handleDirectorInput = e => setDirector(e.target.value)
  const handleIMDBRatingInput = e => setIMDBRating(e.target.value)
  const handleOscarsInput = e => setHasOscars(e.target.checked)

  const handleSubmit = e => {
      e.preventDefault() 
  //preventDefault serveix x dir a JS que no faci el que espera q passi, en aquest cas 
  //que el formulari no s'envii directament i com a conseqüència refresqui la pàgina.

        const newMovie = { title, director, IMDBRating, hasOscars }
        props.addNewMovie(newMovie)
        // console.log('La nue va peli es:', newMovie)

        setTitle('')
        setDirector('')
        setIMDBRating(5)
        setHasOscars(true)
  }



  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input 
            type="text" 
            name="title" 
            value={title}
            onChange={handleTitleInput}
        />
        
  
        <label>Director: </label>
        <input 
            type="text" 
            name="director" 
            value={director}
            onChange={handleDirectorInput}
        />
  
        <label>IMDB Rating: </label>
        <input 
            type="number" 
            name="IMDBRating" 
            value={IMDBRating}
            onChange={handleIMDBRatingInput}
        />
  
        <label>Won Oscars: </label>
        <input 
            type="checkbox" 
            name="hasOscars" 
            checked={hasOscars}
            onChange={handleOscarsInput}
        />
        
        <button type="submit">Add a Movie</button>
      </form>
      
    </div>
  );
}

export default AddMovie;
