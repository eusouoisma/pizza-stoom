import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import SelecionarTamanho from '../SelecionarTamanho';
import RecheioSelecionado from '../RecheioSelecionado';
import TamanhoSelecionado from '../TamanhoSelecionado';
import { BodyStyle, Instruction, NextButtonActive, NextButtonDisabled, PrevButton, Title } from './styles';
import Next from '../../img/next.png';
import Prev from '../../img/prev.png';
import { PizzaContext } from '../../contexts/Pizza';

export default function Tamanho() {

    const { tamanhoSelecionado } = useContext(PizzaContext);

    return (
        <BodyStyle>
            <div className="container">
                <Title>Sua Pizza</Title>
                <div className="row">
                    <RecheioSelecionado />
                    <TamanhoSelecionado />
                </div>
                <Instruction>
                    2º passo: escolha o tamanho da sua pizza
                </Instruction>
                <SelecionarTamanho />
                <Link to="/">
                    <PrevButton>
                        <img src={Prev} alt="Prev Button" />
                        ESCOLHER RECHEIO
                    </PrevButton>
                </Link>
                {tamanhoSelecionado.id >= 0 ?
                    <Link to="/massa">
                        <NextButtonActive>
                            ESCOLHER MASSA
                            <img src={Next} alt="Next Button" />
                        </NextButtonActive>
                    </Link>
                    :
                    <NextButtonDisabled>
                        ESCOLHER MASSA
                        <img src={Next} alt="Next Button" />
                    </NextButtonDisabled>
                }
            </div>
        </BodyStyle>
    );
}