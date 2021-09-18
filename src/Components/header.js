import React, {useContext} from "react";
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles, Typography } from '@material-ui/core';
import { Message, Notifications, ExitToApp, Search, Menu } from '@material-ui/icons';
import { UserContext } from "../App/App";
const styles = makeStyles(theme =>({
   root: {
      backgroundColor: '#fff',
   },
   searchInput: {
      opacity: '0.6',
      padding: `0px ${theme.spacing(1)}px`,
      fontSize: '0.8rem',
      '&:hover':{
         backgroundColor: '#f2f2f2'
      },
      '& .MuiSvgIcon-root':{
         marginRight: theme.spacing(1)
      }
   },
   userName: {
      color: 'black'
   }
}))
const Header = () => {
   const classes = styles();
   const {
       user,
       userDispatch,
   } = useContext(UserContext);

   return <AppBar position='static' className={classes.root}>
      <Toolbar>
         <Grid container alignItems='center'>
            <Grid item>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={()=>userDispatch({type: 'OpenDrawer'})}
            className={classes.menuButton}
          >
            <Menu fontSize='small' color='primary' />
          </IconButton>
            </Grid>
            <Grid item>
               <InputBase 
               className={classes.searchInput}
               placeholder='test' startAdornment={<Search fontSize='small' />} />
            </Grid>
            <Grid item sm></Grid>
            <Grid item >
               <IconButton>

                  <Badge badgeContent={4} color="primary">
                     <Message  fontSize='small'/>
                  </Badge>
               </IconButton>
               <IconButton> <Badge badgeContent={4} color="secondary">
                  <Notifications fontSize='small' />
               </Badge></IconButton>
               <IconButton>
                  <ExitToApp fontSize='small' />
               </IconButton>
            </Grid>
            <Grid item >
               <Typography className={classes.userName}>{user.firstName} {user.lastName}</Typography>
            </Grid>

         </Grid>
      </Toolbar>
   </AppBar>
}

export default Header