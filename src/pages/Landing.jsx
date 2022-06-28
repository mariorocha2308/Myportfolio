import Typed from 'react-typed';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import image from '../images/Marioremoved.png'
import './styles/Landing.css'

const Landing = () => {

    return (
        <div className='home'>
            <div className='home--content'>
                <div className='nav'>
                    <span className='nav_container__logo'>Portafolio</span>
                </div>
                <div className='profile'>
                    <div className='profile--content'>
                        <div className='contentPic'>
                            <img src={image} alt="" className='picHome' />
                        </div>
                        <div className='introduction'>
                            <div className='introduction--content'>
                                <div className='name_container'>
                                    <hr />
                                    <span className='name__text'>Mario De Jesus Rocha</span>
                                </div>
                                <p className='description_text'>
                                    Hola, Soy Programador 👨‍💻
                                </p>
                                <Typed strings={['Frontend', 'Backend', 'Database']} loop typeSpeed={200} backSpeed={50} className='description_typed'></Typed>
                                <div className='buttons'>
                                    <a href="https://www.linkedin.com/in/mario-de-jesus-rocha" target="_blank" rel='noreferrer' className='btn_social'><FiLinkedin className='icon' /></a>

                                    <a href="https://github.com/mariorocha2308" target="_blank" rel='noreferrer' className='btn_social'><FiGithub className='icon' /></a>

                                    <a className='btnHome' href="https://drive.google.com/file/d/10Kqr8wkkAp-BEIS4cz5jiHntrIF98OtF/view?usp=sharing" target="_blank" rel='noreferrer'>Descargar CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
