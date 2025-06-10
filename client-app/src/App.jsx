import { BrowserRouter as Router, Routes, Route } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop />} /> 
      </Routes>
    </Router>
  );
}

export default App;
