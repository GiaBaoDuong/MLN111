import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Theory from './pages/Theory';
import Roleplay from './pages/Roleplay';
import AIUsage from './pages/AIUsage';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/roleplay" element={<Roleplay />} />
          <Route path="/ai-usage" element={<AIUsage />} />
        </Routes>
      </main>
     
    </div>
  );
}

export default App;
