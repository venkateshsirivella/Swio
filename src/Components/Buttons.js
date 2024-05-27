import React from 'react';
import '../Components/Buttons.css';
import icon from '../Components/Images/applelogo.png'
import { Link } from 'react-router-dom';
import shelf from '../Components/Images/ShelfCallout.png';

function Buttons() {
    return (
        <div className='mainpart'>
            <div className='buttonSection'>
                <a className='linkbtn' href='https://apps.apple.com/us/app/sleeve-for-spotify-music/id1606145041?mt=12'><button className='storebtn'><div><img className='icon' src={icon} alt='' /></div><div>Mac Store</div></button></a>
                <Link to='/Payment'><button className='buyButton'><div>Buy Directly</div><div>$5.99</div></button></Link>
            </div>
            <div className='subscriptionMsg'>
                <p>No subscriptions. No in-app</p>
                <p>purchases. Requires macOS 11 Big Sur</p>
                <p>or later.</p>
            </div>
            <div>
                <button type='button' className='updateReleasebtn'><div><img className='shelfimg' src={shelf} alt='' /></div> <div>Now with shelves and a progress bar.See what's new in Sleeve 2.3</div></button>
            </div>
        </div>
    )
}

export default Buttons;