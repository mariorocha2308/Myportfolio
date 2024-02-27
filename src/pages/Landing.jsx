import { FiLinkedin, FiGithub } from "react-icons/fi";
import image from '../images/marioremoved.webp'
import './styles/Landing.css'

const Landing = () => {

  const handleNavigation = (url) => window.open(url)

  return (
    <section className='home'>
      <div className='profile--content'>
      <div className='home--content'>
        <nav className='nav'>
          <label className='nav_container__logo'>Portafolio</label>
        </nav>
        <section className='profile'>
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

                <div className='buttons'>

                  <FiLinkedin className='btn_social' 
                    onClick={() => handleNavigation("https://www.linkedin.com/in/mario-de-jesus-rocha")}
                  />

                  <FiGithub className='btn_social'
                    onClick={() => handleNavigation("https://github.com/mariorocha2308")}
                  />

                  <a className='btnHome' target="_blank" rel='noreferrer'
                    href={process.env.REACT_APP_CV_URL}>
                      Descargar CV
                  </a>
                </div>
              </div>
            </section>
        </section>
      </div>
      </div>
    </section>
  );
}

export default Landing;
