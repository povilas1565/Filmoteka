import React, { useState } from 'react'

export const Browser = ({listState, setListState}) => {

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  const searchMovie = (event) => {
    // Update the state
    setSearch(event.target.value);
    updateTheList(event.target.value);
  }

  const updateTheList = (value) => {
    // Filter to search the coincidences
    let moviesFound = listState.filter(movie => {
      return movie.title.toLowerCase().includes(value.toLocaleLowerCase());
    });
    if (value.length <= 1 || moviesFound <= 0) {
      moviesFound = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    // Update the list with the filter
    setListState(moviesFound);
  }
  return (
    <div className="search">
        <h3 className="title">Браузер: {search}</h3>
        {(notFound == true && search.length > 1) && (
          <span className='not-found'>Совпадений не найдено</span>
        )}
        <form>
            <input id="search_field"
                   type="text" 
                   name='search' 
                   autoComplete='off'
                   onChange={searchMovie}/>
        </form>
    </div>
  )
}
