import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import DealerDashboard from './pages/DealerDashboard';
import UserDashboard from './pages/UserDashboard';
import MessagingPage from './pages/MessagingPage';
import PricingPage from './pages/PricingPage';
import SuccessPage from './pages/SuccessPage';
import DealerLogin from './pages/auth/DealerLogin';
import DealerSignup from './pages/auth/DealerSignup';
import UserLogin from './pages/auth/UserLogin';
import UserSignup from './pages/auth/UserSignup';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
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
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/auth/dealer/login" element={<DealerLogin />} />
              <Route path="/auth/dealer/signup" element={<DealerSignup />} />
              <Route path="/auth/user/login" element={<UserLogin />} />
              <Route path="/auth/user/signup" element={<UserSignup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;