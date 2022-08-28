const CardDeServiços = ({ data, nomeSelecionado }) => {
  console.log(data, nomeSelecionado);

  const dadosDoSelecionado = data.find(
    (dado) => dado.dados.nome === nomeSelecionado
  );
  console.log(dadosDoSelecionado);
  return <p>Card de Serviços</p>;
};

export default CardDeServiços;
