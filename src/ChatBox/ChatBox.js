import './Messages.scss';
import Messages from './Messages';
import TextBox from './TextBox';
const ChatBox = () => {
    return (
        <div className='chatBoxContainer' >
           <div className='MessagesContainer' >  
                <Messages />
           </div>
           <div style ={{display:'flex',justifyContent:'center',}}>
                <TextBox />
           </div>
        </div>

    )
}

export default ChatBox;