export default function SeuNome({ setNome }) {
  return (
    <>
      <div>
        <p> Digite o seu nme:</p>
        <input
          type="text"
          placeholder="Qual eh o seu nome?"
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
    </>
  );
}
