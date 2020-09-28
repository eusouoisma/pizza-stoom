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
                            {/* Exibe a imagem da massa e o nome do tipo de massa (Ex: fina, tradicional) */}
                            <Massa>
                                <Img style={{ backgroundImage: "url(" + item.img + ")" }}></Img>
                                <Name>{item.nome}</Name>
                            </Massa>
                            {/* Botão para selecionar a massa */}
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