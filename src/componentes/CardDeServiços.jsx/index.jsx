const CardDeServiços = ({ data, nomeSelecionado }) => {
  console.log(data, nomeSelecionado);

  const dadosDoSelecionado = data.find(
    (dado) => dado.dados.nome === nomeSelecionado
  );
  console.log(dadosDoSelecionado);
  return (
    <>
      {nomeSelecionado ? (
        <p>Card de Serviços</p>
      ) : (
        <p>↑ Escolher profissional na caixa acima ↑</p>
      )}
    </>
  );
};

export default CardDeServiços;
