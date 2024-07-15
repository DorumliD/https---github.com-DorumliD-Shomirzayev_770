import React from 'react';
import Header from '../header/Header';
import roll from './IMAGE.svg';
import './Head.css';



export default function Head() {
    return (
        <div className='head' style={{ backgroundImage: `url(${roll})`, height:'582px', width: '1440px' }}>
            <Header />
            <h1>Propel your business.</h1>
            <p>Propel comes with everything you need to get your business rolling.</p>
            <button>Get Started</button>
        </div>
    );
}
