import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AlteracaoVeiculo.css';

function AlteracaoVeiculo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [veiculo, setVeiculo] = useState({
        placa: '',
        proprietario: '',
        apartamento: '',
        bloco: '',
        modelo: '',
        cor: '',
        vaga: ''
    });

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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setVeiculo({ ...veiculo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validação dos campos para evitar campos vazios
        if (!veiculo.placa || !veiculo.proprietario || !veiculo.apartamento || !veiculo.bloco || !veiculo.modelo || !veiculo.cor || !veiculo.vaga) {
            alert('Preencha todos os campos!');
            return;
        }

        // Recupera os veículos já cadastrados no localStorage
        const veiculosCadastrados = JSON.parse(localStorage.getItem('veiculos')) || [];

        // Encontra o índice do veículo no array
        const veiculoIndex = veiculosCadastrados.findIndex((veiculo, index) => index === Number(id));

        // Verifica se o veículo foi encontrado
        if (veiculoIndex !== -1) {
            // Atualiza o veículo no array
            veiculosCadastrados[veiculoIndex] = veiculo;

            // Atualiza o localStorage com o array de veículos atualizados
            localStorage.setItem('veiculos', JSON.stringify(veiculosCadastrados));

            alert('Veículo atualizado com sucesso!');
            navigate('/lista');
        }
    };

    return (
        <div>
            <h1>Alteração de Veículo</h1>
            <form onSubmit={handleSubmit}>
            <label>Placa do véiculo:</label>
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
                
                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
}

export default AlteracaoVeiculo;