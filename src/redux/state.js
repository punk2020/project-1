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
            { id: 2, msg: 'how are u?' }
        ],
        dialogs: [
            { id: 1, name: 'Danon' },
            { id: 2, name: 'Vanon' },
            { id: 3, name: 'Vlad' },
            { id: 4, name: 'Vitalya' }
        ]
    }
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