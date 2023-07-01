import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Add } from '../components/Add';
import { Contact } from '../components/Contact';
import { HeaderNav } from '../components/HeaderNav';
import { MyMovies } from '../components/MyMovies';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        <HeaderNav/>
        <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to='/home'/>}/>
                <Route path='/home' element={<MyMovies/>}/>
                <Route path='/add' element={<Add/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={
                  <div className='page'>
                    <h1 className='heading'>Ошибка 404</h1>
                  </div>
                }/>
            </Routes>
        </section>
    </BrowserRouter>
  )
}
