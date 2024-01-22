"use client";

import { useEffect, useState } from "react";

const ComprasList = () => {
  const [compras, setCompras] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await fetch("https://localhost:7172/api/Compras");
        const data = await response.json();
        setCompras(data);
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
        setError("Erro ao obter dados da API. Por favor, tente novamente.");
      }
    };

    fetchCompras();
  }, []);

  return (
    <div className="table-responsive mt-3 container">
      <h2 className="text-center mb-5 mt-2">Lista de Compras</h2>

      {error && <p className="text-danger">{error}</p>}

      <table className="table table-hover table-bordered table-striped">
        <thead className="table-primary">
          <tr>
            <th scope="col">Id da Compra</th>
            <th scope="col">Nome Cliente</th>
            <th scope="col">Data da compra</th>
            <th scope="col">Destino</th>
            <th scope="col">Periodo</th>
            <th scope="col">Preço</th>
          </tr>
        </thead>
        <tbody>
          {compras.map((compra) => (
            <tr key={compra.id}>
              <th scope="row">{compra.id}</th>
              <td>{compra.clientes.nome}</td>
              <td>{compra.data}</td>
              <td>{compra.pacotes.destino}</td>
              <td>{compra.pacotes.periodo}</td>
              <td>{compra.pacotes.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ComprasList.getInitialProps = async () => {
  return { isClient: true };
};

export default ComprasList;
