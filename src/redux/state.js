let RenderEntireTree = () =>{
}

export const subscribe = (observer) =>{
    RenderEntireTree = observer;
}

let state = {
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
}

export let addMessage = () => {
    let NewMessage = {
        id: 5,
        msg: state.dialogsPage.NewMessageText
    }
    state.dialogsPage.messages.push(NewMessage);
    state.dialogsPage.NewMessageText = '';
    RenderEntireTree(state);
}
export let updateNewMessageText = (NewMessage) =>{
    state.dialogsPage.NewMessageText = NewMessage;
    RenderEntireTree(state);
}

export let addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
state.profilePage.posts.push(newPost);
state.profilePage.newPostText = '';
RenderEntireTree(state);
};

export let updateNewPostText = (NewText) =>{
state.profilePage.newPostText = NewText;
RenderEntireTree(state);
};

export default state;