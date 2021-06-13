import React from "react";
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import Clientes from './components/Clientes'
import AddClientes from './components/AddClientes'
import Cliente from './components/Cliente';
import AlterClientes from './components/AlterClientes'


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
            <li class="nav-item">
              <Link class="nav-link" to="/cadastrarclientes" >Cadastro</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/clientes" >Clientes</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/clientes" component={Clientes}/>
        <Route exact path="/cadastrarclientes" component={AddClientes}/>
        <Route exact path="/cliente/:id" component={Cliente} />
        <Route exact path="/alterarcliente/:id" component={AlterClientes} />
      </Switch>
    </div>
  );
}

export default App;
