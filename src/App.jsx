import './index.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import List from './components/list';

function App() {
  const img = 'https://neofeed.com.br/wp-content/uploads/2019/10/ia-1.jpg';
  const nome1 = 'props';

  return (
    <div className="App">
      <h1>Home</h1>
      <List />
      <img src={img} alt="Imagem 1" />
    </div>
  );
}

export default App;
