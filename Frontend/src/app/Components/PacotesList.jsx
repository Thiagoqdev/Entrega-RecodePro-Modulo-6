"use client";

import { useEffect, useState } from "react";

const PacotesList = () => {
  const [pacotes, setPacotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPacotes = async () => {
      try {
        const response = await fetch('https://localhost:7172/api/Pacotes');
        const data = await response.json();
        setPacotes(data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
        setError('Erro ao obter dados da API. Por favor, tente novamente.');
      }
    };

    fetchPacotes();
  }, []);
  
  return (
    <div className="table-responsive mt-3 container">
      <h2 className="text-center mb-5 mt-2">Lista de Pacotes</h2>

      {error && <p className="text-danger">{error}</p>}

      <table className="table table-hover table-bordered table-striped">
        <thead className="table-primary">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Período</th>
            <th scope="col">Preço</th>
            <th scope="col">Destino</th>
          </tr>
        </thead>
        <tbody>
          {pacotes.map((pacote) => (
            <tr key={pacote.id}>
              <th scope="row">{pacote.id}</th>
              <td>{pacote.periodo}</td>
              <td>{pacote.preco}</td>
              <td>{pacote.destino}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PacotesList.getInitialProps = async () => {
  return { isClient: true };
};

export default PacotesList;