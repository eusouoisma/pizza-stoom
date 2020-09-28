import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Recomendação from '../Recomendação';
import SelecionarRecheio from '../SelecionarRecheio';
import { BodyStyle, Welcome, NextButtonActive, NextButtonDisabled, Instruction } from './styles';
import Next from '../../img/next.png';
import { PizzaContext } from '../../contexts/Pizza';


export default function BodyRecheio() {

    const { recheioSelecionado } = useContext(PizzaContext);

    return (
        <BodyStyle>
            <div className="container">
                <Welcome>
                    Bem vindo(a)! <span> Vamos escolher sua pizza de hoje?</span>
                </Welcome>
                <Recomendação />
                <Instruction>1º passo: escolha o recheio da sua pizza:</Instruction>
                <SelecionarRecheio />
                {recheioSelecionado.id >= 0 ?
                    <Link to="/tamanho">
                        <NextButtonActive>
                            ESCOLHER TAMANHO
                            <img src={Next} alt="Next Button"/>
                        </NextButtonActive>
                    </Link>
                    :
                    <NextButtonDisabled>
                        ESCOLHER TAMANHO
                        <img src={Next} alt="Next Button"/>
                    </NextButtonDisabled>
                }

            </div>
        </BodyStyle>
    );
}