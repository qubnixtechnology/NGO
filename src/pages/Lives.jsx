import React from 'react';
import img from '../assets/home/momdaug.jpg'
import { useNavigate } from 'react-router-dom';

const EmpoweringLives = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-300 p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          Empowering Lives
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4 font-poppins">
          Join hands with us to ensure that undeserved and underprivileged children and people 
          can break free of the vicious cycle of poverty, ignorance and sufferings. Your donation 
          helps to make a difference in someone's lives and create hope on their lives
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* First Section - Children */}
        <div className="flex flex-col lg:flex-row items-center mb-8 md:mb-16 gap-6 md:gap-8">
          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop&crop=faces" 
                alt="Children looking through window" 
                className="rounded-xl shadow-lg w-full max-w-md h-64 md:h-72 object-cover"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/3 lg:pl-8">
            <p className="text-gray-800 text-base md:text-lg text-justify font-poppins">
              <span className="font-poppins font-semibold">Engross Foundation</span> committed to the vision for a happy, 
              healthy and creative childhood for every children. Your donations are helping to 
              provide education and opportunities for children who needs your support.
            </p>
          </div>
        </div>

        {/* Second Section - Elderly */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-8">
          {/* Image - Updated to use the imported image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <img 
                src={img} 
                alt="Elderly people receiving care" 
                className="rounded-xl shadow-lg w-full max-w-md h-64 md:h-72 object-cover"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/3 lg:pr-8">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify font-poppins">
              It is really sad to see old people being abandoned by their families. In the last leg of their lives the 
              experience neglect, financial crisis and other medical psychological concern. <span className="font-semibold">Engross Foundation</span> create charity platform that works for the benefit of these elderly, in order to 
              provide care and attention and making them self sufficient and independent.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 md:mt-16">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 text-lg"
        onClick={()=>{
          window.scrollTo(0, 0);
          navigate('/donate');
        }}>
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default EmpoweringLives;