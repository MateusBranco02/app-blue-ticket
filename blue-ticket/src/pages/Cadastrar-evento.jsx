import axios from "axios";
import { useState } from "react";

export default function Cadastro() {
    const [novoEvento, setNovoEvento] = useState({
        id: null,
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
    }

    return (
        <>
            <h1>Cadastrar Evento</h1>
            <input type="text" placeholder="Nome" />

        </>
    );
}
