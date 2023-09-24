import Button from './Button';

export default function Evento({ numero }) {
  function meuEvento() {
    console.log(`Evento ativado!`);
  }

  function segundoEvento() {
    console.log(`Ativando segundo evento!`);
  }

  return (
    <>
      <div>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro Evento" />
        <Button event={segundoEvento} text="Segundo Evento" />
      </div>
    </>
  );
}
