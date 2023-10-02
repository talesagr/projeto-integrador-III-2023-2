import React from 'react';
import { Route, Routes } from 'react-router-dom';

import menu from './assets/134216_menu_lines_hamburger_icon - Copia 1.png';
import headericon from './assets/2730324_colour_feather_harry_potter_quill_icon 1.png';
import cadastrar from './assets/2730119_harry_hat_outline_potter_sorting_icon 1.png';
import consultar from './assets/2730145_ball_crystal_harry_outline_potter_icon 1.png';
import retirar from './assets/2730146_harry_outline_potter_time_turner_icon 1.png';

import Home from './components/Home'
import CadastrosApp from './cadastros/cadastros-app';
import PageNotFound from './main/notfound-app';

class App extends React.Component{
  render() {
    return (
      <div>
        <header className="header">
            <div>
              <img className="headerIcon" src={headericon} alt="Ícone do cabeçalho" />
            </div>
            <h1 className="bannerEscrita">Biblioteca Hogwarts</h1>
            <div className="sidebar" id="sidebar">
              <div className="toggle-btn" onClick={this.toggleSidebar}>
                <img src={menu} alt="Abrir/Fechar" />
              </div>
              <ul className="menuList">
                <div>
                  <li><a className="menuItens" href="#">Cadastrar</a></li>
                </div>
                <li><a className="menuItens" href="#">Retiradas ou Devoluções</a></li>
                <li><a className="menuItens" href="#">Consultas</a></li>
              </ul>
            </div>
          </header>
          <div id="main">
            <div className="divBotões">
            <div className="cadastro">
                <img className="cadastroIcon" src={cadastrar} alt="Ícone de cadastro" />
                <button className="cadastroButton">Cadastrar</button>
              <button className="cadastroButton">Cadastrar</button>
            </div>
            <div className="retirar">
              <img className="retirarIcon" src={retirar} alt="Ícone de retirar" />
              <button className="retirarButton">Retirar ou Devolver</button>
            </div>
            <div className="cadastrar">
              <img className="cadastrarIcon" src={consultar} alt="Ícone de consultar" />
              <button className="cadastrarButton">Consultar</button>
            </div>
          </div>
        </div>
      {/* Outras partes do seu aplicativo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastros" element={<CadastrosApp />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* Defina mais rotas para suas telas */}
      </Routes>
    </div>
    )
  }
}

export default App;