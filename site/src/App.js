import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <PaginaInicial />
  );
}

class PaginaInicial extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div>
          <HeaderInicial />
          {/*<CorpoInicial />
          <FooterInicial />*/}
        </div>
    );
  }
}

class HeaderInicial extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <header>
        <div className='logo'>GagaInsano</div>
        <nav>
          <ul>
            <li>Cursos</li>
            <li>Resultados</li>
            <li>Sobre nós</li>
            <li><button className='acesso'>Acessar</button></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default App;
