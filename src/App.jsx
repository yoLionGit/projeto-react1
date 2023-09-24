import './index.css';
import OutraLista from './components/outraLista';

function App() {
  const meusItens = ['React', 'Vite'];
  return (
    <div className="App">
      <h1>Renderizacao Condicional</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
