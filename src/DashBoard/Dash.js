import {React,useState} from 'react';
import Header from './Header';
import './Dash.css';
import A_pi from '../A_pi/A_pi';
import Temp from '../AGraph/TempDisplay';
import Moist from '../AGraph/MoistureDisplay';
import TempGraph from '../AGraph/TempGraph';
import MoistGraph from '../AGraph/MoistureGraph';
import { useNavigate } from 'react-router-dom';
import Monitor from '../Monitor/Monitor';
import PINodeContext from '../Contexts/CurrentPI';
import PI_Tiles_generator from './PI_Tiles_generator/index.js';
const Dash = () => {

    const contextValue = {
        selectedPINode: "Your Value Here",
        updatePINode: () => {},
        getPINode: () => {}
      };

    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    const AddClicked = (e) => {
        setIsClicked(true);
        e.preventDefault(); 
        setTimeout(() => {
            setIsClicked(false); // Reset after 200ms
            
        }, 100);

        setTimeout(()=> {
            navigate('/addpi'); 
    
        },110);

       
    }

    return (
        <div className='Background2'>
            <Header />
            <div style={{marginTop: '150px'}}>
                    <div  className='piContainer'>
                        <div className='piBackground'>
                            <PI_Tiles_generator />
                            <button className={`add-button ${isClicked ? 'add-button-clicked' : ''}`} onClick={AddClicked}>+</button>
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
            <PINodeContext.Provider value={contextValue}>
                <Monitor />
            </PINodeContext.Provider>
       
            </div>
            
       
    );
};

export default Dash;
