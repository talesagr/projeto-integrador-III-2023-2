import React from 'react';

class CadastrosApp extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div>
            <img className="headerIcon" src="./assets/2730324_colour_feather_harry_potter_quill_icon 1.png" alt="Ícone do cabeçalho" />
          </div>
          <h1 className="bannerEscrita">Biblioteca Hogwarts</h1>
          <div className="sidebar" id="sidebar">
            <div className="toggle-btn" onClick={this.toggleSidebar}>
              <img src="./assets/134216_menu_lines_hamburger_icon - Copia 1.png" alt="Abrir/Fechar" />
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
            <div className="atendente">
              <img className="atendenteIcon" src="./assets/2730132_harry_hedwig_outline_owl_potter_icon - Copia 1.png" alt="Ícone de atendente" />
              <button className="atendenteButton">Atendente</button>
            </div>
            <div className="usuario">
              <img className="usuarioIcon" src="./assets/2730115_glasses_harry_outline_potter_icon - Copia 1.png" alt="Ícone de usuário" />
              <button className="usuarioButton">Usuário</button>
            </div>
            <div className="livro">
              <img className="livroIcon" src="./assets/2730141_harry_map_marauders_outline_potter_icon - Copia 1.png" alt="Ícone de livro" />
              <button className="livroButton">Livro</button>
            </div>
            <div className="autor">
              <img className="autorIcon" src="./assets/2730147_glasses_harry_outline_potter_spectrespecs_icon - Copia 1.png" alt="Ícone de autor" />
              <button className="autorButton">Autor</button>
            </div>
            <div className="editora">
              <img className="editoraIcon" src="./assets/2730135_elder_harry_outline_potter_wand_icon - Copia 1.png" alt="Ícone de editora" />
              <button className="editoraButton">Editora</button>
            </div>
            <div className="genero">
              <img className="generoIcon" src="./assets/2730130_bottle_harry_magic_outline_potion_icon - Copia 1.png" alt="Ícone de gênero" />
              <button className="generoButton">Gênero</button>
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

export default CadastrosApp;
