import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    buscarEventos();
  });

  const buscarEventos = async () => {
    const url = `http://localhost:3000/`;
    const response = await axios.get(url);
    console.log(response.data);
    setEventos(response.data)
  }

  return (
    <>
      <h1>Lista de Eventos</h1>
      <Link to={'/cadastrar-evento'}>
        <button>Cadastrar Evento</button>
      </Link>


      <ul>
        {eventos.map((evento, key) =>
          <li key={key}>
            <p>Nome: {evento.nome}</p>
            <img src={evento.foto} width={200} alt={evento.nome} />
          </li>
        )}
      </ul>
    </>
  );
}
