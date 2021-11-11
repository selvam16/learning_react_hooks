import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = (method, url, body) => {
    const cancelTokenSource = axios.CancelToken.source();

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const res = await axios({
                    method: method,
                    url: url,
                    body: body,                    
                    cancelToken: cancelTokenSource.token
                })

                const data = await res?.data
                setData(data)
                setLoading(false)
            }
            catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchData()

        return (() => {console.log('un mounting'); cancelTokenSource.cancel()})
    }, [body, cancelTokenSource, method, url])

    return { loading, data, error }
}
