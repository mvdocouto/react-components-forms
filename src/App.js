import React, { Component } from 'react';

import InputText from './components/form/InputText'
import Select from './components/form/Select'
import CheckboxList from './components/form/CheckboxList'
import RadioButtonList from './components/form/RadioButtomList'
import { languagesOptions, deployOptions, serverOptions } from './constants';


class App extends Component {
  constructor(){
    super();
    this.state ={
      projeto: '',
      linguagens: {
        python: false,
        nodejs: false,
        php: false,
      },
      deploy: 'stg',
      server: ''
    }
  }

  onNameChange = (event) => {
    const { value } = event.target;
    this.setState({ projeto: value});
  }

  onLangChange = (event) => {
    // Pegando o valor que foi marcado
    const { value } = event.target;
    // pegando os status iniciais 
    const { linguagens } = this.state;
    // modificiand o para o novo valor
    const newValue = {[value]: !linguagens[value]};
    // criando um novo objeto com o valor modificado
    const newLang = Object.assign({},linguagens, newValue);
    // const newLang = {...linguagens, newValue};
    // setando os novo estado com os novos valoress
    this.setState({ linguagens: newLang });
    
  }

  onDeployChange = (event) =>{
    console.log(event.target.value)
    const { value } = event.target;
    this.setState({ deploy: value });
  }

  onServerChange = (event) => {
    console.log(event.target.value)
    const { value } = event.target;
    this.setState({ server: value });
  }


  render() {
    return (
      <div>
        <form>
          <h4>Formulário</h4>
                    
          <InputText 
            name="projeto" 
            value={this.state.projeto} 
            onChange={this.onNameChange}
            label="Projeto"/>
          
          <label>Linguagens do projeto:</label><br/>
          <CheckboxList
            name="linguagens[]"
            options = {languagesOptions}
            onChange = {this.onLangChange}
            checkedOptions = {this.state.linguagens}
          />

          <label>Deploy:</label><br/>
          <RadioButtonList
            name="deploy"
            options = {deployOptions}
            onChange = {this.onDeployChange}
            checkedOptions = {this.state.deploy}
          />

          <Select
            onChange={this.onServerChange}
            name="server"
            label="Servidor"
            options={serverOptions}/>
          
          <button type="submit">Processar</button>
        </form>
      </div>
    );
  }
}

export default App;
