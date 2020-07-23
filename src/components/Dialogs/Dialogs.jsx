import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let NewMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = NewMessage.current.value;
        props.updateNewMessagetText(text);
    }


    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message msg={message.msg} id={message.id} />);

    return (
        <div className={c.dialogs}>
            <div className={c.Names}>
                {dialogElements}
            </div>
            <div className={c.dialogs_item}>
                {messagesElements}
                <textarea
                    className={c.textArea}
                    ref={NewMessage}
                    onChange={onMessageChange}
                    value={state.NewMessageText}
                    placeholder='Enter ur message samurai' />
                <div />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;