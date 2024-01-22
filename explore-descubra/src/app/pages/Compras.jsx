import React from 'react';
import ComprasList from "../Components/ComprasList";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const compras = () => {
  return (
    <div>
      <Header />
      <ComprasList />
      <Footer />
    </div>
  );
};

export default compras;
