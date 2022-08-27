import "./App.css";
import data from "./data";

function App() {
  //console.log(data);

  const nomes = data.map((dado) => dado.dados.nome);
  console.log(nomes);

  return (
    <div>
      <h1>1º Desafio Técnico</h1>
    </div>
  );
}

export default App;
