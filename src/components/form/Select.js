import React from 'react'


const Select = (props) => {

   /*
      Elementos multiplos necessitam de um id unico.
      https://reactjs.org/docs/lists-and-keys.html#keys
    */

  const choices = props.options.map(options => {
    return (
      <option key={options.id} value={options.value}>{options.label}</option>
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