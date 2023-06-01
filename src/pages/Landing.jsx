// import Typed from 'react-typed';
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
                  <hr />
                  <label className='name__text'>Mario De Jesus Rocha</label>
                </div>
                <label className='description_text'>Hola, Soy Programador</label>
                <label className='description_text'>Frontend & Backend</label>

                {/* <Typed strings={['Frontend', 'Backend', 'Database']} loop typeSpeed={200} backSpeed={50} className='description_typed'></Typed> */}
                <div className='buttons'>
                  <a className='btn_social' target="_blank" rel='noreferrer'
                    href="https://www.linkedin.com/in/mario-de-jesus-rocha">
                      <FiLinkedin className='icon' />
                  </a>

                  <a className='btn_social' target="_blank" rel='noreferrer'
                    href="https://github.com/mariorocha2308" >
                      <FiGithub className='icon'/>
                  </a>

                  <a className='btnHome' target="_blank" rel='noreferrer'
                    href="https://drive.google.com/file/d/1pIpzoatDmtblWadCPTWRf9EFSltVyf6t/view?usp=sharing">
                      Descargar CV
                  </a>
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