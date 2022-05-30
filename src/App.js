import './styles/sass/style.css';
import { Link, Routes, Route } from 'react-router-dom';

import Calculator from './Components/Calculator/Calculator.js';

function App() {
  return (
    <div className="App">
      <h1>Mini projects Collab</h1>
      <ul className="project_container">
        <li>
          <Link to="/">Home</Link>
        </li>
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
