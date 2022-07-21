import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/login';
import './App.css';

const App = () => (
  <div className='text-sky-500 d-flex'>
    <Routes>
      <Route path='/create' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </div>
);

export default App;
