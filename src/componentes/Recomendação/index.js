import React, { useContext } from 'react';
import { PizzaContext } from '../../contexts/Pizza/index.js';
import { Main, Img } from './styles.js';

export default function Recomendação() {
  const { recomendacao, listaRecheios } = useContext(PizzaContext);

  return (
    <Main className="row">
      {/* 'recomendacao' contém um inteiro, que referencia a algum recheio de pizza.
          'listaRecheios' é um vetor de objetos contendo as informações dos recheios
          Assim, 'listaRecheios[recomendacao]' é um objeto contendo as informações da pizza recomendada no dia
      */}
      <div className="col-12 col-md-7"><h1>RECOMENDAÇÃO DO DIA: {listaRecheios[recomendacao] ? listaRecheios[recomendacao].nome : ''} </h1></div>
      <Img className="col-12 col-md-5" style={{backgroundImage: listaRecheios[recomendacao] ? `url(${listaRecheios[recomendacao].img})` : ''}}></Img>
    </Main>
  );
}