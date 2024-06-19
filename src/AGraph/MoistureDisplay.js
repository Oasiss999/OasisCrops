import './Displays.css';
import React, { useState } from 'react';

const Moist = () => {
    const moisture = 'NA'; // Replace with actual temperature
    const infoText = "This is the current temperature."; // Replace with actual information text
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        console.log('Info button clicked');
    };

    return (
        <div className='graphContainer'>
            <div className='graphBackground'>
            <p>Current temperature </p>
                <div className='circle'>
                    {`${moisture} 💧 `}
                </div>
                <button 
                    className='infoButton' 
                    onMouseEnter={() => setShowTooltip(true)} 
                    onMouseLeave={() => setShowTooltip(false)}
                    onClick={handleClick}
                >
                    ℹ️
                    {showTooltip && <div className='tooltip'>{infoText}</div>}
                </button>
            </div>
        </div>
    );
}

export default Moist;