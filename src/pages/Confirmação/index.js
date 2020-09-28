import React from 'react';
import Header from '../../componentes/Header';
import BodyConfirmacao from '../../componentes/BodyConfirmacao';

export default function Confirmacao() {
 return (
   <div>
       <Header/>
       {/* Componente contendo todo o corpo da página em que o usuário confirma a escolha da pizza */}
       <BodyConfirmacao/>
   </div>
 );
}