import React from 'react';
import { toAbsoluteUrl } from '../helpers/imagen';

const HomePage = () => {
    return (
        <div>
            {/* section01 banner */}
            <div className="img-background"
            style={{
                backgroundImage:`url(${toAbsoluteUrl('/assets/media/img/page/img_home.jpg')})`
            }}>
                <div className="content-wrap grid">    
                    <div className="intro-content">
                        <h3 className="title-pokemon">¡Les damos la bienvenida, <br />Entrenadores!</h3>
                        <p className="introduction-pokemon">¡Atrapa, entrena y combate donde quiera que estes en el mundo 
                        <br/>real, con amigos y tu Pokémon compañero!</p>
                    </div>
                </div>
                <div className="callout-wrap grid">
                    <div className="content-logotipo-banner">
                        <div className="intro-logotipo-banner">
                            <img alt="logotipo-banner" 
                            src={toAbsoluteUrl('./assets/media/img/logos/logo-pokemon.png')} 
                            className="img-logotipo-banner" />
                        </div>
                    </div>
                </div>
            </div>
            {/* section02 */}
            <div className="section-newuser">
                <div className="newuser-background" 
                style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundImage:`url(${toAbsoluteUrl('/assets/media/img/page/background02.png')})`}}>
                </div>
                <div className="grid-col">
                    <div className="newuser-inter">
                        <div className="newuser-logo">
                            <img alt="logo01" 
                            src={toAbsoluteUrl('./assets/media/img/page/numero01.png')} 
                            className="newuser-logo"/>
                        </div>
                        <div className="newuser-content">
                            <h2 className="newuser-title">¿Entrenador nuevo?</h2>
                            <p className="newuser-description">
                            ¡Sigue esta sencilla guía sobre cómo ponerse en marcha en Pokémon</p>
                            <button type="button" className="btn btn-primary">Encuentra a tu pokemon favorito</button>
                        </div>
                        <div className="newuser-img">
                            <img alt="logo01" 
                            src={toAbsoluteUrl('./assets/media/img/page/pokemones02.png')} 
                            className="img-pokemon-user" />
                        </div>
                    </div>
                </div>
            </div>
            {/* section03 */}
            <div className="banner-sectionthree">
                <div className="banner-background" style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage:`url(${toAbsoluteUrl('/assets/media/img/page/background03.jpg')})`
                    }}>
                    <div className="grid-col">
                        <div className="banner-content">
                            <h2 className="banner-title">Objetos para la aventura</h2>
                            <p className="banner-description"> para recibir objetos que te ayudarán en tu viaje por PokémonApp, 
                            como Poké Balls, Bayas, objetos de evolución y mucho más.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;