import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/image/logo.png';


const EngrossFoundation = () => {
  const navigate = useNavigate();
  
  const handleClick = (action) => {
    switch(action) {
      case 'generate-id':
        alert('Opening ID Card Generator...');
        break;
      case 'appointment-letter':
        alert('Opening Appointment Letter Generator...');
        break;
      case 'generate-certificate':
        alert('Please make payment to generate certificate');
        break;
      case 'donate':
        navigate('/donate');
        break;
      case 'learn-more':
        navigate('/about');
        break;
      default:
        console.log('Action:', action);
    }
  };

  const linkCards = [
    {
      id: 'generate-id',
      icon: '🆔',
      title: 'Generate ID Card',
      description: 'Create official identification cards for foundation members',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      id: 'appointment-letter',
      icon: '📄',
      title: 'Appointment Letter',
      description: 'Generate appointment letters for new team members',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'generate-certificate',
      icon: '🏆',
      title: 'Generate Certificate',
      description: 'Issue certificates for training and achievements',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'donate',
      icon: '💚',
      title: 'Donate Now',
      description: 'Support our mission to help communities thrive',
      gradient: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg animate-fade-in-up font-poppins">
            Engross Foundation
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 animate-fade-in-up animation-delay-200 font-poppins">
            Empowering communities through sustainable microfinance initiatives
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
 <section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent text-center mb-12 font-poppins">
      Quick Links
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {linkCards.map((card, index) => (
        <div
          key={card.id}
          onClick={() => handleClick(card.id)}
          className={`group relative bg-white rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3 overflow-hidden animate-fade-in-up border-2 border-solid shadow-md hover:shadow-xl ${
            card.id === 'appointment-letter' 
              ? 'border-gradient-wrapper border-purple-300'
              : card.id === 'generate-id'
                ? 'border-blue-300'
                : card.id === 'generate-certificate'
                  ? 'border-yellow-300'
                  : 'border-green-300'
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
          
          {card.id === 'appointment-letter' && (
            <div className="absolute inset-0 border-gradient"></div>
          )}
          
          <div className="relative z-10">
            <div className={`flex items-center justify-center w-20 h-20 mx-auto rounded-full mb-6 transform group-hover:scale-110 transition-transform duration-300 text-4xl bg-gradient-to-br ${card.gradient} text-white font-poppins`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-colors font-poppins">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-poppins">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1 text-center">
              <div className="w-44 h-44 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl border-8 border-white animate-pulse-slow overflow-hidden">
                <img 
                  src={Logo} 
                  alt="Engross Foundation Logo" 
                  className="w-36 h-36 object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-8 animate-fade-in-up font-poppins">
                About Engross Foundation
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200 font-poppins">
                <p>
                  Engross Foundation is dedicated to empowering underprivileged communities through sustainable microfinance initiatives and education support. Our mission is to create pathways out of poverty by providing access to financial resources, education, and skill development opportunities.
                </p>
                <p>
                  We focus on women empowerment, child education, and community development programs that create lasting positive change. Through our innovative microfinance approach, we've helped thousands of individuals start small businesses, receive quality education, and improve their living conditions.
                </p>
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    handleClick('learn-more');
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:from-blue-700 hover:to-purple-700 mt-6 font-poppins"
                >
                  Learn More About Us
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Future Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent text-center mb-12 font-poppins">
            Our Future Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 font-poppins">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Rural Financial Inclusion
              </h3>
              <p className="text-gray-600 mb-4">
                Expanding our microfinance services to reach 50 more rural villages, providing access to financial services for communities without banking facilities.
              </p>
              <div className="h-2 w-full bg-gray-100 rounded-full mt-4">
                <div className="h-full w-3/5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>Planning Phase</span>
                <span>60% Complete</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 font-poppins">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Digital Literacy Centers
              </h3>
              <p className="text-gray-600 mb-4">
                Establishing 10 digital literacy centers in underserved communities to bridge the technology gap and provide skills for the digital economy.
              </p>
              <div className="h-2 w-full bg-gray-100 rounded-full mt-4">
                <div className="h-full w-2/5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>Development</span>
                <span>40% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .border-gradient-wrapper {
          position: relative;
          background: white;
          border-radius: 1rem;
        }

        .border-gradient {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #6366f1, #a855f7, #3b82f6);
          content: '';
          z-index: 0;
          border-radius: 1rem;
          mask: 
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          mask-clip: border-box, border-box;
          padding: 2px;
        }
      `}</style>
    </div>
  );
};

export default EngrossFoundation;