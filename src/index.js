import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.addEventListener('DOMContentLoaded', function () {

  const unsplashAccessKey = 'R9n42f0NRfz8bbNvboPGX00NQ8zGqSp7p_VtCQ1mg34';

  fetch(`https://api.unsplash.com/photos/random?query=weather&client_id=${unsplashAccessKey}`)
      .then(response => response.json())
      .then(data => {
          var imageUrl = data.urls.regular;

          document.getElementById('background').style.backgroundImage = 'url(' + imageUrl + ')';
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
