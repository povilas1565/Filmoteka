import React, { useState } from 'react';
import { Browser } from "./Browser";
import { Create } from "./Create";
import { List } from "./List";

export const MyMovies = () => {
    const [listState, setListState] = useState([]);
  return (
    <>
        <section id="content" className="content-movies">
          <List listState={listState} setListState={setListState}/>
        </section>
        <aside className="lat">
          <Browser listState={listState} setListState={setListState}/>
          <Create setListState={setListState}/>
        </aside>
    </>
  )
}
