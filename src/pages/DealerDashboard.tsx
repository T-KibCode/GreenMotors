import React, { useState } from 'react';
import { Car, Plus, MessageCircle, TrendingUp, Eye, Heart, Settings } from 'lucide-react';

const DealerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Active Listings', value: '12', change: '+2 this month', icon: Car },
    { label: 'Total Views', value: '2,847', change: '+15% vs last month', icon: Eye },
    { label: 'Messages', value: '23', change: '8 unread', icon: MessageCircle },
    { label: 'Favorites', value: '156', change: '+12 this week', icon: Heart },
  ];

  const recentListings = [
    {
      id: 1,
      title: '2020 BMW 3 Series 320i M Sport',
      price: '£24,995',
      views: 342,
      messages: 8,
      status: 'Active',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      id: 2,
      title: '2019 Audi A4 2.0 TDI S Line',
      price: '£22,750',
      views: 198,
      messages: 3,
      status: 'Active',
      image: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      id: 3,
      title: '2021 Mercedes C-Class C200 AMG Line',
      price: '£28,500',
      views: 267,
      messages: 12,
      status: 'Pending',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];

  const messages = [
    {
      id: 1,
      buyer: 'Sarah Johnson',
      car: '2020 BMW 3 Series',
      message: 'Is this car still available? Would like to arrange a viewing.',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      buyer: 'Mike Thompson',
      car: '2019 Audi A4',
      message: 'Would you consider £21,000 for the Audi?',
      time: '5 hours ago',
      unread: true,
    },
    {
      id: 3,
      buyer: 'Emma Wilson',
      car: '2021 Mercedes C-Class',
      message: 'Can you provide more details about the service history?',
      time: '1 day ago',
      unread: false,
    },
  ];

  const TabButton = ({ id, label, isActive, onClick }: { id: string; label: string; isActive: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-primary-600 text-white'
          : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dealer Dashboard</h1>
              <p className="text-gray-600">Manage your inventory and grow your business</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add New Car</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          <TabButton
            id="overview"
            label="Overview"
            isActive={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <TabButton
            id="listings"
            label="My Listings"
            isActive={activeTab === 'listings'}
            onClick={() => setActiveTab('listings')}
          />
          <TabButton
            id="messages"
            label="Messages"
            isActive={activeTab === 'messages'}
            onClick={() => setActiveTab('messages')}
          />
          <TabButton
            id="analytics"
            label="Analytics"
            isActive={activeTab === 'analytics'}
            onClick={() => setActiveTab('analytics')}
          />
          <TabButton
            id="billing"
            label="Billing"
            isActive={activeTab === 'billing'}
            onClick={() => setActiveTab('billing')}
          />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <stat.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <TrendingUp className="h-5 w-5 text-success-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-xs text-success-600">{stat.change}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Listings */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Listings</h2>
                <div className="space-y-4">
                  {recentListings.map((listing) => (
                    <div key={listing.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{listing.title}</h3>
                        <p className="text-primary-600 font-semibold">{listing.price}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{listing.views} views</span>
                          <span>{listing.messages} messages</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        listing.status === 'Active' 
                          ? 'bg-success-100 text-success-800' 
                          : 'bg-warning-100 text-warning-800'
                      }`}>
                        {listing.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Messages */}
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Messages</h2>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`p-4 rounded-lg transition-colors duration-200 ${
                      message.unread ? 'bg-primary-50 border border-primary-200' : 'hover:bg-gray-50'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900">{message.buyer}</h3>
                          {message.unread && (
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{message.car}</p>
                      <p className="text-sm text-gray-700">{message.message}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                  View All Messages
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs content would go here */}
        {activeTab !== 'overview' && (
          <div className="bg-white rounded-xl shadow-soft p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <p className="text-gray-600">
              This section is coming soon. You'll be able to manage your {activeTab} here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealerDashboard;