import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messages.map(message => <Message msg={message.msg} id={message.id} />);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_item}>
                {dialogElements}
            </div>
            <div>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;