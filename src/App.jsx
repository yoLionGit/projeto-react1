import './App.css';

import Pessoa from './components/Pessoa';

function App() {
  const img = 'https://neofeed.com.br/wp-content/uploads/2019/10/ia-1.jpg';
  const nome1 = 'props';

  return (
    <div className="App">
      <Pessoa
        nome="Exemplo1"
        idade="99"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <img src={img} alt="Imagem 1" />
    </div>
  );
}

export default App;
