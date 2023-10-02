import React from 'react';
import './main.css'; // Importe seu arquivo CSS aqui

class Main extends React.Component {
  toggleSidebar() {
    // Implemente a lógica para alternar a barra lateral aqui
    // Lembre-se de que em React, você geralmente atualiza o estado para fazer alterações na renderização.
  }

  render() {
    return (
      <div>
        <header className="header">
          <div>
            <img className="headerIcon" src="imagens/2730324_colour_feather_harry_potter_quill_icon 1.png" alt="Ícone do cabeçalho" />
          </div>
          <h1 className="bannerEscrita">Biblioteca Hogwarts</h1>
          <div className="sidebar" id="sidebar">
            <div className="toggle-btn" onClick={this.toggleSidebar}>
              <img src="imagens/134216_menu_lines_hamburger_icon - Copia 1.png" alt="Abrir/Fechar" />
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
              <img className="cadastroIcon" src="imagens/2730119_harry_hat_outline_potter_sorting_icon 1.png" alt="Ícone de cadastro" />
              <button className="cadastroButton">Cadastrar</button>
            </div>
            <div className="retirar">
              <img className="retirarIcon" src="imagens/2730146_harry_outline_potter_time_turner_icon 1.png" alt="Ícone de retirar" />
              <button className="retirarButton">Retirar ou Devolver</button>
            </div>
            <div className="cadastrar">
              <img className="cadastrarIcon" src="imagens/2730145_ball_crystal_harry_outline_potter_icon 1.png" alt="Ícone de cadastrar" />
              <button className="cadastrarButton">Cadastrar</button>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer">
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
