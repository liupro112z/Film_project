import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { FilmProvider } from './component/pages/kindFilm/FilmContext';
import { FilmRomanceProvider } from './component/pages/kindFilm/FilmromanceContext';
import { AccountProvider } from './component/handleComponent/handleConfig/fetchdata';
import { FilmDetectiveProvider } from './component/pages/kindFilm/FilmdetectiveContext';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AccountProvider>
      <FilmProvider>
        <FilmDetectiveProvider>
          <FilmRomanceProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
          </FilmRomanceProvider>
        </FilmDetectiveProvider>
      </FilmProvider>
    </AccountProvider>
  </React.StrictMode>
);

