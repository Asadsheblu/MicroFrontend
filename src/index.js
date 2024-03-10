import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot instead of ReactDOM.render

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
