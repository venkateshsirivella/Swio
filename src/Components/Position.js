import React from 'react';
import cons from './Images/Icons.png';

function Position() {
  return (
    <div>
    <div style={{height:'8em',width:'99vw',display:'flex',justifyContent:'center'}}>

        <img className='screenicon' src={cons} alt='' />
    </div>

    <div className='lastone'>
        <p style={{color:'red'}}>INTEGRATIONS</p>
        <h1 style={{fontSize:'2rem'}}>Like, Scrobble.</h1>
    </div>
    </div>
  )
}

export default Position