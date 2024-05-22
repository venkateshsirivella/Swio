import React from 'react';
import '../Components/Headingpart.css';
import img1 from '../Components/Images/AppMusic.png';
import img2 from '../Components/Images/AppSpotify.png';
import img3 from '../Components/Images/AppDoppler.png';


function Headingpart() {
  return (
    <div> 
        <div className='Headingpart'>
            <h1>Sleeve 2</h1>
            <h3>The ultimate music accessory for your Mac.</h3>
            <div className='para'>
            <p>Sleeve sits on the desktop, displaying and controlling the music you’re</p>
            <p>currently playing in <img className='image' src={img1} alt='' /> Apple Music,<img className='image' src={img2} alt='' /> Spotify, and <img className='image' src={img3} alt='' /> Doppler.</p>
        </div>
        </div>
    </div>
  )
}

export default Headingpart;