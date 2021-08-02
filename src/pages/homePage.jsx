import './styles/homePage.css'
import { motion } from "framer-motion"

const HomePage = () => {

    const motionVariant = {
        hidden: {
            x: '-60px',
            opacity: 0
        },
        show: {
            x: '0px',
            opacity: 1,
            transition: { duration: 2 }
        }
    }
    
    return ( 
        <div className='containPage' id='homePage'>
                <motion.div className='personalInfo' 
                    variants={motionVariant}
                    initial='hidden'
                    animate='show'>
                    <label className='greeting'>WELCOME, I'M</label>
                    <label className='name'>Mario De Jesus.</label>
                    <button className='btnHome'>Download CV</button>
                </motion.div>
                <div>
                    <h1>Picture</h1>
                </div>
                <motion.div className='personalDescription' 
                    variants={motionVariant}
                    initial='hidden'
                    animate='show'
                    >
                    <label className='title'>I'M</label>
                    <label className='work'>Full Stack Web Developer Junior</label>
                    <p className='description'>I like develop Web Sites and Mobiles Aplications</p>
                    <button className='btnHome'>Contact</button>
                </motion.div>         
        </div> 
    );
}
 
export default HomePage;