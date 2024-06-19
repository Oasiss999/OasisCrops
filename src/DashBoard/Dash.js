import {React,useState} from 'react';
import Header from './Header';
import './Dash.css';
import A_pi from '../A_pi/A_pi';
import Temp from '../AGraph/TempDisplay';
import Moist from '../AGraph/MoistureDisplay';
import TempGraph from '../AGraph/TempGraph';
import MoistGraph from '../AGraph/MoistureGraph';
import { useNavigate } from 'react-router-dom';


const Dash = () => {

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

                        <A_pi />
                        <A_pi />
                        <A_pi />
                        <A_pi />
                        
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
                
       
            </div>
            
       
    );
};

export default Dash;
