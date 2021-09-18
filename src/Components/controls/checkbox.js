import React from 'react'
import {FormControl,FormControlLabel, Checkbox as MUICheckbox } from '@material-ui/core'
const Select = props => {
    const {label,name,value, onChange} = props;

    const convertToDefEventProps = (name, value) => ({
        target:{
            name,value
        }
    })
    console.log('From CheckBox', value)
    return(
        <FormControl 
        variant='outlined'>

            <FormControlLabel
            control={
                <MUICheckbox
                name={name}
                color='primary'
                checked={value}
                onChange={e=>onChange(convertToDefEventProps(name,e.target.checked))}
                />
            }
            label={label}
            />

            
        </FormControl>
    )
}

export default Select