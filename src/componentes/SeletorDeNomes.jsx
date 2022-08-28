const SeletorDeNomes = ({ opções, setNomeSelecionado }) => {
  return (
    <select onChange={(e) => setNomeSelecionado(e.target.value)}>
      <option value="">Selecionar</option>
      {opções.map((nome) => (
        <option key={nome} value={nome}>
          {nome}
        </option>
      ))}
    </select>
  );
};

export default SeletorDeNomes;
