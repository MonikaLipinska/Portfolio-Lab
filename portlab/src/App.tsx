
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './styles/main.scss';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Logout from './components/Logout.jsx';
//import FormStep1 from './components/FormStep1.jsx';
//import FormStep2 from './components/FormStep2.jsx';
//import FormSummary from './components/FormSummary.jsx';

function App() {


  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/wylogowano" element={<Logout />} />
          {/*<Route path="/oddaj-rzeczy" element={<FormStep1 />} />*/}
          {/*<Route path="/oddaj-rzeczy" element={<FormStep1 />} />
          <Route path="/oddaj-rzeczy/step2" element={<FormStep2 />} />
          <Route path="/oddaj-rzeczy/summary" element={<FormSummary />} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/wylogowano" element={<Logout />} />*/}

      </Routes>
    </Router>
  )
}

export default App;
