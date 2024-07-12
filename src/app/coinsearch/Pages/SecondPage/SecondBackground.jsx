import { useEffect, useState, useRef } from 'react';
import './SecondBackground.scss';
import Coin from '../../../../img/coinsearch/coin.png'
import Wallet from '../../../../img/coinsearch/wallet.webp'
import TimeSlider from '../../../../components/timeSlider/TimeSlider';
import Header from '../../../../components/header/Header';

function SecondBackground({endGame, maxTime}) {

  const [found, setFound] = useState(0);
  const [maxCoins, setMaxCoins] = useState(4);
  const [coin, setCoin] = useState([]);

  const [time, setTime] = useState(maxTime);
  const [stopTime, setStopTime] = useState(false);
  const [sliderColor, setSliderColor] = useState("#008EDD");

  const intervalRef = useRef(null);

  //SLIDER
  function timeFunction(){
      setTime(time => time-maxTime/1000)
  }

  useEffect(()=>{
      if(stopTime == false){
        if(time<=0){
          setStopTime(true)
          endGame(found)
          clearInterval(intervalRef.current)
        }
        if(time <= maxTime*0.3){ //Si llega al 30% del tiempo
          setSliderColor("rgb(160, 40, 40)")
        }
        else{
          setSliderColor("#008EDD")
        }
      }
    }, [time])
  
    useEffect(()=>{
      intervalRef.current = setInterval(timeFunction, maxTime);
      var coinList = []
      for (let i = 1; i <= maxCoins; i++) {
          coinList.push(document.getElementById('coin'+i))
      }
      setCoin(coinList)
  },[])

  function foundCoin(n){
      if(n!=maxCoins+1){
          setFound(found+1)
          if(found == maxCoins-1){
            setStopTime(true)
            clearInterval(intervalRef.current)
            endGame(maxCoins)
          }
      }
      coin[n-1].classList.add("coin"+n+"-animate")
  }

    return (
        <div className='coin-search-second-page'>
          <div className='header-container'>
            <TimeSlider maxTime={maxTime} time={time} sliderColor={sliderColor}/>
            <Header/>
            <div className='found-text'>
                {found}/{maxCoins}
                <img className='coin-icon' draggable="false" src={Coin}></img>
            </div>
          </div>
            <img className='wallet' draggable="false" src={Wallet}></img>
            <img className='coin' id='coin1' draggable="false" onClick={() => foundCoin(1)} src={Coin}></img>
            <img className='coin' id='coin2' draggable="false" onClick={() => foundCoin(2)} src={Coin}></img>
            <img className='coin' id='coin3' draggable="false" onClick={() => foundCoin(3)} src={Coin}></img>
            <img className='coin' id='coin4' draggable="false" onClick={() => foundCoin(4)} src={Coin}></img>
        </div>
    )
}

export default SecondBackground;