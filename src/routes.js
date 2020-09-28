import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Recheio from './pages/Recheio';
import Tamanho from './pages/Tamanho';
import Massa from './pages/Massa';
import Confirmação from './pages/Confirmação';
import Final from './pages/Final';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {Recheio} />
                <Route exact path = "/tamanho" component = {Tamanho} />
                <Route exact path = "/massa" component = {Massa} />
                <Route exact path = "/confirmar" component = {Confirmação} />
                <Route exact path = "/final" component = {Final} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;