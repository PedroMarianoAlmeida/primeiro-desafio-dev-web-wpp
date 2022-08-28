const CardDeServiços = ({ data, nomeSelecionado }) => {
  console.log(data, nomeSelecionado);

  const dadosDoSelecionado = data.find(
    (dado) => dado.dados.nome === nomeSelecionado
  );

  const todosOsServiçosDoSelecionado = dadosDoSelecionado?.servicos;
  const informaçõesRelevantesDosServiço = todosOsServiçosDoSelecionado?.map(
    (serviço) => {
      return {
        nome: serviço.nome,
        valor: "",
        éEspecial: "",
      };
    }
  );
  console.log(todosOsServiçosDoSelecionado);
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
