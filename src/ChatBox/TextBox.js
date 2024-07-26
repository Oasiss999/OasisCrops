import './Messages.scss';
import {useState,useContext,useEffect} from 'react';
import { MessagesContext } from '../Contexts/Messages';
import { MessageContext } from '../Contexts/Message';

const TextBox = () => {
    const [message, setMessage] = useState('');
    const { AddMessage } = useContext(MessagesContext);
    const { createMessage } = useContext(MessageContext);
    const [regCHAT,setregCHAT] = useState(false)
    const [dbCHAT,setdbCHAT]= useState(false)
    
    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSend= () => {
        let newMessage = createMessage(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), message, false);
        if(regCHAT){
            AddMessage(newMessage,false);
            }
        else if(dbCHAT){
            AddMessage(newMessage,true);
        }else{
            console.log("No box clicked")
        }
        setMessage('');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    }

    const clickREG = (event) =>{
        setregCHAT(event.target.checked);
        if(dbCHAT){
        setdbCHAT(!dbCHAT);
        }
    }

    const clickDB = (event) =>{
        setdbCHAT(event.target.checked)
        if(regCHAT){
            setregCHAT(!regCHAT);
        }
    }

    useEffect((event) =>{
        console.log(regCHAT,"     ",dbCHAT)
        
    })
 
    return (
        <div style ={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>   
            <div className="TextBoxContainer">
                <input className="textBox" type="text" placeholder="Type a message" value={message} onChange={handleChange} onKeyDown={handleKeyPress}  />
                <button className ="sendButton" onClick={handleSend}>Send</button>
            </div>
            
            <div className= "checkboxContainer">
               
                    <div className='BoxLabel'>
                        <input className="checkBox" type="checkbox" id="chat" name= "chat" checked={regCHAT} onChange={clickREG}/>
                        <label for="chat" className='labels'>Regular chat</label>
                    </div>
                    <div className='BoxLabel'>
                        <input className="checkBox" type="checkbox" id="DB" name= "DB" value ="DB" checked={dbCHAT} onChange={clickDB}/>
                        <label for="DB" className='labels'>DB Chat Only</label>
                    </div>

               
            </div>
        </div>
    );
    }

export default TextBox;