
import './a_pi.css';
import React, { useState } from 'react';
import piW from '../Images/piwpic.webp'

const A_pi = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [piNum, setpiNum] = useState(0);
    const [isActive, setActive] = useState(true);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200); // Reset after 200ms
        console.log('Component clicked!');
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