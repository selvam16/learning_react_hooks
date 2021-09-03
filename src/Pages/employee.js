import React from 'react'
import EmployeeForm from './employessForm';

import PageHeader from '../Components/pageHeader';
import { PeopleAltOutlined } from '@material-ui/icons'
import { Paper, makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  app_main: {
    paddingLeft: '220px',
    Width: '100%',
  }
}))
const Employee = () => {
  const classes = styles();
  return (
    <>
      <PageHeader
        title='New Employee'
        subTitle='From with validation'
        icon={<PeopleAltOutlined />}
        className={classes.app_main}
      />
      <Paper
        className={classes.root}>

        <EmployeeForm />
      </Paper>
    </>
  )
}

export default Employee;