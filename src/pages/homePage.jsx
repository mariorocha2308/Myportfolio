import './styles/homePage.css'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {useEffect} from 'react'
import image from '../images/Mario.jpg'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const HomePage = () => {


    const {ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                x: '0px',
                opacity: 1,
                transition: { duration: 2 }
            })
        }
        if (!inView) {
            animation.start({
                x: '-200px',
                opacity: 0
            })
        }
    }, [inView])
    
    return ( 
        <div className='containPage' id='homePage' ref={ref}>
            <div className='contentInfo'>
                <motion.div className='personalInfo' 
                    animate={animation}
                    >
                    <label className='greeting'>Hello!</label>
                    <div className='presentation'>
                        <label className='intro'>I'm</label>
                        <label className='name'>Mario.</label>
                    </div>
                    <label className="professional">Frontend & Backend Dev.</label>
                    <label className='description'>I like to work in Web Sites and Mobiles Apps</label>
                </motion.div>
                    
                <div className='buttons'>
                    <a  className='btnHome' href="https://drive.google.com/file/d/1bNOOQYUkeaicrUhwHoKYIv729SzMgw8F/view?usp=sharing" target="_blank" rel='noreferrer'>Download CV</a>

                    <a href="https://www.linkedin.com/in/mario-de-jesus-rocha" target="_blank" rel='noreferrer'><FaLinkedin className='icon'/></a>
                        
                    <a href="https://github.com/mariorocha2308" target="_blank" rel='noreferrer'><FaGithubSquare className='icon'/></a>
                </div>
                
            </div>
                    
            <div className='img'>
                <img src={image} alt="" className='picHome'/>
            </div>

            <div className='circle'></div>
        </div> 
    );
}

export default HomePage;