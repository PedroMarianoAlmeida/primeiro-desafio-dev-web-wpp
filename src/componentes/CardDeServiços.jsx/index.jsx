import Card from "./Card";

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

  const serviçosEspeciais = informaçõesRelevantesDosServiço?.filter(
    (serviço) => serviço.éEspecial
  );

  return (
    <>
      {nomeSelecionado ? (
        <>
          <h2>Serviços Especiais</h2>
          {serviçosEspeciais.map((serviço) => (
            <Card
              key={serviço.nome}
              nome={serviço.nome}
              valor={serviço.valor}
            />
          ))}

          <h2>Todos os Serviços</h2>
          {informaçõesRelevantesDosServiço.map((serviço) => (
            <Card
              key={serviço.nome}
              nome={serviço.nome}
              valor={serviço.valor}
            />
          ))}
        </>
      ) : (
        <p>↑ Escolher profissional na caixa acima ↑</p>
      )}
    </>
  );
};

export default CardDeServiços;
