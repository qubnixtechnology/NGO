import React from 'react';
import TermsAnimation from '../assets/footer/Term & Condition.json';
import Lottie from 'lottie-react'; // Changed from react-lottie to lottie-react

function Terms() {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-4xl mx-auto">
        {/* Header Section with Lottie Animation */}
        <div className="text-center mb-8">
          <div className="w-full max-w-xs mx-auto mb-6">
            <Lottie 
              animationData={TermsAnimation} 
              loop={true}
              // The lottie-react package handles animation more cleanly
              style={{ height: '200px' }}
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          {/* <p className="text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using Engross Foundation platform
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p> */}
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8 border border-blue-100">
          
          {/* Section 1: Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-100 pb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the Engross Foundation platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Section 2: Donation Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-100 pb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              2. Donation Services
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Engross Foundation provides a platform for charitable donations to verified causes and organizations. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Facilitating secure online donations to registered charities</li>
                <li>Providing transparency in fund allocation and usage</li>
                <li>Offering tax-deductible donation receipts where applicable</li>
                <li>Connecting donors with verified charitable organizations</li>
              </ul>
            </div>
          </section>

          {/* Section 3: User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-100 pb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              3. User Responsibilities
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                As a user of Engross Foundation, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide accurate and truthful information</li>
                <li>Use the platform only for legitimate charitable purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the privacy and rights of other users</li>
                <li>Not engage in fraudulent or deceptive activities</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Payment and Donations */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-100 pb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              4. Payment and Donations
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                All donations made through our platform are processed securely. Please note:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Donations are generally non-refundable once processed</li>
                <li>Payment processing fees may apply as disclosed during checkout</li>
                <li>Tax receipts will be provided for eligible donations</li>
                <li>Currency conversions may apply for international donations</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Privacy and Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-100 pb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              5. Privacy and Data Protection
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to protecting your privacy. Your personal information is collected and used in accordance with our Privacy Policy. We implement appropriate security measures to protect your data and ensure secure transactions.
            </p>
          </section>

          {/* Section 6: Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-100 pb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Engross Foundation acts as an intermediary platform connecting donors with charitable organizations. While we verify organizations to the best of our ability, we are not liable for the actions of third-party charities or the ultimate use of donated funds beyond our platform.
            </p>
          </section>

          {/* Section 7: Modifications */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-100 pb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              7. Modifications to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Engross Foundation reserves the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of modified terms.
            </p>
          </section>

          {/* Section 8: Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-100 pb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              8. Contact Information
            </h2>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> engrossfoundation@gmail.com</p>
                <p><strong>Phone:</strong> +91 9718666900</p>
                <p><strong>Address:</strong> <br />
                  <strong>Regd. Office:</strong> HN – 16 Satyam City, Dipti Khera, Para Ring Road, Lucknow - 226017, Opp. RB Public School<br />
                  <strong>Head Office:</strong> 207/14, Prakash Muhalla, East of Kailash, New Delhi - 110065
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <span>Powered by</span>
            <span className="font-semibold text-blue-600">Engross Foundation</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Secure donations, transparent giving, lasting impact
          </p>
        </div>

      </div>
    </div>
  );
}

export default Terms;