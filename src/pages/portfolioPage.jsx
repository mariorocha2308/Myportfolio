import './styles/portfolioPage.css'
import henry from '../images/henry.jpg'
import img from '../images/maxresdefault.jpg'
import { FiGithub } from "react-icons/fi";
import react from '../images/react-2.svg'
import html from '../images/html-1.svg'
import css from '../images/css-3.svg'
import redux from '../images/redux.svg'
import express from '../images/express-109.svg'
import postgress from '../images/postgresql.svg'

const PortfolioPage = () => {
    return ( 
        <div className='portfolioPage'>
            <div className='coursesList'>
                <h2 className='title_courses'>Courses</h2>
                <div className='course'>
                    <span className='course_title'>Full Stack Web Developer</span>
                    <img src={henry} alt="henry" className='course_image'/>
                    <span className='course_school'>by Henry Bootcamp</span>
                    <span className='course_date'> 03 Mayo 2021 / 01 Septiembre 2021</span>
                </div>
            </div>
            <div className='title_projects'>
                    <span className='title_project'>Some Things I’ve Built</span>
            </div>
            <div className='proyectsList'>
                <div className='portfolio'>
                        <div>
                            <span className='featured'>Featured Project</span>
                            <img src={img} alt="maxres" className='imgPortfolio'/>
                        </div>
                    <div className='infoPortfolio'>
                        <span className='titlePortfolio'>PI-Countries</span>
                        <p className='descriptionPortfolio'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        
                    </div>
                    <button className='btnPortfolio'>view project</button>
                    
                    <a href="https://github.com/mariorocha2308/PI-BootcampCountries" target="_blank" rel='noreferrer'><FiGithub className='floatingGithub'/></a> 
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;

                // <p className='p'>I'm Mexican and I'm 21 years old. Nowadays I'm looking for a life on Web Development. My hobbies are listen music and learn languages. At this moment I'm improving my French skills. Also I like to find new things in the world of technologies Web and Mobiles</p>
