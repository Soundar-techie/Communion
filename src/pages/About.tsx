import React from 'react';
import { Users, Heart, Globe, Sparkles, Target, Award, Coffee, Smile } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-in">
              About <span className="text-indigo-600">Communion</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 animate-slide-up">
              Building bridges between communities and fostering understanding across faiths since 2025.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
                alt="Diverse community"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                <p className="mt-4 text-lg text-gray-600">
                  To create a world where people of different faiths and beliefs come together in harmony, 
                  understanding, and mutual respect, enriching each other's lives through shared experiences 
                  and meaningful connections.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-600">
                  We facilitate meaningful interactions and foster understanding between diverse communities 
                  through organized events, open dialogue, and shared celebrations of our unique traditions 
                  and common values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">The principles that guide our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Respect', description: 'Honoring all beliefs and traditions', color: 'bg-red-500' },
              { icon: Users, title: 'Inclusion', description: 'Welcoming everyone with open arms', color: 'bg-blue-500' },
              { icon: Globe, title: 'Diversity', description: 'Celebrating our differences', color: 'bg-green-500' },
              { icon: Sparkles, title: 'Understanding', description: 'Building bridges through dialogue', color: 'bg-purple-500' }
            ].map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-lg transform group-hover:-translate-y-1 transition-all duration-300">
                  <div className={`${value.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-6 mx-auto`}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-16">Our Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Target className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">500+ Events</h3>
              <p className="text-gray-600">Successfully organized and facilitated meaningful gatherings across different communities.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Award className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">20+ Partners</h3>
              <p className="text-gray-600">Collaborated with various religious and cultural organizations to promote unity.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Smile className="h-12 w-12 text-pink-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10,000+ Members</h3>
              <p className="text-gray-600">Growing community of individuals committed to interfaith dialogue and understanding.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-b from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Join Our Community Today</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Be part of a movement that's bringing people together and creating positive change in our world.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;