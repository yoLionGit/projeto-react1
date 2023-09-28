import { useState } from 'react';

export default function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuario ${name} foi cadastrado com a senha: ${senha}`);
    console.log('Cadastrou Usuario!');
  }

  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <div>
      <h1> Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
        />
        <div>
          <input type="submit" value="cadastrar" />
        </div>
      </form>
    </div>
  );
}
