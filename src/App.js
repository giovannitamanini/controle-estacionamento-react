/*Desenvolvimento Web - UniSENAI
  Desafio 2: Desenvolvimento de um sistema para controle de 
estacionamento com React
  Última revisão: 17/10/2023
  Aluno: Giovanni de Aguirre Tamanini
  Professor: Julio Cezar Rutke
*/

import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CadastroVeiculo from './pages/CadastroVeiculo';
import ListaVeiculos from './pages/ListaVeiculos';
import DetalhesVeiculo from './pages/DetalhesVeiculo';
import AlteracaoVeiculo from './pages/AlteracaoVeiculo';

function App() {
  return (
    <div className="App">
      <Header />  
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroVeiculo />} />
          <Route path="/lista" element={<ListaVeiculos />} />
          <Route path="/detalhes/:id" element={<DetalhesVeiculo />} />
          <Route path="/alteracao/:id" element={<AlteracaoVeiculo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
