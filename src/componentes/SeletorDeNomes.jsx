//https://pt-br.reactjs.org/docs/forms.html

const SeletorDeNomes = () => {
  return (
    <select>
      <option value="laranja">Laranja</option>
      <option value="limao">Limão</option>
      <option selected value="coco">
        Coco
      </option>
      <option value="manga">Manga</option>
    </select>
  );
};

export default SeletorDeNomes
