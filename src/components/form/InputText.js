import React from 'react'


const InputText = (props) => {
    return (
        <div>
            <label for={props.name}>{props.label}</label>
            <input type="text" 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange}
            />
        </div>
    );
}

export default InputText;