import { useState } from 'react';
import { Car, Upload, Camera, Star } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const TabButton = ({ label, isActive, onClick }: { id: string; label: string; isActive: boolean; onClick: () => void }) => (
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
              <p className="text-gray-600">Manage your profile and car listings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          <TabButton
            id="profile"
            label="Profile"
            isActive={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
          />
          <TabButton
            id="listing"
            label="List My Car"
            isActive={activeTab === 'listing'}
            onClick={() => setActiveTab('listing')}
          />
          <TabButton
            id="messages"
            label="Messages"
            isActive={activeTab === 'messages'}
            onClick={() => setActiveTab('messages')}
          />
          <TabButton
            id="billing"
            label="Billing"
            isActive={activeTab === 'billing'}
            onClick={() => setActiveTab('billing')}
          />
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl shadow-soft p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Profile Information</h2>
            
            <div className="space-y-8">
              {/* Profile Photo */}
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    <Camera className="h-8 w-8 text-gray-400" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors duration-200">
                    <Upload className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Profile Photo</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Upload a clear photo of yourself. This helps dealers verify they're dealing with a real person.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-warning-600">
                    <Star className="h-4 w-4" />
                    <span>Photo verification required for messaging dealers</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="City, County"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* List My Car Tab */}
        {activeTab === 'listing' && (
          <div className="bg-white rounded-xl shadow-soft p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">List Your Car</h2>
            <p className="text-gray-600 mb-8">
              Create a professional listing for your vehicle. You'll be charged £15/month while your car is listed.
            </p>

            <form className="space-y-8">
              {/* Car Photos */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Car Photos
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors duration-200">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    Drag and drop photos here, or click to select
                  </p>
                  <p className="text-sm text-gray-500">
                    Upload up to 10 high-quality photos (JPG, PNG)
                  </p>
                </div>
              </div>

              {/* Car Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Make
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>Select make</option>
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Mercedes</option>
                    <option>Volkswagen</option>
                    <option>Ford</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., 3 Series"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>Select year</option>
                    {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mileage
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Miles"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fuel Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>Select fuel type</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asking Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">£</span>
                  <input
                    type="number"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Describe your car's condition, features, and any additional information..."
                ></textarea>
              </div>

              {/* Pricing Info */}
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="font-medium text-primary-900 mb-2">Listing Cost</h3>
                <p className="text-primary-800 mb-4">
                  You'll be charged £15 per month while your car is listed. No upfront fees.
                </p>
                <div className="space-y-2 text-sm text-primary-700">
                  <div className="flex justify-between">
                    <span>Monthly listing fee:</span>
                    <span>£15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Setup fee:</span>
                    <span>£0.00</span>
                  </div>
                  <div className="border-t border-primary-200 pt-2 flex justify-between font-medium">
                    <span>Total monthly:</span>
                    <span>£15.00</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Car className="h-5 w-5" />
                  <span>Create Listing</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Other tabs */}
        {(activeTab === 'messages' || activeTab === 'billing') && (
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

export default UserDashboard;