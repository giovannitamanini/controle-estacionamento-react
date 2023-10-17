import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DetalhesVeiculo.css';

function DetalhesVeiculo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [veiculo, setVeiculo] = useState(null);

    useEffect(() => {
        // Recupera o veículo pelo ID a partir do localStorage
        const veiculosCadastrados = JSON.parse(localStorage.getItem('veiculos')) || [];
        const veiculoEncontrado = veiculosCadastrados.find((veiculo, index) => index === Number(id));

        if (veiculoEncontrado) {
            setVeiculo(veiculoEncontrado);
        } else {
            alert('Veículo não encontrado!');
            navigate('/lista');
        }
    }, [id, navigate]);

    return (
        <div>
            <h1>Detalhes do Veículo</h1>
            {veiculo ? (
                <div>
                    <h2>Número da Vaga: {veiculo.vaga}</h2>
                    <p>Modelo: {veiculo.modelo}</p>
                    <p>Placa: {veiculo.placa}</p>
                    <p>Cor: {veiculo.cor}</p>
                    <p>Proprietário: {veiculo.proprietario}</p>
                    <p>Número do apartamento: {veiculo.apartamento}</p>
                    <p>Bloco do apartamento: {veiculo.bloco}</p>
                </div>
            ) : null}
        </div>
    );
}

export default DetalhesVeiculo;