import React from 'react';
import { updateNewMessagetTextActionCreator, addMessageActionACreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

let dialogsPage = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionACreator())
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessagetTextActionCreator(text));
    }


    return (
        <div><Dialogs
            addMessage={addMessage}
            updateNewMessagetText = {onMessageChange}
            dialogsPage = {dialogsPage}
        /></div>
    );
}

export default DialogsContainer;