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
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'


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

function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos.length > 1) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  )
}

export default App;