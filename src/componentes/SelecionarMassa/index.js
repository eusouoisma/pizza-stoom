import React, { useContext } from 'react';
import { PizzaContext } from '../../contexts/Pizza/index.js';
import { Main, Massa, Img, Name, Button } from './styles.js';

export default function SelecionarRecheio() {
    const { massaSelecionada, salvarMassaSelecionada, listaMassas } = useContext(PizzaContext);

    return (
        <Main className="row">
            {
                listaMassas.map((item) => {
                    return (
                        <div className="col-12 col-md-4" key={item.id}>
                            <Massa>
                                <Img style={{ backgroundImage: "url(" + item.img + ")" }}></Img>
                                <Name>{item.nome}</Name>
                            </Massa>
                            <Button onClick={() => salvarMassaSelecionada(item)}
                                style={{ backgroundColor: (massaSelecionada.id === item.id) ? '#750901' : '' }}>
                                {
                                    (massaSelecionada.id === item.id) ? 'Selecionado' : 'Selecionar'
                                }
                            </Button>
                        </div>
                    );
                })
            }
        </Main>
    );
}