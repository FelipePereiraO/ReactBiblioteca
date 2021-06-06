import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import Livros from './components/Livros'
import AddLivros from './components/AddLivros'
import Livro from './components/Livro';
import AlterLivro from './components/AlterLivro'


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Biblioteca</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/" >Inicio</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/livros" >Livros</Link>
              <a href="#" ></a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cadastrar" >Cadastro</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/livros" component={Livros}/>
        <Route exact path="/cadastrar" component={AddLivros}/>
        <Route exact path="/livro/:id" component={Livro} />
        <Route exact path="/alterar/:id" component={AlterLivro} />
      </Switch>
    </div>
  );
}

export default App;
