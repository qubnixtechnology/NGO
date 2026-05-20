import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BilingualCharityPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white text-gray-800 font-poppins">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* Left Side - English Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Engross Foundation
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Engross Foundation is a registered Indian Trust established by a team of highly qualified professionals with extensive experience in development practice and social innovation. The Foundation is committed to fostering inclusive and sustainable development through a multidimensional approach encompassing welfare, social service, research, education, training, and capacity building.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              The organization works towards strengthening livelihoods, enhancing skills, and building community resilience, while actively promoting awareness of government policies and development programmes to ensure greater outreach and impact.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Engross Foundation’s key focus areas include health and hygiene, promotion of eco-friendly and organic practices, psychological support during disasters, post-disaster rehabilitation, and livelihood development for vulnerable and marginalized communities.
            </p>
            
            <button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/donate');
              }}
            >
              Join Our Mission
            </button>
          </div>
        </div>
        
        {/* Right Side - Hindi Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              एनग्रॉस फाउंडेशन के बारे में
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              एनग्रॉस फाउंडेशन एक पंजीकृत भारतीय ट्रस्ट है, जिसकी स्थापना विकास अभ्यास और सामाजिक नवाचार में व्यापक अनुभव रखने वाले उच्च योग्य पेशेवरों की एक टीम द्वारा की गई है। फाउंडेशन कल्याण, सामाजिक सेवा, अनुसंधान, शिक्षा, प्रशिक्षण और क्षमता निर्माण को शामिल करते हुए एक बहुआयामी दृष्टिकोण के माध्यम से समावेशी और सतत विकास को बढ़ावा देने के लिए प्रतिबद्ध है।
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              संगठन आजीविका को मजबूत करने, कौशल बढ़ाने और सामुदायिक लचीलापन बनाने की दिशा में काम करता है, साथ ही अधिक पहुंच और प्रभाव सुनिश्चित करने के लिए सरकारी नीतियों और विकास कार्यक्रमों के बारे में सक्रिय रूप से जागरूकता को बढ़ावा देता है।
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              एनग्रॉस फाउंडेशन के प्रमुख फोकस क्षेत्रों में स्वास्थ्य और स्वच्छता, पर्यावरण के अनुकूल और जैविक प्रथाओं को बढ़ावा देना, आपदाओं के दौरान मनोवैज्ञानिक सहायता, आपदा के बाद पुनर्वास, और कमजोर तथा हाशिए के समुदायों के लिए आजीविका विकास शामिल हैं।
            </p>
            
            <button 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/donate');
              }}
            >
              हमारे मिशन में शामिल हों
            </button>
          </div>
        </div>
      </div>
      
     
      <div className="mt-12">
        {/* CTA section with shadow instead of border */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Together We Can Make a Difference
            </h3>
            <p className="text-xl mb-8 text-gray-600 font-medium">
              Join us in our mission to create a more inclusive and compassionate society
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/donate');
                }}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}