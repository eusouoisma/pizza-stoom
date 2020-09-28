import React from 'react';
import Header from '../../componentes/Header';
import BodyFinal from '../../componentes/BodyFinal';

export default function Final() {
 return (
   <div>
       <Header/>
       {/* Componente contendo todo o corpo da página final, em que a mensagem de sucesso é exibida */}
       <BodyFinal/>
   </div>
 );
}