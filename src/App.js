import "./App.css";
import data from "./data";

import SeletorDeNomes from "./componentes/SeletorDeNomes";


const nomes = data.map((dado) => dado.dados.nome);
console.log(nomes);

function App() {
  return (
    <div>
      <h1>1º Desafio Técnico</h1>
      <SeletorDeNomes />
    </div>
  );
}

export default App;
