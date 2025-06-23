import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { supabase } from '../../lib/supabase';
import { CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';
import { getProductByPriceId } from '../../stripe-config';

interface Subscription {
  subscription_status: string;
  price_id: string | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
}

const SubscriptionStatus: React.FC = () => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchSubscription();
    }
  }, [user]);

  const fetchSubscription = async () => {
    try {
      const { data, error } = await supabase
        .from('stripe_user_subscriptions')
        .select('*')
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
        return;
      }

      setSubscription(data);
    } catch (error) {
      console.error('Error fetching subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user || loading) {
    return null;
  }

  if (!subscription) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <XCircle className="h-5 w-5 text-gray-400" />
          <span className="text-gray-600">No active subscription</span>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'trialing':
        return <Clock className="h-5 w-5 text-warning-500" />;
      case 'past_due':
      case 'unpaid':
        return <AlertTriangle className="h-5 w-5 text-error-500" />;
      default:
        return <XCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-success-600 bg-success-50 border-success-200';
      case 'trialing':
        return 'text-warning-600 bg-warning-50 border-warning-200';
      case 'past_due':
      case 'unpaid':
        return 'text-error-600 bg-error-50 border-error-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null;
  const periodEnd = subscription.current_period_end 
    ? new Date(subscription.current_period_end * 1000).toLocaleDateString()
    : null;

  return (
    <div className={`border rounded-lg p-4 ${getStatusColor(subscription.subscription_status)}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {getStatusIcon(subscription.subscription_status)}
          <span className="font-medium capitalize">
            {subscription.subscription_status.replace('_', ' ')}
          </span>
        </div>
        {product && (
          <span className="text-sm font-medium">{product.name}</span>
        )}
      </div>
      
      {periodEnd && (
        <p className="text-sm">
          {subscription.cancel_at_period_end 
            ? `Cancels on ${periodEnd}`
            : `Renews on ${periodEnd}`
          }
        </p>
      )}
    </div>
  );
};

export default SubscriptionStatus;