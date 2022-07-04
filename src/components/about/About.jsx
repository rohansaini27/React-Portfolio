import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';
import { ImUserTie } from 'react-icons/im';
import { VscFolderLibrary } from 'react-icons/vsc';
import me2 from '../../assets/me2.jpg';
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me2} alt="Rohan Saini" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>

                        </article>
                        <article className='about__card'>
                            <ImUserTie className='about__icon' />
                            <h5>Organizations</h5>
                            <small>2 MNC's</small> <br/>                            

                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>3 Completed</small>

                        </article>
                    </div>
                    <p>
                    I am 25 years young FrontEnd developer residing in Ghaziabad, Uttar Pradesh. 
                    I love to drink tea and I like to visit Chandigarh to meet my college friends on weekends. 
                    My favorite free time activities are swimming and to cook food for family and friends.
                    </p>
                    <a href="#contact" className='btn btn-primary'> Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;