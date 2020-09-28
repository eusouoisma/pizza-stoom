import React, { useContext } from 'react';
import { PizzaContext } from '../../contexts/Pizza/index.js';
import { Main, Tamanho, Img, Name, Button } from './styles.js';

export default function SelecionarTamanho() {
    const { listaTamanhos, tamanhoSelecionado, salvarTamanhoSelecionado } = useContext(PizzaContext);

    return (
        <Main className="row">
            {
                listaTamanhos.map((item) => {
                    return (
                        <div className="col-12 col-md-4" key={item.id}>
                            <Tamanho>
                                <Img style={{ backgroundImage: "url(" + item.img + ")" }}></Img>
                                <Name>{item.nome}</Name>
                            </Tamanho>
                            <Button onClick={() => salvarTamanhoSelecionado(item)}
                                style={{ backgroundColor: (tamanhoSelecionado.id === item.id) ? '#750901' : '' }}>
                                {
                                    (tamanhoSelecionado.id === item.id) ? 'Selecionado' : 'Selecionar'
                                }
                            </Button>
                        </div>
                    );
                })
            }


        </Main>
    );
}