const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Hello world', likesCount: 11 },
        { id: 2, message: 'It`s my firs post', likesCount: 0 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.NewText;
            return state;
        default: return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        NewText: text
    }
}


export default profileReducer;