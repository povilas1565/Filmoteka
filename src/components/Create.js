import React, { useState } from 'react'
import { saveInStorage } from '../helpers/saveInStorage';

export const Create = ({setListState}) => {
    const componentTitle = "Создать фильмы";
    const [movieState, setMovieState] = useState({
        title: '',
        year : '',
        director : '',
        producer: '',
        country: '',
        screenwriter: '',
        rating:'',
        operator: '',
        genre: '',
        composer: ''

    })
    const {title, year, director, producer, country, screenwriter, rating, operator, genre, composer} = movieState;
    const getDataToCreate = event => {
        event.preventDefault();

        // Get data of the form
        const title  = event.target.title.value;
        const year   = event.target.year.value;
        const director = event.target.director.value;
        const producer = event.target.producer.value;
        const country = event.target.country.value;
        const screenwriter = event.target.screenwriter.value;
        const rating = event.target.rating.value;
        const operator = event.target.operator.value;
        const genre = event.target.genre.value;
        const composer = event.target.composer.value;
        const poster = URL.createObjectURL(event.target.poster.files[0]);        
        
        // Create an object with the movie to save
        const movie = {
            id: new Date().getTime(),
            title,
            year,
            director,
            producer,
            country,
            screenwriter,
            rating,
            operator,
            genre,
            composer,
            poster
        };
        // Save state
        setMovieState(movie);
        // Update the state of the list
        setListState(elements => {
            return [...elements, movie];
        });
        // Save in localStorage
        saveInStorage("movies", movie);
    }

  return (
    <div className="add">
        <h3 className="title">{componentTitle}</h3>
        <strong>
            {(title && year) && "Вы создали фильм: " + title}
        </strong>
        <form onSubmit={getDataToCreate}>
            <input id="title" type="text" name="title" placeholder="Название"/>
            <input id="year" type="text" name="year" placeholder="Год"/>
            <input id="director" type="text" name="director" placeholder="Режиссер"/>
            <input id="producer" type="text" name="producer" placeholder="Продюсер"/>
            <input id="country" type="text" name="country" placeholder="Страна"/>
            <input id="screenwriter" type="text" name="screenwriter" placeholder="Сценарист"/>
            <input id="rating" type="text" name="rating" placeholder="Рейтинг"/>
            <input id="operator" type="text" name="operator" placeholder="Оператор"/>
            <input id="genre" type="text" name="genre" placeholder="Жанр"/>
            <input id="composer" type="text" name="composer" placeholder="Композитор"/>
            <input id="poster" type="file" name="poster"/>
            <input id="save" type="submit" value="Сохранить"/>
        </form>
    </div>
  )
}
