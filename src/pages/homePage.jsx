import './styles/homePage.css'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {useEffect} from 'react'
import image from '../images/B612.jpg'

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
                    {/* TODO: AÑADIR ICONOS REFERENCIALE A REDES DE CONTACTO */}
                    <button className='btnHome'>Download CV</button>
                </motion.div>
                <div>
                    <img src={image} alt="Picture Mario" className='picHome'/>
                </div>
                <motion.div className='personalDescription' 
                    animate={animation}
                    >
                    <label className='title'>I'M</label>
                    <label className='work'>Full Stack Web Developer Junior</label>
                    <p className='description'>I like develop Web Sites and Mobiles Aplications</p>
                    <p className='stacks'>Frontend, Backend & Data Base</p>
                    <button className='btnHome'>Contact</button>
                </motion.div>         
        </div> 
    );
}

export default HomePage;