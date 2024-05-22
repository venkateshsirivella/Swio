import React from 'react'
import image1 from './Images/music-player1.png';
import image2 from './Images/Music1.jpg';
import share from './Images/Share.jpg';
import './CardsSection.css';

function CardsSection() {
  return (
    <div>
      <div className='main_container'>
        <div className='sub_container'>


          <div className='box1'>
            <div className='Description'>
              <h2 style={{ fontSize: '2rem', marginTop: '1.5rem', paddingLeft: '1.5rem' }}>Change it up</h2>
              <p style={{ fontSize: '1.2rem', marginTop: '1rem', paddingLeft: '1.5rem', paddingRight: '2.5rem' }}>Switch between themes with just a click.</p>
              <p style={{ fontSize: '1.2rem', marginTop: '1rem', paddingLeft: '1.5rem', paddingRight: '2.5rem' }}>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</p>
            </div>
            <div className='imagepart'>
              <img className='imgone' id='top-image' src={image1} alt='' />
              <img className='imgone' id='bottom-image' src={image2} alt='' />
            </div>
          </div>
          {/*--------------------------------------------------------------------------  */}

            <div className='box1'>
              <div className='Description'>
                <h2 style={{ fontSize: '2rem', marginTop: '1.5rem', paddingLeft: '1rem' }}>Shareable</h2>
                <p style={{ fontSize: '1.2rem', marginTop: '1rem', paddingLeft: '1rem', paddingRight: '1.5rem' }}>Export your themes and share them with friends using the handy new Sleeve Theme file format.</p>
                <p style={{ fontSize: '1.2rem', marginTop: '1rem', paddingLeft: '1rem', paddingRight: '1.5rem' }}>Install themes from anywhere with a double-click or a drag and drop.</p>
              </div>
              <div className='imagepart'>
                <img className='imgone' src={share} alt='' />
              </div>
            </div>




        </div>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}


      </div>
    </div>
  )
}

export default CardsSection;