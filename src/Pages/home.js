import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Home(props) {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('/customers')
            .then(res => setCustomers(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <h1>Getting the customers response from proxy</h1>
            <ul>
                {
                    customers.map(c => <li key={c.name}>{c.name}</li>)
                }
            </ul>
        </>
    )
}
