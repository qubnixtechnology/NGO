import React from 'react';
import { Heart, BookOpen, Users, Lightbulb, Target, Globe } from 'lucide-react';
import Imgslide from './ImageSlide'
import { useNavigate } from 'react-router-dom';

function Abouthome() {
  const navigate = useNavigate();
  return (
    <div className="bg-white font-poppins">
      {/* Hero Section */}
      <div className="relative bg-blue-50 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              About Engross Foundation
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Empowering communities, transforming lives, and creating sustainable change
              through compassion, innovation, and dedication.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              At Engross Foundation, we're committed to addressing critical social challenges
              through targeted microfinance initiatives, education support, and community empowerment.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Founded in 2015, our foundation has grown from a small local initiative to an organization
              with significant impact across multiple communities. We believe in the power of small contributions
              to create meaningful change, fostering independence and sustainability rather than dependency.
            </p>
            <p>
              Our approach combines financial support with education, skills training, and community development,
              creating a comprehensive system that addresses both immediate needs and long-term growth.
            </p>
          </div>
        </div>
      </div>

      {/* Our Impact Areas */}
    <div className="bg-blue-50 py-16">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Our Impact Areas
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        We focus on strategic initiatives that create lasting positive change in communities
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Women Empowerment */}
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-4 border-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="bg-white rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-purple-100 p-3 mr-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Women Empowerment
            </h3>
          </div>
          <p className="text-gray-600">
            We provide zero-interest microloans, business training, and mentorship to women entrepreneurs,
            enabling them to start small businesses and achieve financial independence. Our programs have 
            helped over 2,500 women establish sustainable livelihoods across multiple communities.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Entrepreneurship training for rural women
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Microfinance support for small businesses
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Women's health and wellness initiatives
            </li>
          </ul>
        </div>
      </div>

      {/* Child Education */}
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-4 border-transparent bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="bg-white rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Child Education
            </h3>
          </div>
          <p className="text-gray-600">
            Our education initiatives provide scholarships, learning materials, and infrastructure support
            to ensure every child has access to quality education. We've helped over 3,000 children
            continue their education through our scholarship and school support programs.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              School infrastructure development
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Educational scholarships for underprivileged children
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Digital learning initiatives and technology access
            </li>
          </ul>
        </div>
      </div>

      {/* Community Development */}
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-4 border-transparent bg-gradient-to-r from-green-500 to-blue-500">
        <div className="bg-white rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <Globe className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Community Development
            </h3>
          </div>
          <p className="text-gray-600">
            We invest in community-led initiatives addressing local infrastructure, healthcare access, and 
            environmental sustainability. Our projects are designed with community participation to ensure 
            they meet real needs and create lasting benefits.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Clean water and sanitation projects
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Healthcare accessibility programs
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Environmental conservation initiatives
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Impact Numbers */}
      {/* <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-blue-100">
              Since our founding, we've made measurable progress in creating positive change
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">5,800+</div>
              <div className="text-blue-100">Lives Impacted</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">23</div>
              <div className="text-blue-100">Communities Served</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">₹1.2Cr</div>
              <div className="text-blue-100">Funds Distributed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Repayment Rate</div>
            </div>
          </div>
        </div>
      </div> */}


      {/* Call to Action */}

      <Imgslide/>
      <div className="bg-blue-50 py-12 mt-0 ">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Target className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Together, we can create lasting change in communities that need it most. 
              Your support makes our work possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105" 
              onClick={()=>{
                window.scrollTo(0, 0);
                navigate('/donate');
              }}>
                Make a Donation
              </button>
              <button 
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/volunteer');
                }}
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouthome;