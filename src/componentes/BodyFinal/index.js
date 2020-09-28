import React, { useContext, useState } from 'react';
import { Redirect } from "react-router-dom";

import { BodyStyle, Instruction, Title, Obrigado, Button } from './styles';
import { PizzaContext } from '../../contexts/Pizza';


export default function BodyFinal() {
    //Função que limpa todas as seleções
    const { resetar, mensagemFinal } = useContext(PizzaContext);
    //State utilizada para redirecionar para a rota inicial após o reset
    const [redirecionar, setRedirecionar] = useState(false);

    //Limpa as seleções e redireciona para a rota inicial
    function reiniciar(){
        resetar();
        setRedirecionar(true);
    }

    return (
        // Caso tenha reiniciado, redireciona
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