import axios from 'axios';
import { useState } from 'react';

export default function Cadastro() {
    const [novoEvento, setNovoEvento] = useState({
        id: '',
        nome: '',
        local: '',
        descricao: '',
        preco: '',
        foto: ''
    });

    const cadastrarEvento = async () => {
        const url = `http://localhost:3000/cadastro-evento`;
        const response = await axios.post(url);
        console.log(response.data);
        setNovoEvento(response.data);
    }

    return (
        <>
            <h1>Cadastrar Evento</h1>

            <input
                type="text"
                placeholder="id"
                onChange={(event) => setNovoEvento({ ...novoEvento, id: event.target.value })}
                value={novoEvento.id}
            />

            <input
                type="text"
                placeholder="Nome"
                onChange={(event) => setNovoEvento({ ...novoEvento, nome: event.target.value })}
                value={novoEvento.nome}
            />

            <input
                type="text"
                placeholder="Local"
                onChange={(event) => setNovoEvento({ ...novoEvento, local: event.target.value })}
                value={novoEvento.local}
            />

            <input
                type="text"
                placeholder="descrição"
                onChange={(event) => setNovoEvento({ ...novoEvento, descricao: event.target.value })}
                value={novoEvento.descricao}
            />

            <input
                type="text"
                placeholder="preço"
                onChange={(event) => setNovoEvento({ ...novoEvento, preco: event.target.value })}
                value={novoEvento.preco}
            />

            <input
                type="text"
                placeholder="url/foto"
                onChange={(event) => setNovoEvento({ ...novoEvento, foto: event.target.value })}
                value={novoEvento.foto}
            />

            <button onClick={cadastrarEvento}>Cadastrar</button>
        </>
    );
}
