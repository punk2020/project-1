 import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, unfollowAC, followAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
