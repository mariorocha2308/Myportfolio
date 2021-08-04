import './App.css';
import NavBar from '../src/pages/navBar/navBar.jsx'
import Home from '../src/pages/homePage.jsx'
import About from '../src/pages/aboutPage.jsx'
import Portfolio from '../src/pages/portfolioPage.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
