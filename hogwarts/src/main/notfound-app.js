import React from 'react';

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>Página não encontrada</h2>
        <p>Desculpe, a página que você está procurando não existe.</p>
        {/* Adicione um link de volta para a página inicial ou qualquer outra ação desejada */}
        <a href="/">Voltar para a página inicial</a>
      </div>
    );
  }
}

export default PageNotFound;
