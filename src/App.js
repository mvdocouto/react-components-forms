import React, { Component } from 'react';

import InputText from './components/form/InputText'
import Checkbox from './components/form/Checkbox'
import RadioButton from './components/form/RadioButtom'
import Select from './components/form/Select'


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
    this.setState({ projeto: event.target.value});
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
          <Checkbox name="linguagens[]" 
            onChange={this.onLangChange}
            value="python"
            checked={this.state.linguagens.python}
            label="Python (Django - Flask)"/>

          <Checkbox name="linguagens[]" 
            onChange={this.onLangChange}
            value="nodejs"
            checked={this.state.linguagens.nodejs}
            label="Node.js"/>

          <Checkbox name="linguagens[]" 
            onChange={this.onLangChange}
            value="php"
            checked={this.state.linguagens.php}
            label="PHP (Synfony)"/>

          <label>Deploy:</label><br/>
           <RadioButton name="deploy" 
            onChange={this.onDeployChange}
            value="prod"
            checked={this.state.deploy === "prod"}
            label="Produção"/>

          <RadioButton name="deploy" 
            onChange={this.onDeployChange}
            value="stg"
            checked={this.state.deploy === "stg"}
            label="Stage"/>

          <Select
            onChange={this.onServerChange}
            name="server"
            label="Servidor"/> 
          
          <button type="submit">Processar</button>
        </form>
      </div>
    );
  }
}

export default App;
