import React, { useContext } from 'react';

import Header from '../../componentes/Header';
import BodyTamanho from '../../componentes/BodyTamanho';
import { PizzaContext } from '../../contexts/Pizza';

export default function Tamanho() {
  const { recheioSelecionado } = useContext(PizzaContext);
  return (
   <div>
       <Header/>
       {/* Componente contendo todo o corpo da página de selecionar recheio */}
       <BodyTamanho/>
   </div>
 );
}