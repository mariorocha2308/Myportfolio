import { Suspense, lazy } from 'react';
import Loading from './components/Loading.jsx';

const Landing = lazy(() => import('./pages/Landing.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))

function App() {
  return (
    <main className="App">
      <Suspense fallback={<Loading/>}>
        <Landing/>
        <Portfolio/>
      </Suspense>
    </main>
  );
}

export default App;
