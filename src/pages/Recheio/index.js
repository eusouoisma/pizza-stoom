import React from 'react';
import Header from '../../componentes/Header';
import BodyRecheio from '../../componentes/BodyRecheio';

export default function Recheio() {
  return (
    <div>
      <Header />
      {/* Componente contendo todo o corpo da página de selecionar recheio */}
      <BodyRecheio />
    </div>
  );
}