export default function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas:</h3>
      {itens.lenght > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Nao a itens na lista</p>
      )}
    </>
  );
}
