import React from 'react';
import { toAbsoluteUrl } from '../../helpers/imagen';


export const FooterScreen = () => {
    return (
        <div className="content-footer">
            <div className="background-footer" 
            style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage:`url(${toAbsoluteUrl('/assets/media/img/page/background-footer.jpg')})`
                }}>
                <div className="content-footer-grid">
                    <img className="footer-logo" 
                    alt="logo-footer" 
                    src={toAbsoluteUrl('./assets/media/img/logos/logo-pokemon.png')}/>
                </div>
            </div>
        </div>
    )
}
