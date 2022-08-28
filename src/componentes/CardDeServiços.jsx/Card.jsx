const Card = ({ nome, valor }) => {
  return (
    <div>
      <h3>{nome}</h3>
      <p>{valor}</p>
    </div>
  );
};

export default Card;
