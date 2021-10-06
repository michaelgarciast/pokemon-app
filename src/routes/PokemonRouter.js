import React, { Suspense } from 'react'
import { BrowserRouter as Redirect, Switch, Route } from 'react-router-dom'
import { FooterScreen } from '../layouts/footer/FooterScreen';
import { LazyLoading } from '../layouts/LazyLoading';
import { NavbarScreen } from '../layouts/navbar/NavbarScreen';
import { PokemonPage } from '../pages/PokemonPage';

const HomePage = React.lazy(()=> import('../pages/HomePage'));
const StoryPage = React.lazy(()=> import('../pages/StoryPage'));

const PokemonRouter = () => {
    return (
        <>
        <Suspense fallback={<LazyLoading/>}>
            <NavbarScreen/>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/historia" component={StoryPage} />
                    <Route exact path="/pokemones" component={PokemonPage} /> 
                    <Redirect to="/" />
                </Switch>
            </div>
            <FooterScreen />
        </Suspense>
        </>
    )
}

export default PokemonRouter;
