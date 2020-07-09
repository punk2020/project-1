import { RenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello world', likesCount: 11 },
            { id: 2, message: 'It`s my firs post', likesCount: 0 }
        ],
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

export let addPost = (PostMessage) =>{
    let newPost = {
        id: 5,
        message: PostMessage,
        likesCount: 0
    }
state.profilePage.posts.push(newPost);
RenderEntireTree(state);
};

export default state;