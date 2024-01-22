"use client";

import { useEffect, useState } from "react";

const ClientesList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('https://localhost:7172/api/Clientes');
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchClientes();
  }, []);
  
  return (
<div className="table-responsive mt-3 container">
<h2 className="text-center mb-5 mt-2">Lista de Clientes</h2>
<table className="table table-hover table-bordered table-striped">
  <thead className="table-primary">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Email</th>
      <th scope="col">Cpf</th>
      <th scope="col">Senha</th>
    </tr>
  </thead>
  <tbody>
    {clientes.map((cliente) => (
      <tr key={cliente.id}>
        <th scope="row">{cliente.id}</th>
        <td>{cliente.nome}</td>
        <td>{cliente.email}</td>
        <td>{cliente.cpf}</td>
        <td>{cliente.senha}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
  );
};

ClientesList.getInitialProps = async () => {
  return { isClient: true };
};

export default ClientesList;

