import React, { useState, useEffect, createContext } from 'react';

export const PizzaContext = createContext();

const PizzaProvider = ({children}) => {

    const [listaRecheios, setListaRecheios] = useState([]);
    const [listaTamanhos, setListaTamanhos] = useState([]);
    const [listaMassas, setListaMassas] = useState([]);

    const [recomendacao, setRecomendacao] = useState({});
    
    const [recheioSelecionado, setRecheioSelecionado] = useState({});
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState({});
    const [massaSelecionada, setMassaSelecionada] = useState({});
    
    const [pizzaConfirmada, setPizzaConfirmada] = useState({});
    const [mensagemFinal, setMensagemFinal] = useState('');

    
    const salvarRecheioSelecionado = (item) => {
        setRecheioSelecionado(item);
        localStorage.setItem('@stoom-pizza/recheio', JSON.stringify(item));
    }

    const salvarTamanhoSelecionado = (item) => {
        setTamanhoSelecionado(item);
        localStorage.setItem('@stoom-pizza/tamanho', JSON.stringify(item));
    }

    const salvarMassaSelecionada = (item) => {
        setMassaSelecionada(item);
        localStorage.setItem('@stoom-pizza/massa', JSON.stringify(item));
    }
    
    const confirmarPizza = () => {
        let pizza = {
            recheio: recheioSelecionado.nome,
            tamanho: tamanhoSelecionado.nome,
            massa: massaSelecionada.nome
        }
        setPizzaConfirmada(pizza);
        let mensagem; 
        mensagem = ("O seu pedido foi confirmado! Uma pizza com recheio " + pizza.recheio + 
                    ", Tamanho " + pizza.tamanho + 
                    " e Masssa " + pizza.massa + ".");
        
        //Verifica se o recheio escolhido é o mesmo da recomendação, se sim, adiciona a mensagem sobre os pontos
        if(listaRecheios[recomendacao].nome === pizza.recheio) mensagem = mensagem + "\nComo você comprou a pizza recomendada, acaba de receber pontos de Benefício. Parabéns!"; 
        setMensagemFinal(mensagem);           
        localStorage.setItem('@stoom-pizza/pizzaConfirmada', JSON.stringify(pizza));
        localStorage.setItem('@stoom-pizza/mensagemFinal', mensagem);
    }
    
    const resetar = () => {
        localStorage.clear();
        setRecheioSelecionado({});
        setTamanhoSelecionado({});
        setMassaSelecionada({});
    }

    useEffect(() => {

        //Simulando o backend por meio de dados mockados
        async function carregaPizzas_mock(){
            //Carrega as opções de recheio
            setListaRecheios([
                {
                    id: 0,
                    nome: 'Portuguesa',
                    img: require('../../img/pizzas/portuguesa.jpg')
                },
                {
                    id: 1,
                    nome: 'Frango com Catupiry',
                    img: require('../../img/pizzas/frango-catupiry.jpg')
                },
                {
                    id: 2,
                    nome: 'Margherita',
                    img: require('../../img/pizzas/margherita.jpg')
                },
                {
                    id: 3,
                    nome: 'Mussarela',
                    img: require('../../img/pizzas/mussarela.jpg')
                },
                {
                    id: 4,
                    nome: 'Calabresa',
                    img: require('../../img/pizzas/calabresa.jpg')
                },
                {
                    id: 5,
                    nome: 'Presunto e Bacon',
                    img: require('../../img/pizzas/presunto-bacon.jpg')
                }
            ]);

            //Carrega as opções de tamanho
            setListaTamanhos([
                {
                    id: 0,
                    nome: 'Pequena',
                    img: require('../../img/small.png')
                },
                {
                    id: 1,
                    nome: 'Média',
                    img: require('../../img/medium.png')
                },
                {
                    id: 2,
                    nome: 'Grande',
                    img: require('../../img/big.png')
                }
            ]);

            //Carrega as opções de massa
            setListaMassas([
                {
                    id: 0,
                    nome: 'Finíssima',
                    img: require('../../img/finíssima.png')
                },
                {
                    id: 1,
                    nome: 'Fina',
                    img: require('../../img/fina.png')
                },
                {
                    id: 2,
                    nome: 'Tradicional',
                    img: require('../../img/tradicional.png')
                }
            ]);
        }

        //Carrega as informações de recomendação de pizza
        function carregaRecomendacao_mock(){
            //Simulando que a cada dia há uma recomendação diferente
            let d = new Date();
            let dia = d.getDate()%6;
            setRecomendacao(dia);
        }
        
        carregaPizzas_mock();
        carregaRecomendacao_mock();

        //Verificar no localStorage se há recheio selecionado
        let recheioLocalStorage = JSON.parse(localStorage.getItem('@stoom-pizza/recheio'));
        if(recheioLocalStorage) setRecheioSelecionado(recheioLocalStorage);

        //Verificar no localStorage se há tamanho selecionado
        let tamanhoLocalStorage = JSON.parse(localStorage.getItem('@stoom-pizza/tamanho'));
        if(tamanhoLocalStorage) setTamanhoSelecionado(tamanhoLocalStorage);

        //Verificar no localStorage se há massa selecionada
        let massaLocalStorage = JSON.parse(localStorage.getItem('@stoom-pizza/massa'));
        if(massaLocalStorage) setMassaSelecionada(massaLocalStorage);

        //Verificar no localStorage se há uma pizza confirmada
        let pizzaLocalStorage = JSON.parse(localStorage.getItem('@stoom-pizza/pizzaConfirmada'));
        if(pizzaLocalStorage) setPizzaConfirmada(pizzaLocalStorage);

        //Verificar no localStorage se há uma mensagem final setada
        let mensagemFinalLocalStorage = localStorage.getItem('@stoom-pizza/mensagemFinal');
        if(mensagemFinalLocalStorage) setMensagemFinal(mensagemFinalLocalStorage);

    },[]);

    return(
        <PizzaContext.Provider value = {{recheioSelecionado, salvarRecheioSelecionado, listaRecheios, listaTamanhos, tamanhoSelecionado, 
                                         setTamanhoSelecionado, listaMassas, massaSelecionada, salvarMassaSelecionada, 
                                         salvarTamanhoSelecionado, confirmarPizza, pizzaConfirmada, resetar, recomendacao, mensagemFinal}}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider;