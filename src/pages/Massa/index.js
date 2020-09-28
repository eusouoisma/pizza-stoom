import React from 'react';
import Header from '../../componentes/Header';
import BodyMassa from '../../componentes/BodyMassa';

export default function Massa() {
 return (
   <div>
       <Header/>
       {/* Componente contendo todo o corpo da página de selecionar massa */}
       <BodyMassa/>
   </div>
 );
}