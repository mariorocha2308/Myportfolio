import './styles/aboutPage.css'
import { motion } from 'framer-motion'
import unDraw from '../images/undraw_a_moment.svg'
import js from '../images/logo-javascript.svg'
import html from '../images/html-1.svg'
import css from '../images/css-3.svg'
import react from '../images/react-2.svg'
import redux from '../images/redux.svg'
import express from '../images/express-109.svg'
import postgress from '../images/postgresql.svg'


const AboutPage = () => {

    const technologies = [{name: 'Javascript', img: js},{name: 'HTML', img: html},{name: 'CSS', img: css},{name: 'React', img: react},{name: 'Redux', img: redux}, {name: 'ExpressJS', img: express},{name: 'PostgresSQL', img: postgress}]


    return ( 
        <div className='aboutPage'>
            <div className='figure1'></div>
            <div className='figure2'></div>
            <div className='figure3'></div>
            <div className='figure4'></div>
            <div className='figure5'></div>
            <div className='figure6'></div>
            <img src={unDraw} alt="a moment relax" className='picAbout'/>
            <div className='about'>
                <h2 className='titleAbout'>About Me</h2>
                <p className='p'>I'm Mexican and I'm 21 years old. Nowadays I'm looking for a life on Web Development. My hobbies are listen music and learn languages. At this moment I'm improving my French skills. Also I like to find new things in the world of technologies Web and Mobiles</p>
                
                <h2 className='titleSkills'>Skills</h2>

                <div className='divTechnos'>
                    {
                        technologies.map((technos, idex) => (
                            <motion.div key={idex} className='technos'   whileHover={{
                                backgroundColor: '#008d86e1',
                                color: 'white',
                                cursor: 'pointer',
                                transition: { duration: 1 },
                            }}>
                                <div className='divTechnos2'>
                                    <label className='labelTechnos'>{technos.name}</label>
                                    <img src={technos.img} className='logoTechnos' alt={technos.name}/>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>

                
            </div>
        </div>
    );
}
 
export default AboutPage;