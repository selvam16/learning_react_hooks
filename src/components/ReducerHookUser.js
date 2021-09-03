import React, { useContext } from 'react'
import { UserContext } from '../App/App';
import HooksAPI from './HooksAPI';
export default function ReducerHookUser(props) {
    const {
        user,
        userDispatch,
    } = useContext(UserContext);

    console.log(user, userDispatch)

    return (
        <>
            <span>Name {user.firstName} {user.lastName}</span>

            <span>Age {user.age}</span>
            <div>
                <button onClick={() => userDispatch({ type: 'UpdateFirstName', value: 'Selvam' })}>Update FirstName</button>
                <button onClick={() => userDispatch({ type: 'UpdateLastName', value: 'Mariappan' })}>Update FirstName</button>
                <button onClick={() => userDispatch({ type: 'UpdateAge', value: '32' })}>Update Age</button>
            </div>
            <>
            <HooksAPI />
            </>
        </>
    )
}
