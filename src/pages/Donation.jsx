import React from 'react'
import { Heart, Users, Shield, TrendingUp, ArrowRight, Target } from 'lucide-react'
import Oldman from '../assets/home/oldman.jpg'
import Womanemp from '../assets/home/woman-emp.jpeg'

export default function Donation() {
  const missions = [
    {
      id: 1,
      title: "Education for All",
      description: "Helping children access education through financial support and resources for their future.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      icon: Heart,
    },
    {
      id: 2,
      title: "Women Empowerment",
      description: "Our ambition is to provide economic opportunities to women which will enable their participation in decision making so that they become equal partners in development process.",
      image: Womanemp,
      icon: Users,
    },
    {
      id: 3,
      title: "Small Enterprise Support",
      description: "We provide zero interest financial aid to individuals & families to help them start small businesses and to achieve financial independence.",
      image: Oldman,
      icon: Shield,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Empower Lives Through Giving
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Create sustained impact. Support verified projects. Get regular updates.
            <br className="hidden md:block" />
            Transform communities. Make a difference today.
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-600">Lives Transformed</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-gray-600">Active Projects</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">10+</div>
              <div className="text-sm text-gray-600">Communities Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Cards Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="group relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-white rounded-2xl overflow-hidden h-full">
                <div className="relative">
                  <img
                    src={mission.image}
                    alt={mission.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Mission Label and Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-sm font-medium mb-1">Mission</p>
                    <h3 className="text-white text-2xl font-bold leading-tight">{mission.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <mission.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-base leading-relaxed">{mission.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            Learn More About Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <p className="text-gray-600 mt-4 text-sm">Discover how we're making a difference in communities</p>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact This Year</h2>
            <p className="text-blue-100 text-lg">Together, we're transforming lives and building futures</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Lives Impacted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Active Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Communities Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Project Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Target className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every contribution, no matter the size, creates ripples of positive change in communities that need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Support Our Mission
              </button>
              <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Learn More About Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}