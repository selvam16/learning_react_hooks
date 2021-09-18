import React from 'react'
import {
    BrowserRouter as Router
    , Route, Switch
} from "react-router-dom";
import { MouseMoveContainer } from './Components/MouseMoveContainer';
import HooksInterval from './Components/HooksInterval';
import HooksCounter from './Components/HooksCounter';
import HooksAPI from './Components/HooksAPI';
import ReducerHookCounter from './Components/ReducerHookCounter';
import ReducerHookUser from './Components/ReducerHookUser';
import ReducersHooksAPI from './Components/ReducresHooksAPI';
import { ComponentA } from './Components/useCallback/ComponentA';
import SideMenu from './Components/sideMenu';
import Employee from './Pages/employee';
import Users from './Components/User/users'
import UserForm from './Components/User/userForm'

import './App/App.css'
export default function HomeRouter(props) {

    return (
        <>
            <Router>
                <SideMenu />
                <div style={{ padding: '10px', margin: '10px' }}>
                    <Switch >
                        <Route exact path='/'>
                            <div>
                                <span>Text</span>
                            </div>
                        </Route>
                        <Route exact path='/userGrud'>                            
                        <Users />                            
                        </Route>
                        <Route path='/userGrud/:id' component={UserForm} />
                        <Route exact path='/userForm'>
                            <Employee />
                        </Route>
                        <Route exact path='/mouseMoveEvent'>
                            <MouseMoveContainer />
                        </Route>
                        <Route exact path='/hooksInterval'>
                            <HooksInterval />
                        </Route>
                        <Route exact path='/hooksCounter'>
                            <HooksCounter />
                        </Route>
                        <Route exact path='/hooksAPICall'>
                            <HooksAPI />
                        </Route>
                        <Route exact path='/hooksReducer'>
                            <ReducerHookCounter />
                        </Route>
                        <Route exact path='/hooksUserReducer'>
                            <ReducerHookUser />
                        </Route>
                        <Route exact path='/hooksUserReducerAPI'>
                            <ReducersHooksAPI />
                        </Route>
                        <Route exact path='/hooksCallback'>
                            <ComponentA />
                        </Route>
                        <Route>
                            <div>Path Not Found</div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}
