import './Displays.css';
import React, { useState,useEffect,useContext } from 'react';
import { PiContext } from '../Contexts/PIArray';
import { PiNodeContext } from '../Contexts/PiNode';


const Moist = () => {
    const { addPiNode } = useContext(PiContext);
    const { createPiNode } = useContext(PiNodeContext);
    const { getCurrentPINode } = useContext(PiContext);
    let moist = null;
    let ip = null;

    const [moisture, setMoisture] = useState('N/A');
    const infoText = "This is the current temperature."; // Replace with actual information text
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        // console.log('Info button clicked');
    };

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        const updateMoisture= async () => {
            try {
                const _node = await getCurrentPINode(); 
                const ip = _node.ipAddress; 
                const response = await fetch(`http://${ip}:5001/Moisture`);
                const data = await response.json(); 
                const moist = data.moisture;  
                setMoisture(Math.round(moist)); 
                 

            } catch (error) {
                // console.error('Failed to fetch temperature:', error);
                setMoisture('N/A'); 
            }
        };
    
        const intervalId = setInterval(updateMoisture, 5000); // Update temperature every 5 seconds
    
        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div className='graphContainer'>
            <div className='graphBackground'>
            <p>Current Moisture </p>
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