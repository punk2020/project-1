import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello world', likesCount: 11 },
                { id: 2, message: 'It`s my firs post', likesCount: 0 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store