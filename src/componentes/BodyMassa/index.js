import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import SelecionarMassa from '../SelecionarMassa';
import RecheioSelecionado from '../RecheioSelecionado';
import TamanhoSelecionado from '../TamanhoSelecionado';
import { BodyStyle, NextButtonActive, NextButtonDisabled, Instruction, Title, PrevButton } from './styles';
import Next from '../../img/next.png';
import Prev from '../../img/prev.png';
import { PizzaContext } from '../../contexts/Pizza';
import MassaSelecionada from '../MassaSelecionada';


export default function BodyMassa() {

    const { massaSelecionada } = useContext(PizzaContext);

    return (
        <BodyStyle>
            <div className="container">
                <Title>Sua Pizza</Title>
                {/* Exibe o recheio, o tamanho e a massa que já foram selecionados */}
                <div className="row">
                    <RecheioSelecionado />
                    <TamanhoSelecionado />
                    <MassaSelecionada />
                </div>
                <Instruction>3º passo: escolha a massa da sua pizza:</Instruction>
                {/* Componente que exibe as opções de massa */}
                <SelecionarMassa />
                {/* Botão para voltar para a página de tamanho */}
                <Link to="/tamanho">
                    <PrevButton>
                        <img src={Prev} alt="Prev Button" />
                        ESCOLHER TAMANHO
                    </PrevButton>
                </Link>
                {/* Botão de "Avançar". Só fica ativo caso haja uma massa selecionado */}
                {massaSelecionada.id >= 0 ?
                    <Link to="/confirmar">
                        <NextButtonActive>
                            FINALIZAR
                            <img src={Next} alt="Next Button" />
                        </NextButtonActive>
                    </Link>
                    :
                    <NextButtonDisabled>
                        FINALIZAR
                        <img src={Next} alt="Next Button" />
                    </NextButtonDisabled>
                }

            </div>
        </BodyStyle>
    );
}