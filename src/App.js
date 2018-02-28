import React, { Component } from 'react';

import InputText from './components/form/InputText'
import checkbox from './components/form/Checkbox'
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
    this.setState({ nome: event.target.value});
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
          
          <label>Projeto:</label><br/>
          <input type="text" name="projeto" 
            value={this.state.nome} 
            onChange={this.onNameChange}/>
          
          <br/>
          
          <label>Linguagens do projeto:</label><br/>
          <input type="checkbox" name="linguagens[]"  onChange={this.onLangChange} value="python" checked={this.state.linguagens.python} />Python (Django - Flask) <br/>
          <input type="checkbox" name="linguagens[]"  onChange={this.onLangChange} value="nodejs" checked={this.state.linguagens.nodejs}/>Node.js (Express)<br/>
          <input type="checkbox" name="linguagens[]"  onChange={this.onLangChange} value="php" checked={this.state.linguagens.php}/>PHP (Synfony) <br/>
          
          <label>Deploy:</label><br/>
          <input type="radio" name="deploy" value="prod" onChange={this.onDeployChange} checked={this.state.deploy === "prod"} />Produção <br/>
          <input type="radio" name="deploy" value="stg" onChange={this.onDeployChange} checked={this.state.deploy === "stg"} />Stage <br/>
          
          <label>Servidor:</label><br/>
          <select name="server" value={this.state.server} onChange={this.onServerChange}>
            <option valeu=""></option>
            <option valeu="server_1">Server 1</option>
            <option valeu="server_2">Server 2</option>
          </select><br/>
          
          <button type="submit">Processar</button>
        </form>
      </div>
    );
  }
}

export default App;
