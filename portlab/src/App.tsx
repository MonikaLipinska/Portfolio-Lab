
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import './styles/main.scss';
import Home from './components/Home.jsx';

function App() {


  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />


      </Routes>
    </Router>
  )
}

export default App;
