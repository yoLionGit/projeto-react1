import { useState } from 'react';

export default function Condicional() {
  const [email, setEmail] = useState('');
  const [userEmail, setUserEmail] = useState('');

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(`Testando`);
  }

  function limparEmail(e) {
    e.preventDefault();
    setUserEmail('');
  }

  return (
    <>
      <div>
        <h2>Cadastre o seu e-mail</h2>
        <form>
          <input
            type="email"
            placeholder="Digise seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={enviarEmail}>
            Enviar e-mail
          </button>
          {userEmail && (
            <div>
              <p>O e-mail do usuario e: {userEmail}</p>
              <button onClick={limparEmail}>Limpar</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
