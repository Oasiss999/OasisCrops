import './Messages.scss';
import {useState} from 'react';


const AMessage = ({BOT,message}) => {
   
    console.log(message.bot);
    console.log(message.Message);
    let position = message.bot ? 'flex-start' : 'flex-end';


    return (
        <div className='AMessage' style={{alignSelf:position}} > 
            <h1>{message.Message}</h1>
        </div>
    )

}

export default AMessage;