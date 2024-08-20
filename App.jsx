import React, {Component} from "react";
import Biscoito from "./assets/biscoito-sorte.png"
import './style.css'


class App extends Component{


  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = [  "A vida é feita de escolhas; faça as suas com sabedoria.",
      "O sucesso vem para aqueles que estão dispostos a trabalhar por ele.",
      "Um novo desafio traz grandes oportunidades.",
      "A felicidade está nas pequenas coisas; aproveite cada momento.",
      "O amor está mais perto do que você imagina.",
      "Sua determinação é a chave para alcançar seus sonhos.",
      "Surpresas agradáveis estão a caminho.",
      "O conhecimento é o tesouro mais valioso que você pode adquirir.",
      "Confie em si mesmo e você conquistará o impossível.",
      "O futuro reserva grandes alegrias para você." ];
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length); 
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state)
  }

  render(){
    return(
            <div className="container">
                    <img src={Biscoito} alt="biscoito" className="img" />
                    <Botao className="botao" name="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                    <h3 className="frase"> {'"' + this.state.textoFrase + '"'}</h3>
            </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.name}</button>
      </div>
    )
  }
}
  export default App;