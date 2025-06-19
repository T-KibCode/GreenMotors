import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Fuel, Settings, Heart, MessageCircle } from 'lucide-react';

const MarketplacePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const cars = [
    {
      id: 1,
      title: '2020 BMW 3 Series 320i M Sport',
      price: '£24,995',
      location: 'Birmingham',
      mileage: '35,000 miles',
      fuel: 'Petrol',
      year: '2020',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      dealer: 'Premium Motors Ltd',
      isPremium: true,
    },
    {
      id: 2,
      title: '2019 Audi A4 2.0 TDI S Line',
      price: '£22,750',
      location: 'Manchester',
      mileage: '42,000 miles',
      fuel: 'Diesel',
      year: '2019',
      image: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=400',
      dealer: 'City Cars Direct',
      isPremium: false,
    },
    {
      id: 3,
      title: '2021 Mercedes C-Class C200 AMG Line',
      price: '£28,500',
      location: 'London',
      mileage: '28,000 miles',
      fuel: 'Petrol',
      year: '2021',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=400',
      dealer: 'Executive Auto Sales',
      isPremium: true,
    },
    {
      id: 4,
      title: '2018 Volkswagen Golf 1.6 TDI GT',
      price: '£16,995',
      location: 'Leeds',
      mileage: '55,000 miles',
      fuel: 'Diesel',
      year: '2018',
      image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=400',
      dealer: 'Yorkshire Motors',
      isPremium: false,
    },
    {
      id: 5,
      title: '2020 Ford Focus 1.0 EcoBoost ST-Line',
      price: '£18,250',
      location: 'Bristol',
      mileage: '32,000 miles',
      fuel: 'Petrol',
      year: '2020',
      image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
      dealer: 'Bristol Car Centre',
      isPremium: false,
    },
    {
      id: 6,
      title: '2021 Tesla Model 3 Long Range',
      price: '£35,995',
      location: 'Edinburgh',
      mileage: '18,000 miles',
      fuel: 'Electric',
      year: '2021',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400',
      dealer: 'EV Scotland',
      isPremium: true,
    },
  ];

  const premiumCars = cars.filter(car => car.isPremium);
  const regularCars = cars.filter(car => !car.isPremium);

  const CarCard = ({ car }: { car: typeof cars[0] }) => (
    <div className={`bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden ${car.isPremium ? 'ring-2 ring-accent-400 ring-opacity-50' : ''}`}>
      {car.isPremium && (
        <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 text-sm font-medium">
          ⭐ Premium Listing
        </div>
      )}
      <div className="relative">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 bg-white bg-opacity-90 p-2 rounded-full hover:bg-white transition-colors duration-200">
          <Heart className="h-5 w-5 text-gray-600 hover:text-error-500" />
        </button>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{car.title}</h3>
          <p className="text-2xl font-bold text-primary-600">{car.price}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Settings className="h-4 w-4" />
            <span>{car.mileage}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Fuel className="h-4 w-4" />
            <span>{car.fuel}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{car.location}</span>
        </div>
        
        <div className="text-sm text-gray-600">
          <span className="font-medium">Dealer:</span> {car.dealer}
        </div>
        
        <div className="flex space-x-2 pt-2">
          <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
            View Details
          </button>
          <button className="bg-secondary-100 text-secondary-700 p-2 rounded-lg hover:bg-secondary-200 transition-colors duration-200">
            <MessageCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Cars</h1>
              <p className="text-gray-600">Find your perfect car from trusted independent dealers</p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by make, model, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option>Any Price</option>
                      <option>Under £10,000</option>
                      <option>£10,000 - £20,000</option>
                      <option>£20,000 - £30,000</option>
                      <option>Over £30,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option>Any Make</option>
                      <option>BMW</option>
                      <option>Audi</option>
                      <option>Mercedes</option>
                      <option>Volkswagen</option>
                      <option>Ford</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option>Any Fuel</option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                      <option>Electric</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option>Any Location</option>
                      <option>London</option>
                      <option>Birmingham</option>
                      <option>Manchester</option>
                      <option>Leeds</option>
                      <option>Bristol</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Premium Listings */}
        {premiumCars.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Premium Listings</h2>
              <div className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {premiumCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Listings */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Listings</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {regularCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
            Load More Cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;