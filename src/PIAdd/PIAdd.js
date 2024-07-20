import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiContext } from '../Contexts/PIArray';
import './PIAdd.css';
import { PiNodeContext } from '../Contexts/PiNode';


const PIAdd = () => {
    const navigate = useNavigate();
    const { addPiNode } = useContext(PiContext);
    const { createPiNode } = useContext(PiNodeContext);
    let newNode = null;
    const [name, setName] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');

    const clickedBack = () => {
        navigate('/dashboard'); 
    };

    const isIPValid = (ip) => {
        const ipRegex = new RegExp('^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$');
        return ipRegex.test(ip);
    }

    const TestConnection = async (ip) => { 
        try {
            const response = await fetch(`http://${ip}:5001/Ping`);
            const data = await response.json();
            console.log('Ping response:', data);
        } catch (error) {
            console.error('Error pinging:', error);
        }
    }

    const handleSubmit = (event) => {
        if (!isIPValid(ipAddress)) {
            alert('Invalid IP Address');
            return;
        }else{
        TestConnection(ipAddress);
        event.preventDefault();
        newNode = createPiNode(name, ipAddress);
        addPiNode(newNode);
        navigate('/dashboard');
        }
        
    };

    return (
        <div className="PIAddBorder">
            <div className="Backk">
                <button className="BackButton" onClick={clickedBack}>Back</button>
            </div>
            <form className="PIAddForm" onSubmit={handleSubmit}>
                <label htmlFor="piName">PI Name:</label>
                <input type="text" id="piName" name="piName" value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="piLocation">PI Location (Long,Late) with comma in between:</label>
                <input type="text" id="piLocation" name="piLocation" value={location} onChange={(e) => setLocation(e.target.value)} />

                <label htmlFor="piType">PI Type:</label>
                <input type="text" id="piType" name="piType" value={type} onChange={(e) => setType(e.target.value)} />

                <label htmlFor="piOwner">PI IP Address:</label>
                <input type="text" id="piOwner" name="piOwner" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} required />

                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default PIAdd;