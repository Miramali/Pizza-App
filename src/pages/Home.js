import React from 'react';
import {Link} from 'react-router-dom';
import headerPic from '../assets/pizza.jpeg';

import '../styles/home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${headerPic})`}}>
      <div className='headerContainer'>
        <h1>Pizza's Andro</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
      <Link to="/menu">
        <button>ORDER NOW</button>
        
        </Link>
      </div>

    </div>
  )
}

export default Home
