import React from 'react';
import './Footer.css';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
import {GrTwitter} from 'react-icons/gr';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Rohan Saini</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookSquare/></a>
                <a href="https://instagram.com"><BsInstagram/></a>
                <a href="https://twitter.com"><GrTwitter/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Rohan Saini. All rights reserved.</small>
            </div>

        </footer>
    )
}
export default Footer