import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UrlShortenerPage from './Pages/UrlShortenerPage';
import UrlStatsPage from './Pages/UrlStatsPage';
import RedirectPage from './Pages/RedirectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlShortenerPage />} />
        <Route path="/stats" element={<UrlStatsPage />} />
        <Route path="/:shortcode" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;