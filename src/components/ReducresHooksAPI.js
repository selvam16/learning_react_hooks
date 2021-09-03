import React, { useEffect, useReducer } from 'react'
import axios from 'axios';

const initialState = {
    loading: true,
    posts: [],
    error: null,
};

const reduce = (state = initialState, action) => {
    const {
        type, payload
    } = action;
    switch (type) {
        case 'Success':
            return {
                ...state, loading: false, posts: payload,
            }
        case 'Error':
            return {
                ...state, loading: false, error: 'NetWork Error',
            }

        default:
            return state;
    }
}

export default function HooksAPI(props) {
    const [dataState, dataDispatch] = useReducer(reduce, initialState);
    const {
        loading,error,posts
    } = dataState;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => dataDispatch({ type: 'Success', payload: res.data }))
            .catch(err => dataDispatch({ type: 'Error' }))
    }, [])

    return (
        <>
            {
                loading && <span>loading</span>
            }
            {
                error && <span>{error}</span>
            }
            {
                posts.map(item => <li key={item.id.toString()}>{item.title}</li>)
            }
        </>
    )
}
