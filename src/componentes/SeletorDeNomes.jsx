const SeletorDeNomes = ({ opções }) => {
  return (
    <select>
      {opções.map((nome) => (
        <option key={nome} value={nome}>
          {nome}
        </option>
      ))}
    </select>
  );
};

export default SeletorDeNomes;
