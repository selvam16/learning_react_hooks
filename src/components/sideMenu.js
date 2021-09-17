import React, { useContext } from 'react';
import { Drawer, makeStyles, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { camelCase } from 'lodash';
import { UserContext } from "../App/App";
const styles = makeStyles({
    NavLink: {
        color: 'black',
        textDecoration: 'none',
    },
    listItem: {
        padding: '2px',
    },
    listItemText: {
        margin: '2px',
    },
})

const SideMenu = () => {
    const classes = styles()
    const {
        user,
        userDispatch,
    } = useContext(UserContext);
    const Menus = [
        'User GRUD',
        'User Form',
        'Mouse Move Event',
        'Hooks Interval',
        'Hooks Counter',
        'Hooks API Call',
        'Hooks Reducer',
        'Hooks User Reducer',
        'Hooks User Reducer API',
        'Hooks Callback'
    ]

    return <Drawer
        open={user.isDrawerOpen}
        onClose={() => userDispatch({ type: 'CloseDrawer' })}
        variant="permanent"
        style={{ background: 'blue' }}
    >
        <NavLink exact to='/' activeClassName='is-active' className={classes.NavLink}>
            <List>
                <ListItem button key='Home' className={classes.listItem}>
                    <ListItemText primary='Home' className={classes.listItemText} />
                </ListItem>
            </List>
        </NavLink>
        {
            Menus.map(menu =>
                <span key={menu.toString()}>
                    <Divider />
                    <NavLink activeClassName='is-active' to={`/${camelCase(menu)}`} className={classes.NavLink}>
                        <List selected>
                            <ListItem button key={menu} className={classes.listItem}>
                                <ListItemText primary={menu} className={classes.listItemText} />
                            </ListItem>
                        </List>
                    </NavLink>
                </span>
            )
        }

    </Drawer>
}

export default SideMenu;