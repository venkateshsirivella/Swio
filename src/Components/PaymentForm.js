import React, { useState } from 'react';
import '../Components/PaymentForm.css';
import SecureCheckout from './SecureCheckout';

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <form style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='formsubcontainer'>
        <div>
          {/* ----------------------------------------------------------------------------------------------------------------------------------- */}
          <div style={{ marginTop: '1.3em' }}>
          <a href='https://app.link.com/login'><button className='linkupay' type='button'>Pay With Link</button></a>
          </div>
          <div className='otherway'>
          -Or pay another way-
          </div>
          

          <div style={{ marginTop: '1.3em' }}>
            <label htmlFor="email" >Email:</label><br />
            <input type="email" id="email" style={{ margin: '0px', padding: '0px' }} name="email" required />
          </div>

          {/* ------------------------------------------------------------------------------------------------------------------------------------ */}

          <div style={{ marginTop: '1em' }}>

            <label style={{ fontSize: '1.5rem' }}>Payment Method:</label>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', width: '8rem', justifyContent: 'space-between', marginTop: '0.5em' }}>
                <div>
                  <input
                    type="radio"
                    id="cardOption"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={handlePaymentMethodChange} />

                  <label htmlFor="cardOption">Card</label>
                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------  */}

                <div>
                  <input type="radio"

                    id="paypalOption"

                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={handlePaymentMethodChange} />

                  <label htmlFor="paypalOption">PayPal</label>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
          {paymentMethod === 'card' && (
            <div style={{ marginTop: '2rem' }}>
              <font className='details'>Card Information:</font>
              <div style={{marginTop:'1em'}}>
                <label htmlFor="cardNumber">Card details</label><br />
                <input type="text" id="cardNumber" name="cardNumber" placeholder="  XXXX XXXX XXXX XXXX" required />
              </div>
              <div>

                <input type="text" id="cvc" name="cvc" placeholder='  CVC' required />
                <input type="text" id="expiry" name="expiry" placeholder="  MM / YY" required />
              </div>

              <div style={{marginTop:'1rem'}}>
                <label htmlFor="cardHolderName">Cardholder Name:</label><br />
                <input type="text" id="cardHolderName" name="cardHolderName" placeholder='  Full name on card' required />
              </div>
              <div style={{marginTop:'1rem'}}>
            <label for="country-select">Country or Region:</label><br/>
          <select id="country-select" name="country">
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>


          </select>
          </div>
          <div style={{marginTop:'1rem'}}>
            <SecureCheckout/>
          </div>
            </div>
          )}
          {paymentMethod === 'paypal' && (
            <div style={{ marginTop: '1rem' }}>
              <div>
                <label htmlFor="paypalName">PayPal Account Name:</label><br />
                <input type="text" id="paypalName" name="paypalName" />
              </div>
            </div>
          )}
          
          <button type="submit" className='paybutton'>Pay</button>
        </div>
      </div>
    </form>
  );
}

export default PaymentForm;
