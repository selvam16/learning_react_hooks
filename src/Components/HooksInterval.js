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

// with class component

// import React, { Component } from 'react';

// class CounterClass extends Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//     };
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({
//         counter: this.state.counter + 1,
//       });
//     }, 1000);

//     console.log(this.timer);
//   }

//   componentWillUnmount() {
//     console.log('test here', this.timer)
//     clearInterval(this.timer);
//   }
//   render() {
//     const {
//       state: { counter },
//     } = this;

//     return <span>{counter}</span>;
//   }
// }

// export default CounterClass;

