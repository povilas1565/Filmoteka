import React, { useEffect, useState } from 'react';
import { saveInStorage } from '../helpers/saveInStorage';

export const Add = () => {

    // Hook state to the input to search
    const [search, setSearch] = useState("");
    // Hook state when the API return something
    const [movies, setMovies] = useState([]);

    // Hook useEffect when the search value changes
    useEffect(() => {
        // Async function with the fetch to the API to get the movies
        const getMoviesFromAPI = async (movieTitle = "") => {
            // Build the url with the api key and the title wanted
            const url = `http://www.omdbapi.com/?apikey=fc59da33&s=${movieTitle}`;
            const response = fetch(url);
            // Wait for the response
            const responseJson = await (await response).json();
            // Validate if the response was successfull
            if (responseJson.Response == 'True') {
                // Get the movies of the response and pass it to the movies state
                const responseArray = Object.values(responseJson.Search);
                setMovies(responseArray);
            } else {
                // Set the movies state with the error of the response
                setMovies(["Error", responseJson.Error]);
            }
        };
        // Do the fetch only when the user type something
        if (search != "") {
            getMoviesFromAPI(search);
        }
    }, [search]);

    // Function to add a movie in the localStorage
    const addMovie = (movieId, movieTitle, movieYear, movieDirector, movieProducer, movieCountry, movieScreenwriter, movieRating, movieOperator, movieGenre, movieComposer, moviePoster) => {
        // Build the object to save
        const movie = {
            id: movieId,
            title : movieTitle,
            year : movieYear,
            director: movieDirector,
            producer: movieProducer,
            country: movieCountry,
            screenwriter: movieScreenwriter,
            rating: movieRating,
            operator: movieOperator,
            genre: movieGenre,
            composer: movieComposer,
            poster : moviePoster
        }
        // Save the object and save the flag to validate if it was added or not
        const isSaved = saveInStorage("movies", movie);
        // If the notification already exists in the document, remove it
        if (document.querySelector('.notification-add')) {
            document.querySelector('.notification-add').remove();
        }
        // Create the notification
        const notificiation = document.createElement('div');
        notificiation.setAttribute("class", "notification-add");
        // Validate if the movie was saved or not
        if (isSaved) {
            notificiation.innerHTML = "Добавлены в мои фильмы!";
        } else {
            notificiation.innerHTML = "Фильм уже существует";
        }
        // Show the notification
        document.querySelector('#content').appendChild(notificiation);
        // Hide the notification when 3 seconds passed
        setTimeout(() => {
            notificiation.classList.add('hide');
        }, 3000);
    }

  return (
    <>
        <section id="content" className="content-movies">
            { /* Validate if the state of the search is different to the null string */
            search != "" ?
                /* Validate if the movies array are more than 0 */
                movies.length > 0 &&
                    /* Validate if the fetch was successfull */
                    movies[0] != "Error" ? 
                        /* Iterate over the movies array and render each one */
                        movies.map(movie => {
                            return (
                                <article key={movie.imdbID} className='movie-item'>
                                    <img className="poster" src={movie.poster}></img>
                                    <h3 className="title">{movie.title}</h3>
                                    <p className="description">{movie.genre}</p>
                                    <p className="description">{movie.year}</p>
                                    <p className="description">{movie.director}</p>
                                    <p className="description">{movie.producer}</p>
                                    <p className="description">{movie.country}</p>
                                    <p className="description">{movie.screenwriter}</p>
                                    <p className="description">{movie.rating}</p>
                                    <p className="description">{movie.operator}</p>
                                    <p className="description">{movie.composer}</p>

                                    <button className="add-button" 
                                    onClick={(event) => addMovie(movie.imdbID, movie.genre, movie.title, movie.director, movie.producer, movie.country, movie.screenwriter, movie.operator, movie.operator, movie.poster)}>
                                        Add
                                    </button>
                                </article>
                            )
                        })
                    /* Render a warning if the fetch wasn't successfull with the error */
                    : <div className='card-warning'>{movies[1]}</div>
            /* Render a warning if the user doesn't type anything */
            : <div className='card-warning'>
                    Если вы хотите добавить фильм, введите название нужного фильма и нажмите
                    кнопку для поиска
                </div>
        }
        </section>
        <aside className="lat">
            <div className="search">
            <h3 className="title">Браузер:</h3>
            <form onSubmit={(event) => {
                        event.preventDefault();
                        setSearch(event.target.search.value);
                    }}>
                <input id='searchAPI' name='search' type='text'></input>
                <input type='submit' value='Поиск'/>
            </form>
            </div>
        </aside>
    </>
  )
}
