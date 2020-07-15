let store ={
   _state:  {
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
            { id: 3, msg: 'why are u ignoring me?'},
            { id: 4, msg: 'stop it' }
        ],
        NewMessageText: "",
        dialogs: [
            { id: 1, name: 'Danon' },
            { id: 2, name: 'Vanon' },
            { id: 3, name: 'Vlad' },
            { id: 4, name: 'Vitalya' }
        ]
    }
},
getState(){
return this._state;
},
_callSubscriber() {
},
subscribe(observer){
    this._callSubscriber = observer;
},
addMessage(){
    let NewMessage = {
        id: 5,
        msg: this._state.dialogsPage.NewMessageText
    }
    this._state.dialogsPage.messages.push(NewMessage);
    this._state.dialogsPage.NewMessageText = '';
    this._callSubscriber(this._state);
},
updateNewMessageText(NewMessage){
    this._state.dialogsPage.NewMessageText = NewMessage;
    this._callSubscriber(this._state);
},
addPost (){
    debugger;
    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
this._callSubscriber(this._state);
},
updateNewPostText (NewText){
    this._state.profilePage.newPostText = NewText;
    this._callSubscriber(this._state);
    }
}

export default store;
window.store = store