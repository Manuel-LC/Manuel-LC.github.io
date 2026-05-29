import { Routes, Route, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import ExperiencePage from './pages/ExperiencePage';

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Nav />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}
