import './styles/aboutPage.css'
import { motion } from 'framer-motion'
import unDraw from '../images/undraw_profile_details.svg'

const AboutPage = () => {

    const technologies = ['Javascript','HTML','CSS','React','Redux','Framer Motion', 'ExpressJS', 'Sequelize','PostgresSQL','GitHub','NodeJS','MobX']


    return ( 
        <div className='aboutPage'>
            <img src={unDraw} alt="" className='picAbout'/>
            <div className='about'>

                <h2 className='titleAbout'>About Me</h2>
                <hr/>
                <p className='p'>I'm Mexican and I'm 20 years old. Nowadays I'm looking for a life on Web Development. My hobbies are listen music and learn languages. At this moment I'm improving my French skills. Also I like to find new things in the world of technologies Web and Mobiles</p>
                
                <h2 className='titleSkills'>Skills</h2>

                <div className='divTechnos'>
                    {
                        technologies.map((technos, idex) => (
                            <motion.label  key={idex} className='technos'   whileHover={{
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