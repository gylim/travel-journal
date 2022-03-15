import React from 'react';
import globe from '../images/little_globe.png';

export default function Navbar() {
    return(
        <nav>
            <img src={globe} className="nav-img" />
            <p className='nav-title'>a &amp; b travel journal.</p>
        </nav>
    )
}