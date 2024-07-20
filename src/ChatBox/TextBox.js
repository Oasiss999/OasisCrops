import './Messages.scss';
import {useState,useContext} from 'react';
import { MessagesContext } from '../Contexts/Messages';
import { MessageContext } from '../Contexts/Message';

const TextBox = () => {
    const [message, setMessage] = useState('');
    const { AddMessage } = useContext(MessagesContext);
    const { createMessage } = useContext(MessageContext);
    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleClick = () => {
        let newMessage = createMessage(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), message, false);
        AddMessage(newMessage);
        setMessage('');
    }

    return (
    
        <div className="TextBoxContainer">
            <input className="textBox" type="text" placeholder="Type a message" value={message} onChange={handleChange} />

            <button className ="sendButton" onClick={handleClick}>Send</button>
        </div>
    );
    }

export default TextBox;