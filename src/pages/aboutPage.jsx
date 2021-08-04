import './styles/aboutPage.css'
import image from '../images/B612About.jpeg'
import { motion } from 'framer-motion'

const AboutPage = () => {

    const technologies = ['Javascript','HTML','CSS','React','Redux','Framer Motion', 'ExpressJS', 'Sequelize','PostgresSQL','GitHub','NodeJS','MobX']


    return ( 
        <div className='aboutPage'>
            <img src={image} alt="" className='picAbout'/>
            <div className='about'>

                <h1 className='titleAbout'>About Me</h1>
                <hr/>
                <p className='p'>I'm Mexican and I've 20 years old, actually I want make a good life what programmer. My hobbies listen music, learn languages just now I speak French basic conversational and learn all times new things in the world of technologies Web and Mobiles</p>
                
                <h1 className='titleSkills'>Skills</h1>

                <div className='divTechnos'>
                    {
                        technologies.map((technos, idex) => (
                            <motion.label  id={idex} className='technos'   whileHover={{
                                scale: 1.2,
                                backgroundColor: '#f5cd79',
                                cursor: 'pointer',
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}>{technos}</motion.label>
                        ))
                    }
                </div>

                
            </div>
        </div>
    );
}
 
export default AboutPage;