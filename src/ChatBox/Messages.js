import './Messages.scss';
import AMessage from './A_Message.js';
import { useState, useContext,useEffect } from 'react';
import { MessagesContext } from '../Contexts/Messages';

const Messages = () => {
    // Step 1: Initialize state with an initial array of messages
    const [messages, setMessages] = useState([]);
    const { returnMessages } = useContext(MessagesContext);
    const { AddMessage } = useContext(MessagesContext);

    useEffect(() => {
        setMessages(returnMessages());
    }, [returnMessages]);



    return (
        <div className='Messages_Background'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                
                {messages.map(message => (
                    <AMessage message={message}/>
                   
                ))}
                </div>
                
           
            
        </div>
    );
}

export default Messages;