import React from 'react';
import '../Components/PaymentPage.css';
import { Link } from 'react-router-dom';
import backbtn from '../Components/Images/Backb.png';
import AddPromo from './AddPromo';
import PaymentForm from './PaymentForm';

function PaymentPage() {
    return (
        <div className='maincontainer'>
            <div className='subcontainer'>
                <div className='Firstcontainer'>
                    <Link style={{ textDecoration: 'none' }} to='/'><button className='backbutton'><div><img className='backicon' src={backbtn} alt='' /></div><div>Back</div></button></Link>
                    <div>
                        <p className='bpara'>Pay Replay Software Limited</p>
                        <font className='money'>$5.99</font>
                    </div>
                    <div className='amountDetails'>
                        <div style={{ border: '1px solid gray', borderTop: 'none',borderLeft:'none',borderRight:'none', height: '25%',marginLeft:'1em' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '1em', paddingRight: '1em' }}>
                                <font style={{ fontSize: '1.3rem' }}>Sleeve</font>
                                <font>$5.99</font>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.8em', paddingLeft: '1em', paddingRight: '1em' }}>Your currently playing track from Spotify & Apple Music, displayed right on your desktop.</p>
                            </div>
                        </div>

                        <div style={{ border: '1px solid gray',borderTop:'none',borderLeft:'none',borderRight:'none', height: '32%' ,marginLeft:'1em'}}>
                            <div >
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '1em', paddingRight: '1em', paddingTop: '0.5em' }}>
                                    <font style={{ fontSize: '1.3rem' }}>Subtotal</font>
                                    <font>$5.99</font>
                                </div>
                                <div style={{ paddingLeft: '1em', paddingTop: '0.5em' }}>
                                    <AddPromo />
                                </div>

                            </div>
                        </div>
                        <div style={{ border: '1px solid gray', borderTop: 'none',borderLeft:'none',borderRight:'none', height: '20%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '1em', paddingRight: '1em',marginLeft:'1em' }}>
                            <font>Total due</font>
                            <font>$5.99</font>
                        </div>
                    </div>
                </div>

                {/*  ---------------------------------------------------------------------------------------------------------------*/}

                <div className='Secondcontainer'>
                    <PaymentForm/>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage;