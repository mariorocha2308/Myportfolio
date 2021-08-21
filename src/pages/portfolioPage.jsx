import './styles/portfolioPage.css'
import unDraw from '../images/undraw_Lost.svg'

const PortfolioPage = () => {
    return ( 
        <div className='portfolioPage'>
            <img src={unDraw} alt="proximamente" className='imgProx'/>
            <h2 className='h1Prox'>Proximamente, puedes revisar mi github por ahora</h2>
            <a  className='btnHome' href="https://github.com/mariorocha2308" target="_blank" rel='noreferrer'>Github</a>
        </div>
    );
}
 
export default PortfolioPage;