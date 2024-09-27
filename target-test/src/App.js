import React, { useState } from 'react';
import './App.css';

function App() {
  const [pagina, setPagina] = useState('inicial');
  const [input, setInput] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(pagina === 'fibonacci'){
      
      let sequencia = [0, 1];
      for (let i = 2; i < input; i++) {
          sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
      }

      setResposta("Sequência: " + sequencia.join(", "))
    
    } else {
      let quantidade = 0;
      
      for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i] === 'A') {
            quantidade++;
        }
      }

      const texto =  quantidade > 0 ? `A letra 'a' aparece ${quantidade} vezes na palavra: '${input}'` : `A letra 'a' não aparece nenhuma vez na palavra: ${input}`;

      setResposta(texto);
    }
  }

  const handleBackButton = () => {
    setResposta('')
    setInput('');
    setPagina('inicial')
  }

  // Função para alterar a página
  const renderPage = () => {
    if (pagina === 'inicial') {
      return (
        <div className="container">
          <h1>Teste para Target</h1>
          <div className="buttons">
            <button onClick={() => setPagina('fibonacci')}>Fibonacci</button>
            <button onClick={() => setPagina('contador')}>Contador</button>
          </div>
          <h2>by: Gabriel Reis</h2>
          <div className='redes'>
            <a href="https://www.linkedin.com/in/devgabrielreis/">Linkedin</a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Reiss1x">GitHub</a>
          </div>
          
        </div>
      );
    } else if (pagina === 'fibonacci') {
      return (
        <div className="container">
          <h1>Gerador de Fibonacci</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="number" placeholder="Quantidade de termos" onChange={(e) => setInput(e.target.value)}/>
            <button type="submit" >Gerar</button>
          </form>
          <button onClick={() => handleBackButton()} id="voltar">Voltar</button>
          {resposta && <h2>{resposta}</h2>}
        </div>
      );
    }
    else if (pagina === 'contador') {
      return (
        <div className="container">
          <h1>Contador e Verificador</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Palavra a verificar" onChange={(e) => setInput(e.target.value)}/>
            <button type="submit" >Verificar</button>
          </form>
          <button onClick={() => handleBackButton()} id="voltar">Voltar</button>
          {resposta && <h2>{resposta}</h2>}
        </div>
      );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
