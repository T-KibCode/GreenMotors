// Removed unused import
import { Check, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
// Removed unused import
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
    },
  ];

  const individualPlans = [
    {
      name: 'Individual Seller',
      price: '£20',
      period: 'per month',
      description: 'For private individuals selling their car',
      features: [
        'List one vehicle',
        'Professional listing page',
        'Messaging with potential buyers',
        'Photo verification required',
        'Mobile app access',
        '30-day listing duration',
      ],
    },
  ];


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-primary-100 mb-8">
            Choose the plan that fits your business. No hidden fees, no long-term contracts.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg">
              <strong>Save up to £850/month</strong> compared to Auto Trader while getting all the features you need to succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Dealer Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dealer Plans</h2>
          <p className="text-xl text-gray-600">Professional tools for independent car dealers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {dealerPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-soft p-8 relative ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                {plan.icon && (
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-8 w-8 text-primary-600" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-600 font-normal">/month</span>
                </div>
                <p className="text-primary-600 font-medium">{plan.listings}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dealer-dashboard"
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>

        {/* Individual Seller Plans */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Individual Sellers</h2>
          <p className="text-xl text-gray-600">Simple monthly pricing for private car sales</p>
        </div>

        <div className="max-w-md mx-auto mb-16">
          {individualPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-soft p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-600 font-normal">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600">
                  Only pay while your car is listed
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-success-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/user-dashboard"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-primary-700 transition-colors duration-200"
              >
                List Your Car
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-soft p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How does billing work?</h3>
              <p className="text-gray-600">All plans are billed monthly with no long-term contracts. You can upgrade, downgrade, or cancel anytime.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards through our secure Stripe payment system.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees, no hidden costs. What you see is what you pay.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I try before I buy?</h3>
              <p className="text-gray-600">Yes! All dealer plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;