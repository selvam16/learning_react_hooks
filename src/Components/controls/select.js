import React from 'react'
import { FormControl, InputLabel, Select as MUISelect, MenuItem, FormHelperText } from '@material-ui/core'
const Select = props => {
    const { label, name, value, onChange, options, error = null } = props;

    return (
        <FormControl
        {...(error && {error:true})}
            variant='outlined'>
            <InputLabel>{label}</InputLabel>
            <MUISelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            >
                <MenuItem value=''>None</MenuItem>
                {
                    options.map(option =>
                        <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>
                    )
                }

            </MUISelect>
{
    error && <FormHelperText>{error}</FormHelperText>
}
        </FormControl>
    )
}

export default Select