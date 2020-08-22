import React from 'react';

let Users = (props) => {
    return (
        <div>
            {props.Users.map(u => <div key={u.id}>
                <span>
                    <div> <img /></div>
                </span>

                <div>
                    {u.followed ?
                        <button onClick={() => { props.unfollow(u.id) }} >Follow</button> :
                        <button onClick={() => { props.follow(u.id) }} >Unfollow</button>
                    }
                </div>

                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}


export default Users;