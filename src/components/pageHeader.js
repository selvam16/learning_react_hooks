import React from 'react'
import {Paper, Card, Typography, makeStyles} from '@material-ui/core'

const styles = makeStyles(theme=>({
    root: {
        backgroundColor: 'fdfdff'
    },
    pageHeader:{
        display: 'flex',
        padding: theme.spacing(4),
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(2),
        '& .MuiTypography-subtitle2':{
            opacity: '0.6'
        }
    }

}))
const PageHeader = ({title, subTitle, icon}) => {
    const classes=styles()
    return  <Paper elevation={0} square className={classes.root}>
        <div className={classes.pageHeader}>
            
        <Card className={classes.pageIcon}>
            {icon}
            </Card>
            <div className={classes.pageTitle}>

            <Typography 
            variant='h6'
            component='div'
            >
                {title}
            </Typography>
            <Typography 
            variant='subtitle2'
            component='div'
            >
                {subTitle}
            </Typography>
            </div>
            </div>

    </Paper>
}

export default PageHeader;