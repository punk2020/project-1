const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let NewMessage = {
                id: 5,
                msg: state.NewMessageText
            }
            state.messages.push(NewMessage);
            state.NewMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.NewMessageText = action.NewMessage;
            return state;
        default: return state;
    }
}
export const addMessageActionACreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export const updateNewMessagetTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        NewMessage: text
    }
}

export default dialogsReducer;