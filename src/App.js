import MALogo from './assets/MALogo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Drive from './pages/Drive';
import Profile from './pages/Profile';
import TabBar from './components/TabBar';

function App() {
  return (
    <Router>
      <div className="App">
      <p>
        <img src={MALogo} className="App-logo" alt="logo" />
      </p>
      <h1> Car Ride System </h1>
    </div>
      <div style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <TabBar />
      </div>
    </Router>
  );
}

export default App;
