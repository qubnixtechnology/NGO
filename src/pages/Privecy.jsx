import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import privacy from '../assets/footer/Privacy Policy.json';

const Privacy = () => {
  const [policyData, setPolicyData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        // Simulate API call - replace with your actual endpoint
        // const response = await axios.post('https://admin.engrossfoundation.com/api/privacy-policy');
        // if (response.data.status === 200 && response.data.data.length > 0) {
        //   setPolicyData(response.data.data[0].privacy_policy);
        // } else {
        //   setPolicyData('<p>No privacy policy available at the moment.</p>');
        // }
        
        // Simulated response for demo
        await new Promise(resolve => setTimeout(resolve, 1500));
        setPolicyData(`
          <div class="privacy-content">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-center border-b-4 border-blue-500 pb-4">Privacy Policy</h1>
            <p class="text-lg mb-4"><strong class="text-blue-700">Effective Date:</strong> July 19, 2025</p>
            <p class="text-lg mb-8"><strong class="text-blue-700">Last Updated:</strong> July 19, 2025</p>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">1. Introduction</h2>
            <p class="mb-6 text-justify leading-relaxed">Welcome to Engross Foundation ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and related services.</p>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">2. Information We Collect</h2>
            <h3 class="text-2xl font-semibold text-blue-600 mb-3 mt-6">2.1 Personal Information</h3>
            <p class="mb-4 text-justify leading-relaxed">We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
            <ul class="list-disc ml-8 mb-6 space-y-2">
              <li class="leading-relaxed">Name and contact information (email address, phone number)</li>
              <li class="leading-relaxed">Account credentials and authentication data</li>
              <li class="leading-relaxed">Payment and billing information</li>
              <li class="leading-relaxed">Professional information (company name, job title)</li>
              <li class="leading-relaxed">Communication preferences</li>
            </ul>
            
            <h3 class="text-2xl font-semibold text-blue-600 mb-3 mt-6">2.2 Technical Information</h3>
            <p class="mb-4 text-justify leading-relaxed">We automatically collect certain technical information when you use our services:</p>
            <ul class="list-disc ml-8 mb-6 space-y-2">
              <li class="leading-relaxed">IP addresses and device identifiers</li>
              <li class="leading-relaxed">Browser type and version</li>
              <li class="leading-relaxed">Operating system information</li>
              <li class="leading-relaxed">API usage logs and performance metrics</li>
              <li class="leading-relaxed">Service interaction data</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">3. How We Use Your Information</h2>
            <p class="mb-4 text-justify leading-relaxed">We use the collected information for the following purposes:</p>
            <ul class="list-disc ml-8 mb-6 space-y-2">
              <li class="leading-relaxed"><strong class="text-blue-700">Service Provision:</strong> To provide, maintain, and improve our services platform</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Authentication:</strong> To verify your identity and secure your account</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Communication:</strong> To send you service-related notifications and updates</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Analytics:</strong> To analyze usage patterns and optimize our services</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Compliance:</strong> To comply with legal obligations and protect our rights</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">4. Data Sharing and Disclosure</h2>
            <p class="mb-4 text-justify leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul class="list-disc ml-8 mb-6 space-y-2">
              <li class="leading-relaxed"><strong class="text-blue-700">Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Legal Requirements:</strong> When required by law or to protect our legal rights</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">5. Data Security</h2>
            <p class="mb-4 text-justify leading-relaxed">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:</p>
            <ul class="list-disc ml-8 mb-6 space-y-2">
              <li class="leading-relaxed">Encryption of data in transit and at rest</li>
              <li class="leading-relaxed">Regular security assessments and updates</li>
              <li class="leading-relaxed">Access controls and authentication protocols</li>
              <li class="leading-relaxed">Employee training on data protection practices</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">6. Data Retention</h2>
            <p class="mb-6 text-justify leading-relaxed">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.</p>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">7. Your Rights</h2>
            <p class="mb-4 text-justify leading-relaxed">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul class="list-disc ml-8 mb-6 space-y-2">
              <li class="leading-relaxed"><strong class="text-blue-700">Access:</strong> Request access to your personal information</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Correction:</strong> Request correction of inaccurate information</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Deletion:</strong> Request deletion of your personal information</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Portability:</strong> Request a copy of your data in a portable format</li>
              <li class="leading-relaxed"><strong class="text-blue-700">Objection:</strong> Object to certain processing of your information</li>
            </ul>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">8. International Data Transfers</h2>
            <p class="mb-6 text-justify leading-relaxed">Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.</p>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">9. Children's Privacy</h2>
            <p class="mb-6 text-justify leading-relaxed">Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">10. Updates to This Policy</h2>
            <p class="mb-6 text-justify leading-relaxed">We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.</p>
            
            <h2 class="text-3xl font-bold text-blue-700 mb-4 mt-8 border-l-4 border-blue-500 pl-4">11. Contact Us</h2>
            <p class="mb-4 text-justify leading-relaxed">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p class="mb-2"><strong class="text-blue-800">Engross Foundation</strong></p>
              <p class="mb-2">Email: <a href="mailto:engrossfoundation@gmail.com" class="text-blue-700 hover:text-blue-800 underline hover:no-underline transition-all duration-200">engrossfoundation@gmail.com</a></p>
              <p class="mb-2">Address: Regd. Office: HN – 16 Satyam City, Dipti Khera, Para Ring Road, Lucknow - 226017, Opp. RB Public School; Head Office: 207/14, Prakash Muhalla, East of Kailash, New Delhi - 110065</p>
              <p>Phone:+91 9718666900</p>
            </div>
            
            <p class="italic text-gray-600 text-center bg-gray-50 p-4 rounded-lg"><em>By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.</em></p>
          </div>
        `);
      } catch (error) {
        console.error('Error fetching privacy policy:', error);
        setPolicyData('<p class="text-red-600 text-center">Unable to fetch the privacy policy. Please try again later.</p>');
      } finally {
        setLoading(false);
      }
    };

    fetchPolicy();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: privacy,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen font-[Poppins] px-4 sm:px-6 md:px-8 py-12 md:py-4">
      {/* Lottie Animation Header */}
      <div className="flex justify-center mb-8">
        <Lottie 
          options={defaultOptions}
          height={window.innerWidth < 640 ? 180 : 250}
          width={window.innerWidth < 640 ? 180 : 250}
        />
      </div>
      
      {/* Title Section */}
      {/* <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Privacy Policy
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Our commitment to protecting your privacy and ensuring the security of your personal information
        </p>
      </div> */}
      
      {/* Content Container */}
      <div className="container mx-auto bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse text-center w-full px-8">
              <div className="h-8 bg-gray-200 rounded-full w-2/3 mx-auto mb-6"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-full w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-full w-5/6 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-full w-2/3 mx-auto mb-8"></div>
              
              <div className="h-6 bg-gray-200 rounded-full w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/4 mx-auto mb-3"></div>
              <div className="h-4 bg-gray-200 rounded-full w-2/3 mx-auto mb-3"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/5 mx-auto mb-3"></div>
              
              <div className="h-6 bg-gray-200 rounded-full w-2/5 mx-auto mb-4 mt-8"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/4 mx-auto mb-3"></div>
              <div className="h-4 bg-gray-200 rounded-full w-5/6 mx-auto mb-3"></div>
              <div className="h-4 bg-gray-200 rounded-full w-2/3 mx-auto"></div>
            </div>
          </div>
        ) : (
          <div
            className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose px-6 py-10 md:px-10 md:py-12 space-y-3 md:space-y-4 styled-content"
            dangerouslySetInnerHTML={{ __html: policyData }}
          />
        )}
      </div>
      
      {/* Quick Navigation */}
      {!loading && (
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <span className="mr-2">→</span> Terms of Service
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <span className="mr-2">→</span> Cookie Policy
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <span className="mr-2">→</span> Data Processing Agreement
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <span className="mr-2">→</span> GDPR Compliance
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <span className="mr-2">→</span> Security Practices
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <span className="mr-2">→</span> Contact Support
              </a>
            </div>
          </div>
        </div>
      )}
      
      {/* Last Updated Footer */}
      <div className="text-center mt-16 text-sm text-gray-500">
        <p>This policy was last updated on July 19, 2025</p>
      </div>
    </div>
  );
};

export default Privacy;