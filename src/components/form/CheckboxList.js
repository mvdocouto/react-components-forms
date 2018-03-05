import React from 'react'
import Checkbox from './Checkbox'

const CheckboxList = (props) => {

    /*
      Elementos multiplos necessitam de um id unico.
      https://reactjs.org/docs/lists-and-keys.html#keys
    */

    const checkboxes = props.options.map(options => {
        return (
            <Checkbox
            key={options.id}
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