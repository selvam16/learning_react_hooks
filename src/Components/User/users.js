import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton, Button, Icon, Grid } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons'
import { capitalize } from 'lodash';
import { FormUserContext } from '../../App/App';
import moment from "moment";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Users() {
    const history = useHistory();
    const {
        userData, userDispatchAction: userAction
    } = useContext(FormUserContext);

    const handleUpdate = (id) => {
        history.push(`/userGrud/${id}`)
    };

    const handleDelete = id => {
        if (window.confirm('Are you sure')) {
            userAction({ type: 'delete', value: id })
        }
    };
    const classes = useStyles();

    console.log(moment(new Date()).format('DD MMM YYYY'))

    return (
        <Grid container>
            <div style={{ width: '100%', textAlign: 'right' }}>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>add</Icon>}
                    onClick={() => handleUpdate(null)}
                >
                    Add User
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>DOB</TableCell>
                            <TableCell>Designation</TableCell>
                            <TableCell>Experience</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((row) => (
                            <TableRow key={capitalize(row.firstName)}>
                                <TableCell component="th" scope="row">
                                    {capitalize(row.firstName)}
                                </TableCell>
                                <TableCell>{capitalize(row.lastName)}</TableCell>
                                <TableCell>{moment(row.dob).format("DD MMM YYYY")}</TableCell>
                                <TableCell>{capitalize(row.designation)}</TableCell>
                                <TableCell>{capitalize(row.experience)}</TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleUpdate(row.id)}>
                                        <Edit fontSize='small' />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(row.id)}>
                                        <Delete fontSize='small' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}