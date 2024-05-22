import React from 'react';
import '../Components/ThemeSection.css';
import theme from '../Components/Images/AppleTheme.png';

function ThemesSection() {
    return (
        <div className='Maincontainer'>
            <div className='versionContainer'>
                <h6 className='vversion'><div>NEW IN</div> <p className='version'>2.0</p></h6>
            </div>
            <div className='abouttheme'>
                <h1>Themes. Unlimited themes.</h1>
            </div>
            <div className='themepara'> 
                <p>Themes in Sleeve make creating and switching between customizations easy. Share your own</p>
                <p>creations with friends and install as many themes as you like with just a double-click.</p>
            </div>
            <div className='imgContainer'>
                <img className='themeimg' src={theme} alt='' />
            </div>
        </div>
    )
}

export default ThemesSection