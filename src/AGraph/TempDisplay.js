import React, { useState, useContext, useEffect} from 'react';
import './Displays.css';
import {PINodeContext} from '../Contexts/PiNode.js';
import {PiContext} from '../Contexts/PIArray.js';

const Temp = () => {
    const { getCurrentPINode } = useContext(PiContext);
    let ip = null;
    let temp = null;
    const [temperature, setTemperature] = useState('N/A');
    const infoText = "This is the current temperature."; // Replace with actual information text
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        // console.log('Info button clicked');
    };

    

    useEffect(() => {
        const updateTemperature = async () => {
            try {
                const _node = await getCurrentPINode(); 
                const ip = _node.ipAddress; 
                // console.log(ip);
                const response = await fetch(`http://${ip}:5001/Temp`);
                const data = await response.json(); 
                const temp = data.temperature; 
                setTemperature(Math.round(temp)); 
                console.log('Temperature:', Math.round(temp));

            } catch (error) { 
                // console.error('Failed to fetch temperature:', error);
                setTemperature('N/A');
            }
        };
    
        const intervalId = setInterval(updateTemperature, 5000); // Update temperature every 5 seconds
    
        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div className='graphContainer'>
            <div className='graphBackground'>
            <p>Current temperature </p>
                <div className='circle'>
                    {`${temperature}° 🌡️`}
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

export default Temp;
