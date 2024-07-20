import React, { createContext, useState } from 'react';
export const MessagesContext= createContext({ Date: 'Initial Date', Time: 'Initial Time', Message: 'Initial Message',bot:false });


export const MessagesProvider = ({ children }) => {

    const [messages, setMessages] = useState([]);
    

    const AddMessage = (newMessage) => {
        setMessages(messages => [...messages, newMessage]); // Use functional update form
    
        const data = {
            message: newMessage.Message
        };
    
        fetch('http://192.168.1.85:5020/chat', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            console.log('Success:', data);
            // Assuming data contains Date, Time, and Message
            const botMessage = { Date: data.Date, Time: data.Time, Message: data.Message, bot: true };
            setMessages(messages => [...messages, botMessage]); // Use functional update form
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };


    const returnMessages = () => {  
        return messages;
    }

    
    return (
        <MessagesContext.Provider value={{ messages, AddMessage,returnMessages }}>
        {children}
        </MessagesContext.Provider>
    );
    }
