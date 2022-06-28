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
                            <small>2.5+ Years Working</small>

                        </article>
                        <article className='about__card'>
                            <ImUserTie className='about__icon' />
                            <h5>Clients</h5>
                            <small>3+ Worldwide Clients</small>

                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>4+ Completed</small>

                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum perspiciatis corrupti velit maiores rerum iusto fugiat eum quo ducimus facilis vero vitae obcaecati voluptas provident dignissimos blanditiis omnis asperiores alias possimus consequuntur, architecto repellat.
                    </p>
                    <a href="#contact" className='btn btn-primary'> Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;