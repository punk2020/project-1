import React from 'react';
import c from './Dialogs.module.css';


const Dialogs = (props) => {

    const Message = (props) => {
        return (
            <div className={c.dialog}>{props.msg}</div>
        );
    }

    const DialogItem = (props) => {
        return (
            <div>
                {props.name}
            </div>
        )
    }

    let dialogs = [
        { id: 1, name: 'Danon' },
        { id: 2, name: 'Vanon' },
        { id: 3, name: 'Vlad' },
        { id: 4, name: 'Vitalya' }
    ]


    let messages = [
        { id: 1, msg: 'hello' },
        { id: 2, msg: 'how are u?' }
    ]


    let dialogElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messages.map(message => <Message msg={message.msg} id={message.id} />)

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