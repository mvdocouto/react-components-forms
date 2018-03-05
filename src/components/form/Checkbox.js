import React from 'react'


const Checkbox = (props) => {
    return (
        <div>
            <input type="checkbox" 
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

export default Checkbox;