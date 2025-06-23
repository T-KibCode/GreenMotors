import React, { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { stripeProducts, StripeProduct } from '../../stripe-config';
import { CreditCard, Loader2 } from 'lucide-react';

interface StripeCheckoutProps {
  product?: StripeProduct;
  className?: string;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ product, className = '' }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async (selectedProduct: StripeProduct) => {
    if (!user) {
      setError('Please sign in to continue');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setError('Please sign in to continue');
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          price_id: selectedProduct.priceId,
          mode: selectedProduct.mode,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/pricing`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during checkout');
    } finally {
      setLoading(false);
    }
  };

  if (product) {
    return (
      <div className={className}>
        {error && (
          <div className="mb-4 bg-error-50 border border-error-200 rounded-lg p-3">
            <p className="text-sm text-error-800">{error}</p>
          </div>
        )}
        <button
          onClick={() => handleCheckout(product)}
          disabled={loading || !user}
          className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <CreditCard className="h-5 w-5" />
              <span>Subscribe Now</span>
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Products</h3>
      {error && (
        <div className="mb-4 bg-error-50 border border-error-200 rounded-lg p-3">
          <p className="text-sm text-error-800">{error}</p>
        </div>
      )}
      <div className="space-y-4">
        {stripeProducts.map((prod) => (
          <div key={prod.priceId} className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900">{prod.name}</h4>
            <p className="text-sm text-gray-600 mb-3">{prod.description}</p>
            <button
              onClick={() => handleCheckout(prod)}
              disabled={loading || !user}
              className="bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <CreditCard className="h-4 w-4" />
                  <span>Subscribe</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StripeCheckout;