import React, { useState } from 'react';

function SecureCheckout() {
  const [saveInfo, setSaveInfo] = useState(false);

  const handleCheckboxChange = (e) => {
    setSaveInfo(e.target.checked);
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <input
            type="checkbox"
            id="save-info"
            className="checkbox-input"
            checked={saveInfo}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="save-info" className="checkbox-label">
            Securely save my information<br/> for 1-click checkout
          </label>
        </div>
        {saveInfo && (
          <div className="form-group phone-input" id="phone-input">
            
            <select id="country-code" name="country-code">
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input type="text" id="phone" name="phone" placeholder="Phone number" />
          </div>
        )}
      </form>
    </div>
  );
}

export default SecureCheckout;
