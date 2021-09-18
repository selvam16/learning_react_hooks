import React, { useState } from 'react'
import MouseMove from './MouseMove'
// import MouseMoveClass from './MouseMoveClass';
// class ErrorComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hasError: false,
//         };
//     }

//     static getDerivedStateFromError(error) { // Rarely Used
//         return { hasError: true };
//     }

//     componentDidCatch(error, errorInfo) {
//         console.log(error)
//         console.log(errorInfo)
//     }

//     render() {
//         const {
//             state: { hasError },
//         } = this;
//         if (hasError) {
//             return <div>Component has some error</div>
//         }
//         return this.props.children
//     }
// }

// export default class MouseMoveContainer extends Component {
//     render() {
//         return (
//             <>
//                 <ErrorComponent><MouseMoveClass /></ErrorComponent>
//             </>
//         )
//     }
// }


export function MouseMoveContainer(props) {

    const [display, setDisplay] = useState(true)

    return (
        <>
            <button onClick={() => setDisplay(!display)}>Toggle Me</button>
            {display && <MouseMove />}
        </>
    )
}
