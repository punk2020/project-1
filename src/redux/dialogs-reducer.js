const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    //Your ad may be here
    messages: [
        { id: 1, msg: 'hello' },
        { id: 2, msg: 'how are u?' },
        { id: 3, msg: 'why are u ignoring me?' },
        { id: 4, msg: 'stop it' }
    ],
    NewMessageText: "",
    dialogs: [
        { id: 1, name: 'Danon' },
        { id: 2, name: 'Vanon' },
        { id: 3, name: 'Vlad' },
        { id: 4, name: 'Vitalya' },
        { id: 5, name: 'VectorCoder' }
    ]
}

export const dialogsReducer = (state = initialState, action) => {
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