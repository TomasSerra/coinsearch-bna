import React from 'react'
import './MainPage.scss'

import Logo from '../../../img/home-end/logo.png'
import Image from '../../../img/home-end/image.png'

function MainPage({goToNextPage}) {
  return (
    <div className='home-page'>
      <div className="header">
        <img src={Logo} />
      </div>
      <div className="center">
        <h1>¡Bienvenido!</h1>
        <p>Encuentra todas las monedas antes de que se acabe el tiempo</p>
        <img src={Image} className='image' />
      </div>
      <div className="button">
        <button onClick={goToNextPage}>Jugar</button>
      </div>
    </div>
  )
}

export default MainPage