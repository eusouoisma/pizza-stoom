import React, { useContext } from 'react';
import { PizzaContext } from '../../contexts/Pizza';
import { Massa, Img, Name } from './styles';

export default function MassaSelecionada() {
  const { massaSelecionada } = useContext(PizzaContext);
  // Se houver uma massa selecionada, exibe suas informações
  return (
    (massaSelecionada.id >= 0) ?
      (
        <div className="col-12 col-md-4" >
          <Massa>
            <Img style={{ backgroundImage: "url(" + massaSelecionada.img + ")" }}></Img>
            <Name>Massa: {massaSelecionada.nome}</Name>
          </Massa>
        </div>
      ) : (<div></div>)
  );
}