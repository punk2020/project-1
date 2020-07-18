import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import { updateNewMessagetTextActionCreator, addMessageActionACreator } from '../../redux/state';

const Dialogs = (props) => {

    let NewMessage = React.createRef();

    let addMessage = () => {
        props.dispatch( addMessageActionACreator() )
    }
    let onMessageChange = () => {
        let text = NewMessage.current.value;
        props.dispatch (updateNewMessagetTextActionCreator(text));
    }


    let dialogElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <Message msg={message.msg} id={message.id} />);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_item}>
                {dialogElements}
            </div>
            <div className={c.dialogs_item}>
                {messagesElements}
                <textarea 
                className={c.textArea} 
                ref={NewMessage} 
                onChange={onMessageChange} 
                value={props.state.NewMessageText} 
                placeholder = 'Enter ur message samurai'/>
                <div />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;