import React, { useContext } from 'react';
import { PizzaContext } from '../../contexts/Pizza/index.js';
import { Main, Img } from './styles.js';

export default function Recomendação() {
  const { recomendacao, listaRecheios } = useContext(PizzaContext);

  return (
    <Main className="row">
      <div className="col-12 col-md-7"><h1>RECOMENDAÇÃO DO DIA: {listaRecheios[recomendacao] ? listaRecheios[recomendacao].nome : ''} </h1></div>
      <Img className="col-12 col-md-5" style={{backgroundImage: listaRecheios[recomendacao] ? `url(${listaRecheios[recomendacao].img})` : ''}}></Img>
    </Main>
  );
}