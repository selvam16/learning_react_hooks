import React, { useState, useEffect, useRef } from 'react'

export default function HooksInterval(props) {

    const [tick, setTick] = useState(0);

    const intervalRef = useRef(null);
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        intervalRef.current = setInterval(() => { setTick(prevTick => prevTick + 1) }, 1000);
        return (() => {
            console.log('unmounting')
            clearInterval(intervalRef.current)
        })
    }, [])

    return (
        <>
            <span>{tick}</span>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
            <input type="text" ref={inputRef} />
        </>
    )
}
