import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { unsplashAccessKey } from './components/API_Key';
import App from './App';

document.addEventListener('DOMContentLoaded', function () {
  const unsplashAccessKey1 = unsplashAccessKey;
  const aspectRatio = '16:9'
  const width = 1280;
  const height = 720;
  fetch(`https://api.unsplash.com/photos/random?query=weather&client_id=${unsplashAccessKey1}&aspect_ratio=${aspectRatio}&width=${width}&height=${height}`)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.urls.full;

      document.body.style.backgroundImage = 'url(' + imageUrl + ')';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'top left';
      document.body.style.backgroundRepeat = 'no-repeat';
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
