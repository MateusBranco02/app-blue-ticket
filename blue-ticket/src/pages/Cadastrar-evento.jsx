import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastrar-evento.css';

export default function Cadastro() {
    const [novoEvento, setNovoEvento] = useState({
        id: Math.floor(Math.random() * 999999),
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
    }

    return (
        <>
            <div>
                <header>
                    <div className='container-elementos'>
                        <h1 className='titulo'>Cadastrar Evento</h1>
                        <Link to={'/'}>
                            <button className='btn-voltar'>Voltar</button>
                        </Link>
                    </div>
                </header>

                <div className='container-form'>
                    <form className='form-cadastro'>
                        <ul className='ul-cadastro'>
                            <li className='li-cadastro'>
                                <input
                                    type="text"
                                    className='cadastro-input'
                                    placeholder="Nome"
                                    onChange={(nome) => setNovoEvento({ ...novoEvento, nome: nome.target.value })}
                                    value={novoEvento.nome}
                                />
                            </li>

                            <li className='li-cadastro'>
                                <input
                                    type="text"
                                    className='cadastro-input'
                                    placeholder="Local"
                                    onChange={(local) => setNovoEvento({ ...novoEvento, local: local.target.value })}
                                    value={novoEvento.local}
                                />
                            </li>

                            <li className='li-cadastro'>
                                <input
                                    type="text"
                                    className='cadastro-input'
                                    placeholder="descrição"
                                    onChange={(descricao) => setNovoEvento({ ...novoEvento, descricao: descricao.target.value })}
                                    value={novoEvento.descricao}
                                />
                            </li>

                            <li className='li-cadastro'>
                                <input
                                    type="number"
                                    className='cadastro-input'
                                    placeholder="preço"
                                    onChange={(preco) => setNovoEvento({ ...novoEvento, preco: Number(preco.target.value) })}
                                    value={novoEvento.preco}
                                />
                            </li>

                            <li className='li-cadastro'>
                                <input
                                    type="text"
                                    className='cadastro-input'
                                    placeholder="url/foto"
                                    onChange={(foto) => setNovoEvento({ ...novoEvento, foto: foto.target.value })}
                                    value={novoEvento.foto}
                                />
                            </li>
                        </ul>

                        <button className='btn-cadastrar' onClick={cadastrarEvento}>Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    );
}
