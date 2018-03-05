import React from 'react'


const RadioButton = (props) => {
    return (
        <div>
            <input type="radio" 
                id={props.value}
                name={props.name}  
                onChange={props.onChange}
                value={props.value} 
                checked={props.checked}
            />
            <label>{props.label}</label>
        </div>
    );
}

export default RadioButton;