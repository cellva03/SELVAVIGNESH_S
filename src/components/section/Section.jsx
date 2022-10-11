import React from 'react'
import Coin from '../../assets/coin.svg'
import { AiOutlineRight } from "react-icons/ai";

const Section = () => {
  return (
    <div className='section_container'>
        <div className="text-center" style={{color:'white'}}>
           <p style={{fontSize:'35px',marginBottom:'0px',fontWeight:'200'}}>Unlock to</p> 
           <h1 style={{fontSize:'60px'}}>Power your dreams!</h1>
        </div>
        <div className="text-center" style={{color:'white'}}>
           <p style={{fontSize:'25px',marginBottom:'0px'}}>Stand a chance to win</p> 
           <p style={{fontSize:'25px'}}>N3,000,000 everyday for the next 5 days</p>
        </div>
        <div className="box" style={{color:'white'}}>
          <p className="text-center" style={{fontWeight:'bold'}}>🚀 How To Play</p>
          <pre>1.Guess the right combination of numbers<br/>
               2.Win <span style={{fontWeight:'bold',fontSize:'14px'}}>N3,000,000</span> instantly</pre>
          <p>Sounds unbeliveable?Well, guess right & see for yourself!</p>
          <div className='inner_box'>
              <p>💡</p><div>Think well before you guess. You have only 2 attempts per day and even after you win, you can come back the next day to try for another jackpot!</div>
          </div>
        </div>
        <div className='button_play'>
          <a style={{textDecoration:'none'}} href="https://snake-gamez.netlify.app"><button>Paly The Game <AiOutlineRight style={{fontSize:'20px'}}/></button></a>
        </div>
        <div className='coin_image'>
          <img src={Coin} alt="" height={350}/>
        </div>
    </div>
  )
}

export default Section