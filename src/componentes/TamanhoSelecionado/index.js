import React, { useContext } from 'react';
import { PizzaContext } from '../../contexts/Pizza';
import { Tamanho, Img, Name } from './styles';

export default function TamanhoSelecionado() {
  const { tamanhoSelecionado } = useContext(PizzaContext);

  return (
    (tamanhoSelecionado.id >= 0) ?
      (
        <div className="col-12 col-md-4" >
          <Tamanho>
            <Img style={{ backgroundImage: "url(" + tamanhoSelecionado.img + ")" }}></Img>
            <Name>Tamanho: {tamanhoSelecionado.nome}</Name>
          </Tamanho>
        </div>
      ) : (<div></div>)
  );
}