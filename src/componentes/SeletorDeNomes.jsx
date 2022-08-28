const SeletorDeNomes = ({ opções, setNomeSelecionado }) => {
  return (
    <div>
      <label>Nome do Profissional: </label>
      <select onChange={(e) => setNomeSelecionado(e.target.value)}>
        <option value="">Selecionar</option>
        {opções.map((nome) => (
          <option key={nome} value={nome}>
            {nome}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SeletorDeNomes;
