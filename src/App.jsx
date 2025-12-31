import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Confess from './pages/confess/Confess';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/confess' element={<Confess />} />
    </Routes>
  );
}

export default App;
