import React, { useContext, useState } from 'react';
import { Redirect, Link } from "react-router-dom";

import RecheioSelecionado from '../RecheioSelecionado';
import TamanhoSelecionado from '../TamanhoSelecionado';
import { BodyStyle, Button, Instruction, Title, PrevButton } from './styles';
import Prev from '../../img/prev.png';
import MassaSelecionada from '../MassaSelecionada';
import { PizzaContext } from '../../contexts/Pizza';


export default function BodyConfirmacao() {

    const { confirmarPizza } = useContext(PizzaContext);

    const [redirecionar, setRedirecionar] = useState(false);

    function confirmar() {
        confirmarPizza();
        setRedirecionar(true);
    }

    return (
        redirecionar ?
            <Redirect to="final" />
            :
            <BodyStyle>
                <div className="container">
                    <Title>Sua Pizza</Title>
                    <div className="row">
                        <RecheioSelecionado />
                        <TamanhoSelecionado />
                        <MassaSelecionada />
                    </div>
                    <Instruction>DESEJA CONFIRMAR O PEDIDO?</Instruction>
                    <Button onClick={() => confirmar()}>Confirmar</Button>
                    <Link to="/massa">
                    <PrevButton>
                        <img src={Prev} alt="Prev Button" />
                        ESCOLHER MASSA
                    </PrevButton>
                </Link>
                </div>
            </BodyStyle>
    );
}