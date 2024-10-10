import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Detalhes-evento.css';

export default function Detalhes() {

    const { id } = useParams();
    const [evento, setEvento] = useState(null);

    useEffect(() => {
        detalhesDoEvento(id);
    }, [])

    const detalhesDoEvento = async (id) => {
        const url = `http://localhost:3000/detalhes-evento/${id}`;
        const response = await axios.get(url);
        console.log(response.data);
        setEvento(response.data);
    }

    return (
        <>
            <div className="container-detalhes">
                <h1 className="header-detalhes">{evento?.nome}</h1>

                <div className="evento-container">
                    <div className="evento-poster">
                        <img src={evento?.foto} alt={evento?.nome} />
                    </div>

                    <div className="evento-info">
                        <p><strong>Descrição:</strong> {evento?.descricao}</p>
                        <p><strong>Local:</strong> {evento?.local}</p>
                        <p><strong>Preço:</strong> R${evento?.preco}</p>
                        <Link to="/" className="voltar">Voltar</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
