import "./App.css";
import data from "./data";

import SeletorDeNomes from "./componentes/SeletorDeNomes";


const nomes = data.map((dado) => dado.dados.nome);


function App() {
  return (
    <div>
      <h1>1º Desafio Técnico</h1>
      <SeletorDeNomes opções={nomes}/>
    </div>
  );
}

export default App;
