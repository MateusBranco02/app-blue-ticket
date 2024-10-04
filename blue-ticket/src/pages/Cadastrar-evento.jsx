import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        const response = await axios.post(url, novoEvento);
        console.log(response.data);
        setNovoEvento({
            id: '',
            nome: '',
            local: '',
            descricao: '',
            preco: '',
            foto: ''
        });
    }

    return (
        <>
            <h1>Cadastrar Evento</h1>

            <input
                type="number"
                placeholder="id"
                onChange={(event) => setNovoEvento({ ...novoEvento, id: Number(event.target.value) })}
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
                onChange={(event) => setNovoEvento({ ...novoEvento, preco: Number(event.target.value) })}
                value={novoEvento.preco}
            />

            <input
                type="text"
                placeholder="url/foto"
                onChange={(event) => setNovoEvento({ ...novoEvento, foto: event.target.value })}
                value={novoEvento.foto}
            />

            <button onClick={cadastrarEvento}>Cadastrar</button>

            <Link to={'/'}>
                <p>Voltar</p>
            </Link>
        </>
    );
}
