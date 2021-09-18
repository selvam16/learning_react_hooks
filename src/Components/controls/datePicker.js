import React from 'react'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
const DatePicker = props => {
    const {label,name,value, onChange} = props;
    const convertToDefEventProps = (name, value) => ({
        target:{
            name,value
        }
    })
    return(
        <MuiPickersUtilsProvider
        utils={DateFnsUtils}>
<KeyboardDatePicker 
disableToolbar
 variant='inline'
 inputVariant='outlined'
 label={label}
 name={name}
 value={value}
 format='MMM/dd/yyyy'
 onChange={date=>onChange(convertToDefEventProps(name, date ))} />
        </MuiPickersUtilsProvider>
    )

}

export default DatePicker;