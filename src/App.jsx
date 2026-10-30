import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Footer from './components/Footer';
import { MarkSprite } from './components/Blocks';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import { NotFound, Privacy, Terms } from './pages/Legal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    const s = document.getElementById('splash');
    if (s) { s.style.opacity = '0'; setTimeout(() => s.remove(), 500); }
  }, []);
  return (
    <>
      <MarkSprite />
      <ScrollToTop />
      <Header />
      <Box component="main" id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}
