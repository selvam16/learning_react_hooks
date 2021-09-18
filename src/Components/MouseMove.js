import React, { useState, useEffect } from 'react'

export default function MouseMove(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getMouseMoveValues = e => {
        setX(e.clientX)
        setY(e.clientY)
        console.log(`mouse move values`)
    }

    useEffect(() => {
        console.log('useEffect hooks called')
        window.addEventListener('mousemove', getMouseMoveValues);

        return(()=>{
            console.log('Component unmount is happening')
            window.removeEventListener('mousemove', getMouseMoveValues);
        })
    }, [])
    return (
        <>
            <span>{x} {y}</span>
        </>
    )
}
