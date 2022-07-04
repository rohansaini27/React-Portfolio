import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';

const data = [
    {
        id:1,
        image: IMG1,
        title: 'Personal Portfolio',
        github: 'https://github.com/rohansaini27/React-Portfolio.git',
        // demo:
    },
    {
        id:2,
        image: IMG2,
        title: 'Project-2 (Coming Soon)',
        github: 'https://github.com/rohansaini27',
        // demo:
    },
    {
        id:3,
        image: IMG3,
        title: 'Project-3 (Coming Soon)',
        github: 'https://github.com/rohansaini27',
        // demo:
    },
    {
        id:4,
        image: IMG4,
        title: 'Project-4 (Coming Soon)',
        github: 'https://github.com/rohansaini27',
        // demo:
    }

]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github})  => {
                        return (
                            <article key={id} className='portfolio__item' >
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn' target='_blank' >Github</a>
                                <a href='https://github.com' className='btn btn-primary' target='_blank' >Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio