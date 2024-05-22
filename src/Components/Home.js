import React from 'react'
import Headingpart from './Headingpart';
import Buttons from './Buttons';
import ThemesSection from './ThemesSection';
import CardsSection from './CardsSection';
import Customization from './Customization';
import Position from './Position';

function Home() {
  return (
    <div> 
      <Headingpart/>
      <Buttons/>
      <ThemesSection/>
      <CardsSection/>
      <Customization/>
      <Position/>
    </div>
  )
}

export default Home;