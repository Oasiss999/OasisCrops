
import './a_pi.css';
import React, { useState,useContext,useEffect } from 'react';
import piW from '../Images/piwpic.webp'
import '../Contexts/CurrentPI.js'
import { PiContext } from '../Contexts/PIArray.js';

const A_pi = ({node}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [piName, setpiNum] = useState(node.name);
    const [isActive, setActive] = useState(true);
    const [piIP, setpiIP] = useState(node.ipAddress);
    const { returnNodeWithIP,updateCurrentPINode } = useContext( PiContext);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200); // Reset after 200ms
        console.log('A Pi clicked!');

        const _pi = returnNodeWithIP(piIP);
        console.log(_pi.ipAddress);
        updateCurrentPINode(_pi);
        
        

    };

    useEffect(() => {
        const TestConnection = async () => { 
            try {
                const response = await fetch(`http://${piIP}:5001/Ping`);
                const data = await response.json();
                
                setActive(true);
            } catch (error) {
                setActive(false);
                
            }
        }
    
        const intervalId = setInterval(TestConnection, 1000); // Update temperature every 5 seconds
    
        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div className={`border ${isClicked ? 'border-clicked' : ''}`} onClick={handleClick}>
            <div className="background3">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                    <div className={`status-circle ${isActive ? 'active' : 'inactive'}`}></div>
                    <p>{piName}</p>
                </div>
                <div className='imageContainer'>
                    <img src={piW} alt="pi" className="piW" />
                </div>
            </div>
        </div>
    )
}

export default A_pi;