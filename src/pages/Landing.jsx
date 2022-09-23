import Typed from 'react-typed';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import image from '../images/Marioremoved.png'
import './styles/Landing.css'

const Landing = () => {

    return (
        <section className='home'>
            <div className='home--content'>
                <nav className='nav'>
                    <label className='nav_container__logo'>Portafolio</label>
                </nav>
                <section className='profile'>
                    <div className='profile--content'>
                        <figure className='contentPic'>
                            <img src={image} alt="" className='picHome' />
                        </figure>
                        <section className='introduction'>
                            <div className='introduction--content'>
                                <div className='name_container'>
                                    <hr/>
                                    <label className='name__text'>Mario De Jesus Rocha</label>
                                </div>
                                <label className='description_text'>Hola, Soy Programador 👨‍💻</label>
                                <Typed strings={['Frontend', 'Backend', 'Database']} loop typeSpeed={200} backSpeed={50} className='description_typed'></Typed>
                                <div className='buttons'>
                                    <a href="https://www.linkedin.com/in/mario-de-jesus-rocha" target="_blank" rel='noreferrer' className='btn_social'><FiLinkedin className='icon' /></a>

                                    <a href="https://github.com/mariorocha2308" target="_blank" rel='noreferrer' className='btn_social'><FiGithub className='icon' /></a>

                                    <a className='btnHome' href="https://drive.google.com/file/d/1pIpzoatDmtblWadCPTWRf9EFSltVyf6t/view?usp=sharing" target="_blank" rel='noreferrer'>Descargar CV</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Landing;