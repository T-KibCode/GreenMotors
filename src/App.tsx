import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import DealerDashboard from './pages/DealerDashboard';
import UserDashboard from './pages/UserDashboard';
import MessagingPage from './pages/MessagingPage';
import PricingPage from './pages/PricingPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/dealer-dashboard" element={<DealerDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/messaging" element={<MessagingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;