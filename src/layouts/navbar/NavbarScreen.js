import React from 'react';
import { NavLink } from 'react-router-dom';
import { toAbsoluteUrl } from '../../helpers/imagen';


export const NavbarScreen = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-color">
            <img  alt="logo"                       
            src={toAbsoluteUrl('./assets/media/img/logos/logo-pokemon.png')} 
            className="logo-pokemon" />
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/historia">Historia</NavLink> 
                    </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/pokemones">Pokemones</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/entrenadores">Entrenadores</NavLink>
                    </li>  */}
                    
                    {/* Logout */}
                    <NavLink className="nav-item nav-link logout-session" exact to="/login">Logout</NavLink>
                </ul>    
            </div>
        </nav>
        </>
    )
}
