import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
// import Home from './pages/Home.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
         <App />
    </BrowserRouter>
 
  </React.StrictMode>
)
