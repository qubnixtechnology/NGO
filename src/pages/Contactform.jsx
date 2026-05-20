import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import Bg from '../assets/home/copy.jpg';
import Empower from '../assets/home/contactimg.jpg';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Send email using EmailJS
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      };

      await emailjs.send(
        'service_3mac5pf', // Your EmailJS service ID
        'template_mtd0xqn', // Your EmailJS template ID
        templateParams,
        '-BU0rbXeVlCqy8tLn' // Your EmailJS user ID
      );

      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        message: ''
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-poppins min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      />
      
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 lg:px-16 gap-8 lg:gap-12">
        
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Contact Us for Empowering Lives
          </h1>
          <p className="text-white text-lg md:text-xl font-medium">
            Join us in making a difference in communities around the world
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-7xl">
          
          {/* Left side - Contact Form */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="bg-[#f5f3e8] bg-opacity-95 backdrop-blur-sm border-8 border-blue-600 w-[450px] lg:w-[600px] rounded-[40px] p-6 max-w-sm shadow-2xl">
              <div className="text-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">Get In Touch</h2>
                <p className="text-gray-600 text-sm">We'd love to hear from you</p>
              </div>
              
              <form className="space-y-3" onSubmit={handleSubmit}>
                {/* Full Name Field */}
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1 text-sm">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name Please"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1 text-sm">
                    Your Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Mobile Number Field */}
                <div>
                  <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1 text-sm">
                    Mobile No*
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Number please"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1 text-sm">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts here"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 px-4 rounded-full transition-all duration-300 text-sm transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-lg hover:shadow-xl'
                  } text-white`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Your Support'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center font-medium bg-green-50 p-2 rounded-lg text-xs">
                    Your message has been sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center font-medium bg-red-50 p-2 rounded-lg text-xs">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right side - Empower Image */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-[40px] opacity-20 transform rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-[350px] lg:h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-blue-600">
                <img
                  src={Empower}
                  alt="Empowering communities through support"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}