import React, { useContext } from 'react';
import { PizzaContext } from '../../contexts/Pizza/index.js';
import { Main, Pizza, Img, Name, Button } from './styles.js';

export default function SelecionarRecheio() {
    const { recheioSelecionado, salvarRecheioSelecionado, listaRecheios } = useContext(PizzaContext);

    return (
        <Main className="row">

            {
                listaRecheios.map((item) => {
                    return (
                        <div className="col-12 col-md-4" key={item.id}>
                            {/* Exibe a imagem da pizza e o nome do recheio */}
                            <Pizza>
                                <Img style={{ backgroundImage: "url(" + item.img + ")" }}></Img>
                                <Name>{item.nome}</Name>
                            </Pizza>
                            {/* Botão para selecionar o recheio */}
                            <Button onClick={() => salvarRecheioSelecionado(item)}
                                style={{ backgroundColor: (recheioSelecionado.id === item.id) ? '#750901' : '' }}>
                                {
                                    (recheioSelecionado.id === item.id) ? 'Selecionado' : 'Selecionar'
                                }
                            </Button>
                        </div>
                    );
                })
            }

        </Main>
    );
}