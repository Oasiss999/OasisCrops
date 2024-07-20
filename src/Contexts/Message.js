import React, { createContext, useState } from 'react';

export const MessageContext= createContext({ Date: 'Initial Date', Time: 'Initial Time', Message: 'Initial Message',bot:false });


export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState({ Date: 'Initial Date', Time: 'Initial Time', Message: 'Initial Message',bot:false });
    
    const updateMessage = (newDate, newTime, newMessage) => {
        setMessage({ Date: newDate, Time: newTime, Message: newMessage });
    };
    
    const createMessage = (Date, Time, Message) => {
        const newMessage = { Date, Time, Message };
        setMessage(newMessage); 
        return newMessage; 
    }
    
    
    
    return (
        <MessageContext.Provider value={{ message, updateMessage,createMessage }}>
        {children}
        </MessageContext.Provider>
    );
    }
