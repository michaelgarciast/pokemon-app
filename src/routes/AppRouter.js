import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LazyLoading } from '../layouts/LazyLoading';

// import { LoginScreen } from '../layouts/login/LoginScreen';
// import { PokemonRouter } from './PokemonRouter';

const LoginScreen = React.lazy(()=> import('../layouts/login/LoginScreen'));
const PokemonRouter = React.lazy(()=> import('../routes/PokemonRouter'));

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Suspense fallback={<LazyLoading/>}>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route path="/" component={ PokemonRouter }/>
                </Switch>
                </Suspense>
            </div>
        </Router>
    )
}
