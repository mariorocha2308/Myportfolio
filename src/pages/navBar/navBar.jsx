import { Link } from 'react-scroll'
import '../styles/navBar.css'

const NavBar = () => {
    return ( 
        <div className='navBar'>
            <Link
                activeClass="active"
                to="homePage"
                spy={true}
                smooth={true}
                duration={500}
            ><span>Home</span></Link>
            <Link
                activeClass="active"
                to="aboutPage"
                spy={true}
                smooth={true}
                duration={500}
            ><span>About Me</span></Link>
            <Link
                activeClass="active"
                to="portfolioPage"
                spy={true}
                smooth={true}
                duration={500}
            ><span>Portfolio</span></Link>
        </div>
    );
}
 
export default NavBar;