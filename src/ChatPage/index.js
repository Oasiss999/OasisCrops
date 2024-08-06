import ChatBox from '../ChatBox/ChatBox.js';
import {MessageProvider} from '../Contexts/Message.js';


const ChatPage = () => {


    return(
        <div style ={{background:'white'}}>
        <MessageProvider>
        <ChatBox/>
        </MessageProvider>
        </div>
    )
}

export default ChatPage;