import React, {useState} from 'react';
import './CadastroVeiculo.css';

function CadastroVeiculo() {
    const [veiculo, setVeiculo] = useState({
        placa: '',
        proprietario: '',
        apartamento: '',
        bloco: '',
        modelo: '',
        cor: '',
        vaga: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setVeiculo({ ...veiculo, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Evitar campos vazios
        if (!veiculo.placa || !veiculo.proprietario || !veiculo.apartamento || !veiculo.bloco || !veiculo.modelo || !veiculo.cor || !veiculo.vaga) {
            alert('Preencha todos os campos!');
            return;
        }

        // Recupera os veículos já cadastrados no LocalStorage
        const veiculosCadastrados = JSON.parse(localStorage.getItem('veiculos')) || [];

        // Adiciona o novo veículo no estacionamento
        veiculosCadastrados.push(veiculo);

        // Atualiza o localStorage com a lista do estacionamento atualizada
        localStorage.setItem('veiculos', JSON.stringify(veiculosCadastrados));

        // Limpa os campos após o cadastro
        setVeiculo({
            placa: '',
            proprietario: '',
            apartamento: '',
            bloco: '',
            modelo: '',
            cor: '',
            vaga: ''
        });

        alert('Veículo cadastrado com sucesso!');
    };

    return (
        <div>
            <h1>Cadastro de Veículos</h1>
            <form onSubmit={handleSubmit}>
                <label>Placa do veículo:</label>
                <input type="text" name="placa" value={veiculo.placa} onChange={handleInputChange} />

                <label>Nome do proprietário:</label>
                <input type="text" name="proprietario" value={veiculo.proprietario} onChange={handleInputChange} />

                <label>Número do apartamento:</label>
                <input type="number" name="apartamento" value={veiculo.apartamento} onChange={handleInputChange} />

                <label>Bloco do apartamento:</label>
                <input type="text" name="bloco" value={veiculo.bloco} onChange={handleInputChange} />

                <label>Modelo do veículo:</label>
                <input type="text" name="modelo" value={veiculo.modelo} onChange={handleInputChange} />
                
                <label>Cor do veículo:</label>
                <input type="text" name="cor" value={veiculo.cor} onChange={handleInputChange} />

                <label>Número da vaga de estacionamento:</label>
                <input type="number" name="vaga" value={veiculo.vaga} onChange={handleInputChange} />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroVeiculo;