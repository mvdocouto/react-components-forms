import React from 'react'
import Checkbox from './Checkbox'

const CheckboxList = (props) => {   
    const checkboxes = props.options.map(options => {
        return (
            <Checkbox 
            name={props.name}
            value={options.value}
            label={options.label}
            onChange={props.onChange}
            checked={props.checkedOptions[options.value]}
            />
        );
    });

    return (
        <div>
            {checkboxes}
        </div>
    );
}

export default CheckboxList;