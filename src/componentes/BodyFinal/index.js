import React, { useContext, useState } from 'react';
import { Redirect } from "react-router-dom";

import { BodyStyle, Instruction, Title, Obrigado, Button } from './styles';
import { PizzaContext } from '../../contexts/Pizza';


export default function BodyFinal() {

    const { pizzaConfirmada, resetar, mensagemFinal } = useContext(PizzaContext);
    
    const [redirecionar, setRedirecionar] = useState(false);

    function reiniciar(){
        resetar();
        setRedirecionar(true);
    }

    return (
        redirecionar ?
            <Redirect to="/" />
            :
            <BodyStyle>
                <div className="container">
                    <Title>OBRIGADO!</Title>
                    <div className="row">
                        <div className="col-md-6">
                            <Obrigado>
                                { mensagemFinal ? mensagemFinal : ''}
                            </Obrigado>
                        </div>
                    </div>
                    <Instruction>DESEJA INICIAR UM NOVO PEDIDO?</Instruction>
                    <Button onClick={() => reiniciar()}>Reiniciar</Button>

                </div>
            </BodyStyle>
    );
}