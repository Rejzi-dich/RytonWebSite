import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import CodeCarousel from './components/CodeCarousel/carousel';
import LanguageInfo from './components/Language/info';
import Documentation from './pages/Documentation/documentation';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main">
              <section className="hero">
                <h2 className="team-title">by CodeLibraty team</h2>
                <h1 className="main-title">Ryton Programming Language</h1>
                <p className="version">v0.2.5 Alpha</p>
                <LanguageInfo />
                <h1 className="syntax">syntax:</h1>
                <CodeCarousel />
              </section>
            </main>
          } />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
        <div className="rotating-square" />
      </div>
    </Router>
  );
}

export default App;
