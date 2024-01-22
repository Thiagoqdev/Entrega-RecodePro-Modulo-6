import React from 'react';
import ClientesList from "../Components/ClientesList";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const clientes = () => {
  return (
    <div>
      <Header />
      <ClientesList />
      <Footer />
    </div>
  );
};

export default clientes;
