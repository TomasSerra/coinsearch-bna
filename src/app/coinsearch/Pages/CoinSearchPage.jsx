import { useState, useEffect } from 'react';

import FirstBackground from './FirstPage/FirstBackground';
import SecondBackground from './SecondPage/SecondBackground';
import ThirdBackground from './ThirdPage/ThirdBackground';
import FourBackground from './FourPage/FourBackground';

function CoinSearchPage({setRoute, setGlobalBackground, globalBackground, setCoins}) {
    const [background, setBackground] = useState(globalBackground);
    const winPageRoute = 2;
    const maxBackgrounds = 4;
    const maxTime = 40;
  
    function endGame(coins){
        setTimeout(() => {
            let backgroundAux = background;
            backgroundAux = backgroundAux >= maxBackgrounds-1 ? 0 : backgroundAux+=1;
            setGlobalBackground(backgroundAux)
            setCoins(coins)
            setRoute(winPageRoute)
          }, "2000");
    }


    return (
        <>
        {background === 0 && <FirstBackground endGame={endGame} maxTime={maxTime}/>}
        {background === 1 && <SecondBackground endGame={endGame} maxTime={maxTime}/>}
        {background === 2 && <ThirdBackground endGame={endGame} maxTime={maxTime}/>}
        {background === 3 && <FourBackground endGame={endGame} maxTime={maxTime}/>}
        </>
    );
}

export default CoinSearchPage;