import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    buscarEventos();
  }, []);

  const buscarEventos = async () => {
    const url = `http://localhost:3000/`;
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setEventos(response.data)
    } catch (error) {
      console.error('Erro ao cadastrar evento:', error);
    }
  }

  return (
    <>
      <h1>Lista de Eventos</h1>
      <Link to={'/cadastrar-evento'}>
        <button>Cadastrar Evento</button>
      </Link>

      <ul>
        {eventos.map((evento, key) =>
          <Link to={`/detalhes-evento/${evento.id}`} key={key}>
            <li>
              <p>Nome: {evento.nome}</p>
              <img src={evento.foto} width={200} alt={evento.nome} />
            </li>
          </Link>

        )}
      </ul>
    </>
  );
}
