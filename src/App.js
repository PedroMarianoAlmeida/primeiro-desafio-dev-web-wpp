import "./App.css";
import data from "./data";
import React, { useState } from "react";

import SeletorDeNomes from "./componentes/SeletorDeNomes";
import CardDeServiços from "./componentes/CardDeServiços.jsx";

const nomes = data.map((dado) => dado.dados.nome);

function App() {
  const [nomeSelecionado, setNomeSelecionado] = useState("");
  console.log(nomeSelecionado);

  return (
    <div>
      <h1>1º Desafio Técnico</h1>
      <SeletorDeNomes opções={nomes} setNomeSelecionado={setNomeSelecionado} />
      <CardDeServiços />
    </div>
  );
}

export default App;
