import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>ТехПоддержка</h1>
        <a href='https://t.me/e01l08/' target='_blank'>
          <img className='logo-telegram' src='telegram.png'></img>
        </a>
      <form className='contact' action='mailto:paul156551@gmail.com'>
        <input type='text' placeholder='Имя'/>
        <input type='text' placeholder='Фамилия'/>
        <input type='text' placeholder='Почта'/>
        <textarea placeholder='Жалоба'/>
        <input type='submit' value='Отправить'/>
      </form>
    </div>
  )
}
