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
      setEventos(response.data);
    } catch (error) {
      console.error('Erro ao cadastrar evento:', error);
    }
  }

  return (
    <>
      <div className='container'>
        <header>
          <div className='container-elementos'>
            <h1 className='titulo'>Eventos</h1>
            <Link to={'/cadastrar-evento'}>
              <button className='btn-cadastrar'>Cadastrar Evento</button>
            </Link>
          </div>
        </header>

        <ul className='eventos-lista'>
          {eventos.map((evento, key) =>
            <Link to={`/detalhes-evento/${evento.id}`} key={key}>
              <li className='evento-item'>
                <img className='evento-imagem' src={evento.foto} alt={evento.nome} />
                <p className='evento-info'>{evento.nome} - {evento.local}</p>
              </li>
            </Link>

          )}
        </ul>
      </div>
    </>
  );
}
