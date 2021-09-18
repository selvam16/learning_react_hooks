import React from 'react'

function Count(props) {
    
    console.log('rendering Count Component for ', props.text)

    return (
        <>
            <span>{props.text} - {props.value}</span>
        </>
    )
}

export default React.memo(Count)
