
import './a_pi.css';
import React, { useState } from 'react';
import piW from '../Images/piwpic.webp'

const A_pi = () => {
    const [piNum, setpiNum] = useState(0);
    const [isActive, setActive] = useState(true);

    return (
       

        <div className="border">
        <div className="background3">
        <div className={`status-circle ${isActive ? 'active' : 'inactive'}`}></div>
            <p> PI {piNum}</p>
            <div className='imageContainer'>
            <img src={piW} alt="pi" className="piW" />
            </div>
        </div>
        </div>
    )
}

export default A_pi;