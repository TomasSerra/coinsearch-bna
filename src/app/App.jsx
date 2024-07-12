import { useState, useEffect } from 'react';
import './App.css';

import CoinSearchPage from './coinsearch/Pages/CoinSearchPage';
import MainPage from './coinsearch/MainPage/MainPage';
import FinalPage from './coinsearch/FinalPage/FinalPage';

function App() {
  const [route, setRoute] = useState(0);
  const [coins, setCoins] = useState(0);
  const [globalBackground, setGlobalBackground] = useState(0)
  
  return (
    <div className="App" style={{touchAction: 'none'}}>
      {route === 0 && <MainPage goToNextPage={()=>{setRoute(1)}}/>}
      {route === 1 && <CoinSearchPage setRoute={setRoute} setCoins={setCoins} globalBackground={globalBackground} setGlobalBackground={setGlobalBackground}/>}
      {route === 2 && <FinalPage goToNextPage={()=>{setRoute(0)}} correctas={coins} total={4} hasWin={coins===4}/>}
    </div>
  );
}

export default App;
