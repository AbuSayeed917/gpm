import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import AppleNavigation from './components/AppleNavigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProfessionalHome from './pages/ProfessionalHome2025';
import ProfessionalAbout from './pages/ProfessionalAbout';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ProfessionalSMEServices from './pages/ProfessionalSMEServices';
import ProfessionalLargeEnterpriseServices from './pages/ProfessionalLargeEnterpriseServices';
import ProfessionalConsultancyServices from './pages/ProfessionalConsultancyServices';
import SMESuccessStories from './pages/SMESuccessStories';
import LargeEnterpriseSuccessStories from './pages/LargeEnterpriseSuccessStories';
import ConsultancySuccessStories from './pages/ConsultancySuccessStories';
import QuotePage from './pages/QuotePage';
import './styles/base-2025.css';
import './styles/glossy-effects.css';

// Professional App Component - Clean and Accessible

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="app-container surface min-h-screen">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <AppleNavigation />
              <main id="main-content" className="flex-1 w-full">
                <Routes>
                  <Route path="/" element={<ProfessionalHome />} />
                  <Route path="/services/sme" element={<ProfessionalSMEServices />} />
                  <Route path="/services/large-enterprise" element={<ProfessionalLargeEnterpriseServices />} />
                  <Route path="/services/consultancy" element={<ProfessionalConsultancyServices />} />
                  <Route path="/success-stories/sme" element={<SMESuccessStories />} />
                  <Route path="/success-stories/large-enterprise" element={<LargeEnterpriseSuccessStories />} />
                  <Route path="/success-stories/consultancy" element={<ConsultancySuccessStories />} />
                  <Route path="/quote" element={<QuotePage />} />
                  <Route path="/about" element={<ProfessionalAbout />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;