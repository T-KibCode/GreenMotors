import React from 'react';
import { Link } from 'react-router-dom';
import { Car, MessageCircle, CreditCard, TrendingUp, Shield, Users } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Car,
      title: 'Smart Marketplace',
      description: 'Advanced search and filtering to help buyers find exactly what they\'re looking for.',
    },
    {
      icon: MessageCircle,
      title: 'Instant Messaging',
      description: 'Direct communication between buyers and dealers with negotiation tools built-in.',
    },
    {
      icon: CreditCard,
      title: 'Flexible Pricing',
      description: 'Affordable plans that scale with your business, from individual sellers to large dealers.',
    },
    {
      icon: TrendingUp,
      title: 'Boost Visibility',
      description: 'Premium listing options to get your cars noticed by more potential buyers.',
    },
    {
      icon: Shield,
      title: 'Verified Users',
      description: 'Photo verification system ensures you\'re dealing with real people.',
    },
    {
      icon: Users,
      title: 'Dealer Network',
      description: 'Join a community of independent dealers saving money on their sales platform.',
    },
  ];

  const stats = [
    { number: '2,500+', label: 'Active Dealers' },
    { number: '15,000+', label: 'Cars Listed' },
    { number: '£850', label: 'Average Savings vs Auto Trader' },
    { number: '4.8★', label: 'Dealer Satisfaction' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  The Smart Alternative to
                  <span className="text-primary-600 block">Auto Trader</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Save up to 70% on listing fees while reaching more buyers. Built specifically for independent dealers who want to maximize profits.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/dealer-dashboard"
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 text-center"
                >
                  Start Selling Today
                </Link>
                <Link
                  to="/marketplace"
                  className="border border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 text-center"
                >
                  Browse Cars
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">Free</div>
                  <div className="text-sm text-gray-600">Setup & Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">No</div>
                  <div className="text-sm text-gray-600">Setup Fees</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-strong p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Auto Trader Monthly</span>
                    <span className="text-error-600 font-semibold">£1,200+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">GreenMotor Monthly</span>
                    <span className="text-success-600 font-semibold">£350</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>You Save</span>
                      <span className="text-primary-600">£850/month</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <p className="text-primary-800 text-sm">
                    <strong>That's £10,200 saved per year!</strong> Perfect for independent dealers who want to keep more profit.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed specifically for independent dealers who want professional tools without the premium price tag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Save Money and Sell More Cars?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Join thousands of independent dealers who have already made the switch to a smarter, more affordable platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              View Pricing Plans
            </Link>
            <Link
              to="/dealer-dashboard"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;