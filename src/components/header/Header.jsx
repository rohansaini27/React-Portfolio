import React from 'react';
import './Header.css';
import CTA from '../header/CTA';
import me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I am</h5>
                <h1>Rohan Saini</h1>
                <h5 className="text-light">FrontEnd Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={me} alt="me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;