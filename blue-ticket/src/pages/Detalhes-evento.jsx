import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
            <h1>Detalhes do Evento</h1>

            <h2>{evento?.nome}</h2>
            <img src={evento?.foto} width={200} alt={evento?.nome} />
            <p>{evento?.descricao}</p>
            <p>{evento?.local}</p>
            <p>{evento?.preco}</p>

            <Link to={'/'}>
                <p>Voltar</p>
            </Link>
        </>
    );
}
