import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/output">Output</Link>
          </li>
          
          
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
