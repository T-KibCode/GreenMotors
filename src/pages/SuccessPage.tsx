import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { useAuth } from '../components/auth/AuthProvider';
import SubscriptionStatus from '../components/stripe/SubscriptionStatus';

const SuccessPage: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add a small delay to allow webhook processing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-soft sm:rounded-lg sm:px-10">
          <div className="text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-success-500" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Payment Successful!</h2>
            <p className="mt-2 text-gray-600">
              Thank you for your purchase. Your payment has been processed successfully.
            </p>
          </div>

          {user && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Subscription Status</h3>
              {loading ? (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ) : (
                <SubscriptionStatus />
              )}
            </div>
          )}

          <div className="mt-8 space-y-4">
            <Link
              to="/dealer-dashboard"
              className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link
              to="/"
              className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;