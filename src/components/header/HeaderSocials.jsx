import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com/in/rohansaini27" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/rohansaini27" target="_blank"><BsGithub /></a>
            <a href="https://www.facebook.com/" target="_blank"><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocials;