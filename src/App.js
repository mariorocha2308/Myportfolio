import { Suspense, lazy } from 'react';

const Landing = lazy(() => import('./pages/Landing.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))

function App() {
  return (
    <main className="App">
      <Suspense fallback={<h1>loading..</h1>}>
        <Landing/>
        <Portfolio/>
      </Suspense>
    </main>
  );
}

export default App;
