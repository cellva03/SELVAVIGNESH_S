import React from 'react'
import logo from '../../assets/logo.svg'
import cal from '../../assets/calender.svg'


const Nav = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'0 50px',paddingTop:'30px'}}>
        <img src={logo} alt="" />
        <img src={cal} alt="" />
    </div>
  )
}

export default Nav