
import React from 'react'
import { FormLabel, FormControl, FormControlLabel, Radio, RadioGroup as MUIRadioGroup } from '@material-ui/core'

const RadioGroup = (props) => {

    const {name,value, onChange, items} = props;

    return(           
        <FormControl>
        <FormLabel>Gender</FormLabel>
        <MUIRadioGroup row
            name={name}
            value={value}
            onChange={onChange}
        >
            {
                items.map(item=><FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />)
            }
             </MUIRadioGroup>
    </FormControl>
    )
}

export default RadioGroup;