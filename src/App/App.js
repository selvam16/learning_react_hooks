
import React, { useReducer } from 'react';
import './App.css';
import Headers from '../Components/header';
import { makeStyles, createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import HomeRouter from '../HomeRouter';
const styles = makeStyles({
  app_main: {
    marginLeft: '200px',
  }
})

const theme = createTheme({
  palette: {
    primary: {
      light: '#3c44b126',
      main: '#333996'
    },
    secondary: {
      light: '#f83245',
      main: '#f832456',
    },
    background: {
      default: '#f4f5fd'
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  }
})

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  isDrawerOpen: false
};

const reduce = (state = initialState, action) => {
  const {
      type, value
  } = action;
  switch(type){
      case 'UpdateFirstName':
          return {
              ...state, firstName: value
          }
      case 'UpdateLastName':            
          return {
              ...state, lastName: value
          }
      case 'UpdateAge':          
      return {
          ...state, age: value
      }
      case 'OpenDrawer':          
      return {
          ...state, isDrawerOpen: true
      }
      case 'CloseDrawer':          
      return {
          ...state, isDrawerOpen: false
      }
      default:
       return state;
  }
}

export const UserContext = React.createContext();
function App() {
  const classes = styles();
  const [user, userDispatch] = useReducer(reduce, initialState)

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{user, userDispatch}}>
      <div className={classes.app_main}>
        <Headers />
        <HomeRouter />
      </div>
      <CssBaseline />

      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
