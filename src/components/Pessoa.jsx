function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <div>
      <img className="foto" src={foto} alt={nome} />
      <h4>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
      </h4>
    </div>
  );
}

export default Pessoa;
