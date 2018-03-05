import React from 'react'


const Select = (props) => {

  const choices = props.options.map(options => {
    return (
      <option valeu={options.value}>{options.label}</option>
   );
});

    return (
        <div>
          <label>{props.label}</label><br/>
          <select 
            name={props.name} 
            onChange={props.onChange}>
            {choices}
          </select>
        </div>
    );
}

export default Select;