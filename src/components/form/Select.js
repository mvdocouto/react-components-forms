import React from 'react'


const RadioButton = (props) => {
    return (
        <div>
          <label for={props.name}>{props.label}</label><br/>
          <select 
            id={props.name}
            name={props.name} 
            onChange={props.onChange}>
            <option valeu=""></option>
            <option value="server_1">Server 1</option>
            <option value="server_2">Server 2</option>
          </select>           
        </div>
    );
}

export default RadioButton;