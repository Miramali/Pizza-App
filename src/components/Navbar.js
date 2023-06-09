import React from 'react';
import { useState } from 'react';
import logo from "../assets/pizzaLogo.png";
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/navbar.css';

const Navbar = () => {
    const [openlinks, setopenlinks]= useState(false);

    const toggleNavbar =()=>{
        setopenlinks(!openlinks)

    }
  return (
    <div className='navbar'>
        <div className='nav-leftside' id={openlinks? "open" : "close"}>
        <img src={logo} />
        <div className='hiddenLinks'>
           <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>

        </div>
        </div>
        <div className='nav-rightside'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>

           
        </div>
      
    </div>
  )
}

export default Navbar
