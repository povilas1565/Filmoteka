import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <>
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>Movies</h1>
        </header>
        <nav className="nav">
          <ul>                  
            <li>
              <NavLink to='/home' className={({isActive}) => isActive ? "active" : ""}>
                Мои фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' className={({isActive}) => isActive ? "active" : ""}>
                Добавить фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={({isActive}) => isActive ? "active" : ""}>
                ТехПоддержка
              </NavLink>
            </li>
          </ul>
        </nav>
    </>
  )
}
