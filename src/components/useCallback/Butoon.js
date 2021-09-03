import React from 'react'

function Button(props) {
    
    console.log('rendering Button component for', props.children)

    return (
        <>
            <button onClick={props.handleClick}>{props.children}</button>
        </>
    )
}

export default React.memo(Button)
