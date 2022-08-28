const CardDeServiços = ({ data, nomeSelecionado }) => {
  const dadosDoSelecionado = data.find(
    (dado) => dado.dados.nome === nomeSelecionado
  );

  const todosOsServiçosDoSelecionado = dadosDoSelecionado?.servicos;
  const informaçõesRelevantesDosServiço = todosOsServiçosDoSelecionado?.map(
    (serviço) => {
      const preçoObjeto = serviço.texts.find((texto) => texto.key === "Preço");
      const éEspecialObjeto = serviço.texts.find(
        (texto) => texto.key === "Serviço Especial"
      );

      return {
        nome: serviço.nome,
        valor: preçoObjeto.value,
        éEspecial: !!éEspecialObjeto,
      };
    }
  );
  console.log(informaçõesRelevantesDosServiço);
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
