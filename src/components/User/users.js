import { findIndex, filter } from 'lodash';
import React, { useReducer } from 'react';
import data from './data.json';

const initialState = data;

const reduce = (state = initialState, action) => {
    const {
        type,
        value
    } = action;
    let newState = [...state]

    let currentUserIndex = null;

    switch (type) {
        case 'add':
            return [...newState, value]
        case "edit":
            currentUserIndex = findIndex(newState, { id: value.id });
            newState[currentUserIndex] = { ...newState[currentUserIndex], ...value }
            return newState;
        case 'delete':
            let currentUser = filter(newState, state => state.id !== value.id);
            //newState = newState.splice(currentUserIndex, 1)
            return currentUser;
        default:
            return state;

    }
}

export default function Users() {
    const [userData, dispatchAction] = useReducer(reduce, initialState);

    const handleEdit = (id) => {
        window.location.href = `/${id}`
    };

    const handleDelete = id => {
        window.confirm('Are you sure', () => {
            alert('hi')
        })
    };
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td> DOB</td>
                        <td>Designation</td>
                        <td>Experience</td>
                        <td>Acion</td>
                    </tr>
                </thead>
                <tbody>
                    {userData &&
                        userData.map((user, i) => (
                            <tr>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.dob}</td>
                                <td>{user.designation}</td>
                                <td>{user.experience}</td>
                                <td>
                                    <button onClick={() => dispatchAction({ type: 'add', value: { id: Math.floor(Math.random() * 100), firstname: 'firstname' } })}>Add</button>
                                    <button onClick={() => dispatchAction({ type: 'edit', value: { id: user.id, firstname: 'firstname' } })}>Edit</button>
                                    <button onClick={() => (window.confirm('Are you sure')) ? dispatchAction({ type: 'delete', value: { id: user.id } }) : ''}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}