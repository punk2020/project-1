
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello world', likesCount: 11 },
            { id: 2, message: 'It`s my firs post', likesCount: 0 }
        ],
    },
    dialogsPage: {
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

export default state;