/* eslint-disable @typescript-eslint/no-unused-vars */
// Removed unused import
import { Check, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
// Removed unused import

// Load Stripe
const stripePromise = loadStripe('STRIPE_SECRET_KEY');

const PricingPage = () => {
  const dealerPlans = [
    {
      name: 'Starter',
      price: '£149',
      description: 'Perfect for small dealers just getting started',
      listings: 'Up to 10 cars',
      features: [
        'Professional car listings',
        'Basic messaging system',
        'Standard support',
        'Mobile-friendly dashboard',
        'Basic analytics',
      ],
      popular: false,
      icon: null,
      stripePriceId: 'price_12345', // Replace with your Stripe price ID
    },
    {
      name: 'Professional',
      price: '£249',
      description: 'Most popular for growing dealerships',
      listings: 'Up to 25 cars',
      features: [
        'Everything in Starter',
        'Advanced messaging & negotiations',
        'Priority customer support',
        'Enhanced analytics & insights',
        '2 premium listing boosts/month',
        'Featured dealer badge',
      ],
      popular: true,
      icon: Crown,
      stripePriceId: 'price_67890', // Replace with your Stripe price ID
    },
    {
      name: 'Enterprise',
      price: '£349',
      description: 'For established dealers with large inventories',
      listings: 'Up to 50 cars',
      features: [
        'Everything in Professional',
        'Advanced inventory management',
        'Custom branding options',
        '5 premium listing boosts/month',
        'Dedicated account manager',
        'API access',
        'White-label messaging',
      ],
      popular: false,
      icon: Zap,
      stripePriceId: 'price_11223', // Replace with your Stripe price ID
    },
  ];

  const handleCheckout = async (priceId: string) => {
    const stripe = await stripePromise;

    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    const session = await response.json();

    if (stripe) {
      stripe.redirectToCheckout({ sessionId: session.id });
    }
  };

  return (
    <div className="pricing-page">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dealerPlans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-lg p-6 shadow-md ${
              plan.popular ? 'border-yellow-500' : 'border-gray-300'
            }`}
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              {plan.icon && <plan.icon className="mr-2" />}
              {plan.name}
            </h2>
            <p className="text-lg font-bold mb-2">{plan.price}</p>
            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
            <ul className="mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                  <Check className="mr-2 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCheckout(plan.stripePriceId)}
              className={`w-full py-2 px-4 rounded-lg text-white ${
                plan.popular ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-800 hover:bg-gray-900'
              }`}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;