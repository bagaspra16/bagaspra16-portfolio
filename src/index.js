import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Add dotlottie player script
const script = document.createElement('script');
script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
script.type = 'module';
document.head.appendChild(script);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 