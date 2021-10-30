import './styles/aboutPage.css'
import { motion } from 'framer-motion'
import unDraw from '../images/undraw_a_moment.svg'

const AboutPage = () => {

    const technologies = ['Javascript','HTML','CSS','React','Redux','Framer Motion', 'ExpressJS', 'Sequelize','PostgresSQL','GitHub','NodeJS','MobX']


    return ( 
        <div className='aboutPage'>
            <div className='figure1'></div>
            <div className='figure2'></div>
            <div className='figure3'></div>
            <div className='figure4'></div>
            <div className='figure5'></div>
            <div className='figure6'></div>
            <img src={unDraw} alt="a moment relax" className='picAbout'/>
            <div className='about'>
                <div className='aboutCircle'></div>
                <h2 className='titleAbout'>About Me</h2>
                <p className='p'>I'm Mexican and I'm 21 years old. Nowadays I'm looking for a life on Web Development. My hobbies are listen music and learn languages. At this moment I'm improving my French skills. Also I like to find new things in the world of technologies Web and Mobiles</p>
                
                <h2 className='titleSkills'>Skills</h2>

                <div className='divTechnos'>
                    {
                        technologies.map((technos, idex) => (
                            <motion.label  key={idex} className='technos'   whileHover={{
                                scale: 1.2,
                                backgroundColor: '#008d86e1',
                                color: 'white',
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