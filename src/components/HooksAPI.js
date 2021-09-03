import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { ChannelContext } from '../index'
import {UserContext} from '../App/App';

export default function HooksAPI(props) {
    
    const [data,setData] = useState([]);

    const {user, userDispatch} = useContext(UserContext);
    const channel = useContext(ChannelContext);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {setData(res.data); console.log(res)})
        .catch(err=>console.log(err))
    },[])

    return (
        <>
        <div> name and channel from useContext Hooks {user.firstName} {channel}</div>
        <button onClick={() => userDispatch({ type: 'UpdateFirstName', value: 'Ravi' })}>Update FirstName</button>
            {
                data.map(item=><li key={item.id.toString()}>{item.title}</li>)
            }
        </>
    )
}
