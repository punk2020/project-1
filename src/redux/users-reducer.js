const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS';

let initialState = {
    // users: [
    //     { id: 1, follow: true, fullName: 'Vlad', status: 'I love lemonade', location: { city: 'Minks', counrty: 'Belarus' } },
    //     { id: 2, follow: true, fullName: 'NeVlad', status: 'I very love lemonade', location: { city: 'Atlantida', counrty: 'Pacific Ocean' } },
    //     { id: 3, follow: false, fullName: 'VeryVlad', status: 'I dot`t love lemonade', location: { city: 'Kiev', counrty: 'Ukraine' } },
    //     { id: 4, follow: false, fullName: 'Vladick', status: 'I love lemonade', location: { city: 'Vangers', counrty: 'BebeyChannel' } },
    // ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.UserId) {
                        return { ...u, follow: true }
                    }
                })

            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.UserId) {
                        return { ...u, follow: false }
                    }
                })

            }
        }
        case SET_USERS: {
            return {...state ,users: [...state.users , ...action.users]}
        }
        default: return state;
    }
}

export const followAC = (UserId) => {
    return {
        type: FOLLOW,
        UserId
    }
}

export const unfollowAC = (UserId) => {
    return {
        type: UNFOLLOW,
        UserId
    }
}

export const setUsersAC = () => {
    return {
        type: SET_USERS
    }
}

export default usersReducer;