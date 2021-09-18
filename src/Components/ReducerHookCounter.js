import React, {useReducer} from 'react'

const initialState = 0;

const reduce = (state, action) => {
    switch(action){
        case 'Increment':
            return state + 1
        case 'Decrement':
            return state -1
        case 'Reset':
            return initialState
        default:
         return state;
    }
}

export default function ReducerHookCounter(props) {
        const [counter, dispatchCounter] = useReducer(reduce, initialState)

    return (
        <>
        <span>{counter}</span>
        <div>
            <button onClick={()=>dispatchCounter('Increment')}>Increment</button>
            <button onClick={()=>dispatchCounter('Decrement')}>Decrement</button>
            <button onClick={()=>dispatchCounter('Reset')}>Reset</button>
            </div>            
        </>
    )
}
