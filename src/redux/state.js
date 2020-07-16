let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello world', likesCount: 11 },
                { id: 2, message: 'It`s my firs post', likesCount: 0 }
            ],
            newPostText: 'wake the fuck up samurai'
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.NewText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let NewMessage = {
                id: 5,
                msg: this._state.dialogsPage.NewMessageText
            }
            this._state.dialogsPage.messages.push(NewMessage);
            this._state.dialogsPage.NewMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.NewMessageText = action.NewMessage;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store