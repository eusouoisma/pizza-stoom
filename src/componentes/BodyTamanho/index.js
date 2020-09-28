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
                {/* Exibe o recheio e o tamanho que já foram selecionados */}
                <div className="row">
                    <RecheioSelecionado />
                    <TamanhoSelecionado />
                </div>
                <Instruction>
                    2º passo: escolha o tamanho da sua pizza
                </Instruction>
                {/* Componente que exibe as opções de tamanho */}
                <SelecionarTamanho />
                {/* Botão para voltar para a página de recheio */}
                <Link to="/">
                    <PrevButton>
                        <img src={Prev} alt="Prev Button" />
                        ESCOLHER RECHEIO
                    </PrevButton>
                </Link>
                {/* Botão para avançar para a página da massa. Caso não tenha selecionado o tamanho, o botão fica bloqueado */}
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