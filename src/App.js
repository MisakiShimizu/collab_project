import './App.css';
import { Link, Routes, Route, Outlet } from 'react-router-dom';

import Calculator from './Components/Calculator.js';

function App() {
  return (
    <div className="App">
      <h1>Mini projects Collab</h1>
      <ul className="project_container">
         <li>
           <Link to="/calculator">Calculator</Link>
         </li>
       </ul>

       <Routes>
         <Route path="/calculator" element={ <Calculator /> } />
       </Routes>
    </div>
  );
}

export default App;
