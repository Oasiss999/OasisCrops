import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const submitRef = useRef(null);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate('/dashboard'); 
    };

    return (
        <div className="page">
        <div className="container">
          <div className="left">
            <div className="signup">Oasis Crops</div>
            <div className="eula">A way to create your own Garden of Eden</div>
          </div>
          <div className="right">
            <svg viewBox="0 0 320 300">
              <defs>
                <linearGradient
                                
                                id="linearGradient"
                                x1="13"
                                y1="193.49992"
                                x2="307"
                                y2="193.49992"
                                gradientUnits="userSpaceOnUse">
                 
                </linearGradient>
              </defs>
              <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
            </svg>
            <div className="signupform" >
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="username" id="username" ref={usernameRef} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref={passwordRef} />
                <input type="submit" id="submit" value="Submit" ref={submitRef} />
                <div style={{display: 'flex',justifyContent:'center', marginTop:'20px'}}>
                <a href="/" className='logintxt'>Back to Login</a> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SignUpForm;