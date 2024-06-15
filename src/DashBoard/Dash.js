import React from 'react';
import Header from './Header';
import './Dash.css';
import A_pi from '../A_pi/A_pi';
import Temp from '../AGraph/TempDisplay';
import Moist from '../AGraph/MoistureDisplay';
import TempGraph from '../AGraph/TempGraph';
import MoistGraph from '../AGraph/MoistureGraph';
const Dash = () => {
    return (
        <div className='Background2'>
            <Header />
            <div style={{marginTop: '150px'}}>
                    <div  className='piContainer'>
                    <div className='piBackground'>

                        <A_pi />
                        <A_pi />
                        <A_pi />
                        <A_pi />
                        <button className="add-button">+</button>
                    </div>
                    </div>
                <div className='monitorContainer'>
                    <div className='monitorBackground'>

                        
                        <div class='graphContainer1'>
                        <Temp/>  
                        <Moist/> 
                        <TempGraph/>
                        <MoistGraph/>
                        </div>
            

            
                        <div class="lines">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        </div>

                    </div>
                    
                </div>
                
            </div>
            <div style ={{display: 'flex', justifyContent: 'center'}}>
                <div className= 'chatBoxContainer'>
                    <div className='chatBoxBackground'>
                        <p> ChatBox</p>
                    </div>
              
                </div>
            </div>
                
       
            </div>
            
       
    );
};

export default Dash;
