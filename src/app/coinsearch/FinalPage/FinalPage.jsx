import React, { useEffect } from 'react'
import './FinalPage.scss'
import Confetti from 'react-confetti'
import {useWindowSize} from '@react-hook/window-size'

import Logo from '../../../img/home-end/logo.png'
import Trofeo from '../../../img/home-end/trofeo.png'
import Reloj from '../../../img/home-end/reloj.png'

function FinalPage({goToNextPage, hasWin, correctas, total}) {
  const [width, height] = useWindowSize()

  useEffect(() => {
    setDataToLocalStorage()
    setTimeout(() => {
      goToNextPage()
    }, 6000)
  }, [])

    //El JSON de estadisticas se guarda en el localStorage con la siguiente estructura:
// {
//     "dia": cantidadDeVecesJugadas,
//     "dia": cantidadDeVecesJugadas,
//     ...
// }

const setDataToLocalStorage = () => {
  const jsonData = localStorage.getItem('stats-coinsearch-bna');
  let estadisticas = {}
  if (jsonData) {
    estadisticas = JSON.parse(jsonData);
  }
  const date = new Date()
  const dia = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
  if(estadisticas[dia]){
    estadisticas[dia] += 1
  } else {
    estadisticas[dia] = 1
  }
  localStorage.setItem('stats-coinsearch-bna', JSON.stringify(estadisticas));
}

  return (
    <div className='end-page'>
      {hasWin && <Confetti
        width={width}
        height={height}
        colors={['#8F8ABD', '#F06C29', '#007B5F', '#507385', '#D4AC87', '#65C9D8']}
        recycle={true}
        numberOfPieces={500}
    	/>}
      <div className="header">
        <img src={Logo} />
      </div>
      <div className="center">
        {hasWin ?
        <>
          <h1>¡Excelente!</h1>
          <p>Encontraste todas las monedas</p>
          <img src={Trofeo} className='trophy'/>
        </>
        :
        <>
          <h2>Gracias por participar</h2>
          <p>Encontraste {correctas}/{total} monedas</p>
          <img src={Reloj} className='clock'/>
        </>
      }
      </div>
    </div>
  )
}

export default FinalPage