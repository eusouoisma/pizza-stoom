import React, { useContext } from 'react';
import { PizzaContext } from '../../contexts/Pizza';
import { Pizza, Img, Name } from './styles';

export default function RecheioSelecionado() {
  const { recheioSelecionado } = useContext(PizzaContext);
  console.log(recheioSelecionado.id);
  return (
    (recheioSelecionado.id >= 0) ?
      (<div className="col-12 col-md-4" >
          <Pizza>
            <Img style={{ backgroundImage: "url(" + recheioSelecionado.img + ")" }}></Img>
            <Name>{recheioSelecionado.nome}</Name>
          </Pizza>
        </div>
        ) : (<div></div>)
  );
}