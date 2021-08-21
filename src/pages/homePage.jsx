import './styles/homePage.css'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {useEffect} from 'react'
import image from '../images/B612.jpg'
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
                <motion.div className='personalInfo' 
                    animate={animation}
                    >
                    <label className='greeting'>WELCOME, I'M</label>
                    <label className='name'>Mario De Jesus</label>
                    <label className='name'>Rocha.</label>
                    <div>
                        <a href="https://www.linkedin.com/in/mario-de-jesus-rocha" target="_blank" rel='noreferrer'><FaLinkedin className='icon'/></a>
                        
                        <a href="https://github.com/mariorocha2308" target="_blank" rel='noreferrer'><FaGithubSquare className='icon'/></a>
                    </div>

                    <a  className='btnHome' href="https://drive.google.com/file/d/1bNOOQYUkeaicrUhwHoKYIv729SzMgw8F/view?usp=sharing" target="_blank" rel='noreferrer'>Download CV</a>
                    
                </motion.div>
                <div>
                    <img src={image} alt="" className='picHome'/>
                </div>
                <motion.div className='personalDescription' 
                    animate={animation}
                    >
                    <label className='title'>I'M</label>
                    <label className='work'>Full Stack Web Developer Junior</label>
                    <p className='description'>I like to work in Web Sites and Mobiles Aplications</p>
                    <p className='stacks'>Frontend, Backend & Data Base</p>
                </motion.div>         
        </div> 
    );
}

export default HomePage;