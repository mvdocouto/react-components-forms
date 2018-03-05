import React from 'react'
import RadioButtom from './RadioButtom'

const RadioButtomList = (props) => {

    /*
      Elementos multiplos necessitam de um id unico.
      https://reactjs.org/docs/lists-and-keys.html#keys
    */

    const radioButtons = props.options.map(options => {
         return (
             <RadioButtom
            key={options.id}
            name={props.name}
            value={options.value}
            label={options.label}
            onChange={props.onChange}
            checked={props.checkedOptions === options.value}
            />
        );
    });

    return (
        <div>
            {radioButtons}
        </div>
    );
}

export default RadioButtomList;