import React from 'react'
import img from './Vector.png'
import './Header.css'

export default function Header() {
  return (
    <div className='header' >
        <img src={img}></img>
        <div className='right'>
          <a >Premium</a>
          <a >Pricing</a>
          <a >About</a>
          <a >Sing in</a>
          <a >Get Started</a>  




        </div>
    </div>
  )
}
