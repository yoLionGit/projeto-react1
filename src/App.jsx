import './app.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import List from './components/list';

function App() {
  const img = 'https://neofeed.com.br/wp-content/uploads/2019/10/ia-1.jpg';
  const nome1 = 'props';

  return (
    <div className="App">
      <h1>Home</h1>
      <Pessoa
        nome="Fernando"
        profissao="Dev"
        idade="26"
        foto="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
      />
      <List />
      <img src={img} alt="Imagem 1" />
    </div>
  );
}

export default App;
