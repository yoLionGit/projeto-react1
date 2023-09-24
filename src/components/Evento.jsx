export default function ({ numero }) {
  function meuEvento() {
    console.log(`Evento ativado! ${numero}`);
  }
  return (
    <>
      <div>
        <p>Clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
      </div>
    </>
  );
}
