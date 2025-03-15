import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Calendar, Globe, Sparkles, HandHeart } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="Community"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-in">
                  <span className="block transform hover:scale-105 transition-transform duration-300">Connecting People Across</span>
                  <span className="block text-indigo-600 transform hover:scale-105 transition-transform duration-300">Faiths & Interests</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-slide-up">
                  Join our vibrant community where people of all faiths come together to share experiences,
                  support each other, and create meaningful connections.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 animate-bounce-in">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => navigate('/events')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 md:py-4 md:text-lg md:px-10"
                    >
                      Explore Events
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-indigo-600 transform -skew-y-1">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white animate-number">500+</p>
              <p className="mt-2 text-xl text-indigo-100">Active Members</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white animate-number">100+</p>
              <p className="mt-2 text-xl text-indigo-100">Monthly Events</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white animate-number">20+</p>
              <p className="mt-2 text-xl text-indigo-100">Faith Communities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-slide-up">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-slide-up">
              Building Bridges Between Communities
            </p>
          </div>

          <div className="mt-20">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative flex flex-col items-center text-center group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white transform transition-transform duration-500 group-hover:scale-110">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">Connect with Others</h3>
                <p className="mt-5 text-base text-gray-500">
                  Meet people who share your values and interests in a welcoming environment.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white transform transition-transform duration-500 group-hover:scale-110">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">Join Events</h3>
                <p className="mt-5 text-base text-gray-500">
                  Participate in various events from religious ceremonies to social gatherings.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-pink-500 text-white transform transition-transform duration-500 group-hover:scale-110">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">Build Community</h3>
                <p className="mt-5 text-base text-gray-500">
                  Create lasting relationships and contribute to a supportive community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Banner Section */}
      <div className="relative bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80"
                alt="Community gathering"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Join Our Growing Community</h3>
              <p className="text-lg text-gray-500">
                Experience the power of unity in diversity. Our community brings together people from all walks of life,
                creating a space where everyone's beliefs and traditions are respected and celebrated.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 text-indigo-600">
                  <Globe className="h-6 w-6" />
                  <span>Global Community</span>
                </div>
                <div className="flex items-center space-x-3 text-indigo-600">
                  <Sparkles className="h-6 w-6" />
                  <span>Enriching Experiences</span>
                </div>
                <div className="flex items-center space-x-3 text-indigo-600">
                  <HandHeart className="h-6 w-6" />
                  <span>Supportive Environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;