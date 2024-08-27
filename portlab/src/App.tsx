import { useState } from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import './styles/main.scss';

function App() {


  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}>/>
          </Route>
          <Route>

          </Route>
          <Route>

          </Route>
      </Routes>
    </Router>
  )
}

export default App;
