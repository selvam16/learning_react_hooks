import React from 'react'
import { useState } from 'react'
import { Grid, TextField, Typography } from '@material-ui/core';
import { useEffect } from 'react';
export default function HooksCounter(props) {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue)
    const [name, setName] = useState({firstName: '', lastName: ''})

    useEffect(()=>{
        document.title = `You have clicked ${count} times`
        console.log('useEffect updating the title')
    },[count])
    
    return (
        <>
        <span>{count}</span>
           <button onClick={()=>setCount(prevState => prevState +1)}>Increment Count</button> 
           <button onClick={()=>setCount(prevState => prevState -1)}>Decrement Count</button> 
           <button onClick={()=>setCount(initialValue)}>Reset Count</button>
           
           <Grid>
               <TextField value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})} />
               <TextField value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})} />
               <Typography>Your Name is {name.firstName} {name.lastName}</Typography>
           </Grid>
        </>
    )
}
