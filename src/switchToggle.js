import React, { useState } from 'react';
import './toggleSliderStyling.css'

const SwitchToggle = ({onHandleUnitSwitch}) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    if(checked){
        onHandleUnitSwitch('metric')
    }
    else{
        onHandleUnitSwitch('imperial')
    }
  };

  return (
    <div className="toggleSlider">
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="slider" />
    </div>
  );
};

export default SwitchToggle;