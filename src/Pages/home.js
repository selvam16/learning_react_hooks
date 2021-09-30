import React from 'react'
import { useFetch } from '../Components/CustomCooks/useFetchData'
export default function Home(props) {

    const {
        loading, data, error
    } = useFetch('get', '/customers', {})

    //const [customers, setCustomers] = useState([])

    // useEffect(() => {
    //     axios.get('/customers')
    //         .then(res => setCustomers(res.data))
    //         .catch(err => console.log(err))
    // }, [])
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Getting the customers response from proxy</h1>
            {
                loading && <span>Loading...</span>
            }
            {
                error && <span style={{ color: 'red' }}>{error}</span>
            }
            <ul>
                {
                    data.map(c => <li key={c.name}>{c.name}</li>)
                }
            </ul>
        </div>
    )
}
