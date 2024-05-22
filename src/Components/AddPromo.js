import React, { useState } from 'react';

function AddPromo() {
  const [promoCode, setPromoCode] = useState('');
  const [showInput, setShowInput] = useState(false);

  const showPromoInput = () => {
    setShowInput(true);
  };

  const applyPromo = () => {
    // Implement your logic here to apply the promo code
    alert('Promo code applied: ' + promoCode);
    // Here you can make an AJAX call to validate the promo code and apply any discounts
  };

  return (
    <div>
      <button onClick={showPromoInput}>Add Promo Code</button>
      {showInput && (
        <div>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="promo-input"
          />
          <button onClick={applyPromo} className="apply-btn">
            Apply
          </button>
        </div>
      )}
    </div>
  );
}

export default AddPromo;
