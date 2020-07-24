import React from 'react';
import { updateNewMessagetTextActionCreator, addMessageActionACreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../redux/StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {

                let dialogsPage = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionACreator())
                }
                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessagetTextActionCreator(text));
                }
                return <Dialogs
                    addMessage={addMessage}
                    updateNewMessagetText={onMessageChange}
                    dialogsPage={dialogsPage}
                />
            }
        }</StoreContext.Consumer>
    );
}

export default DialogsContainer;