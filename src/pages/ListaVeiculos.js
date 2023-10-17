import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaVeiculos.css';

function ListaVeiculos() {
    const navigate = useNavigate();
    // Recupera os veículos do LocalStorage
    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

    const handleDetalhes = (id) => {
        navigate(`/detalhes/${id}`);
    };

    const handleAlteracao = (id) => {
        navigate(`/alteracao/${id}`);
    };

    const handleExclusao = (id) => {
        // Filtra os veículos para excluir o veículo com o ID informado
        const veiculosAtualizados = veiculos.filter((veiculo, index) => index !== id);

        // Atualiza o localStorage com a lista de veículos atualizada
        localStorage.setItem('veiculos', JSON.stringify(veiculosAtualizados));

        alert('Veículo excluído com sucesso!');
        // Recarrega a página para exibir a lista atualizada
        window.location.reload();
    };

    return (
        <div>
            <h1 class="lista">Listagem de Veículos</h1>
            <ul>
                {veiculos.map((veiculo, index) => (
                    <li key={index}>
                        <strong>Número da Vaga: {veiculo.vaga}</strong>
                        <p>Modelo: {veiculo.modelo}</p>
                        <p>Placa: {veiculo.placa}</p>
                        <p>Proprietário: {veiculo.proprietario}</p>
                        <button onClick={() => handleDetalhes(index)}>Detalhes</button>
                        <button onClick={() => handleAlteracao(index)}>Alterar</button>
                        <button class="exclusao" onClick={() => handleExclusao(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaVeiculos;