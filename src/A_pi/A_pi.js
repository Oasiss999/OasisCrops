
import './a_pi.css';
import React, { useState,useContext } from 'react';
import piW from '../Images/piwpic.webp'
import '../Contexts/CurrentPI.js'
import { PiContext } from '../Contexts/PIArray.js';

const A_pi = ({node}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [piNum, setpiNum] = useState(0);
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

    return (
        <div className={`border ${isClicked ? 'border-clicked' : ''}`} onClick={handleClick}>
            <div className="background3">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                    <div className={`status-circle ${isActive ? 'active' : 'inactive'}`}></div>
                    <p> PI {piNum}</p>
                </div>
                <div className='imageContainer'>
                    <img src={piW} alt="pi" className="piW" />
                </div>
            </div>
        </div>
    )
}

export default A_pi;