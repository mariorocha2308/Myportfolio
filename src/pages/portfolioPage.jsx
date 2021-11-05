import './styles/portfolioPage.css'
import img from '../images/maxresdefault.jpg'

const PortfolioPage = () => {
    return ( 
        <div className='portfolioPage'>
            <div className='proyectsList'>
                <div className='portfolio'>
                    <div className='infoPortfolio'>
                        <h2 className='titlePortfolio'>PI-Countries</h2>
                        <p className='descriptionPortfolio'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <div className='buttonsPortfolio'>
                            {/* CAMBIAR AL TAG 'A' */}
                            <label className='btnHome'>Source Code</label>
                            <label  className='btnPortfolio' target="_blank" rel='noreferrer'>View Page</label>
                        </div>
                        
                    </div>
                    
                    <img src={img} alt="maxres" className='imgPortfolio'/>
                </div>
            </div>
        </div>
    );
}
 
export default PortfolioPage;