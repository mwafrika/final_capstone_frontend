import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <div className="text-sky-500 d-flex">
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    <Home />
  </div>
);

export default App;
