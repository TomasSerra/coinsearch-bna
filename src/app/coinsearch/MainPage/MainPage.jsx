import React, {useState} from 'react'
import './MainPage.scss'

import Logo from '../../../img/home-end/logo.png'
import Image from '../../../img/home-end/image.png'
import SecretButton from '../../../components/SecretButton/SecretButton'
import StatsViewer from '../../../components/StatsViewer/StatsViewer'

function MainPage({goToNextPage}) {
  const [showStats, setShowStats] = useState(false)
  return (
    <div className='home-page'>
      <div style={{position: 'absolute', top: 0, left: 0, width: '15vw', height: '15vw'}}>
        <SecretButton whenClicked={() => setShowStats(true)} totalClicks={2}/>
      </div>
      {showStats && <StatsViewer whenClose={()=>{setShowStats(false)}} storageKey={'stats-coinsearch-bna'}/>}
      <div className="header">
        <img src={Logo} />
      </div>
      <div className="center">
        <h1>¡Bienvenido!</h1>
        <p>Encontrá las 4 monedas antes que se acabe el tiempo</p>
        <img src={Image} className='image' />
      </div>
      <div className="button">
        <button onClick={goToNextPage}>Jugar</button>
      </div>
    </div>
  )
}

export default MainPage
