import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Clock, Heart, Users, MessageCircle, 
  ChevronRight, CheckCircle, Facebook, Instagram, Linkedin, 
  Twitter, Youtube, Globe, Building, Award, HeartHandshake, ChevronDown
} from 'lucide-react';

import heroImg from '../assets/image/WebSite Photos/3.jpeg'; 

export default function ContactPage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Fake success popup
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const faqs = [
    {
      q: "How can I volunteer?",
      a: "Visit the Join Us page and submit the application form. We have opportunities across research, outreach, and awareness campaigns."
    },
    {
      q: "Can organizations collaborate with Engross Foundation?",
      a: "Yes, we welcome institutional and CSR partnerships to drive sustainable impact."
    },
    {
      q: "How can I donate?",
      a: "You can securely donate through our Donate page via multiple payment methods."
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", color: "bg-blue-600" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", color: "bg-pink-600" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", color: "bg-blue-700" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", color: "bg-sky-500" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", color: "bg-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins text-gray-800">
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] min-h-[650px] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-blue-900/90 z-10"></div>
          <img src={heroImg} alt="Contact Engross Foundation" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-6 text-sm font-medium">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-400">Contact Us</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Get in touch with Engross Foundation to collaborate, volunteer, support our initiatives, or learn more about our development programmes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/volunteer')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Join Us
            </button>
            <button onClick={() => navigate('/donate')} className="bg-white hover:bg-gray-50 text-blue-900 px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Donate Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Information Section & 5. Quick Contact Cards */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reach Out to Us</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Contact Cards */}
            <div className="space-y-6 lg:col-span-1">
              <motion.div whileHover={{ y: -5 }} className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-xl text-white shadow-md"><Mail className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Support</h4>
                  <a href="mailto:engrossfoundation@gmail.com" className="text-blue-600 font-medium hover:underline break-all">engrossfoundation@gmail.com</a>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-start gap-4">
                <div className="bg-emerald-600 p-3 rounded-xl text-white shadow-md"><Phone className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <a href="tel:+919718666900" className="text-emerald-600 font-medium hover:underline">+91 9718666900</a>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-purple-50 rounded-2xl p-6 border border-purple-100 flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-xl text-white shadow-md"><Clock className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-purple-700 font-medium text-sm">Monday – Saturday<br/>10:00 AM – 6:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* Office Addresses */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"><Building className="w-8 h-8 group-hover:text-white text-blue-600 transition-colors" /></div>
                  <h3 className="text-2xl font-bold text-gray-900">Registered Office</h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-800 transition-colors">
                  Lucknow (Uttar Pradesh)
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg relative overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 group-hover:bg-indigo-100 transition-colors"></div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-indigo-100 p-3 rounded-xl group-hover:bg-indigo-600 transition-colors duration-300"><Globe className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" /></div>
                    <h3 className="text-2xl font-bold text-gray-900">Head Office & Associates</h3>
                  </div>
                  {/* <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-800 transition-colors mb-6">
                    207/14, Prakash Muhalla,<br/>
                    East of Kailash,<br/>
                    New Delhi – 110065
                  </p> */}
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-bold text-indigo-600 mb-3 tracking-wider uppercase">Our Associates</h4>
                  <div className="flex flex-wrap gap-1 max-h-[160px] overflow-y-auto pr-1 custom-scrollbar">
                    {[
                      "Bhopal (MP)",
                      "Jaipur (Rajasthan)",
                      "US Nagar (Uttarakhand)",
                      "Hyderabad (Telangana & AP)",
                      "Bengaluru (Karnataka)",
                      "Chennai (TN)",
                      "Jammu (J&K)",
                      "Chandigarh (Punjab)",
                      "Shimla (HP)",
                      "Ahmedabad (Gujarat)",
                      "Nasik & Mumbai (Maharashtra)",
                      "Guwahati (Assam)",
                      "Shillong (Meghalaya)",
                      "Agartala (Tripura)",
                      "Kolkata (WB)",
                      "Kochi (Kerala)",
                      "Bhubaneswar (Odisha)"
                    ].map((associate, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-indigo-50/70 hover:bg-indigo-600 hover:text-white text-indigo-700 font-semibold px-2.5 py-1 rounded-lg border border-indigo-100/50 transition-all duration-200 cursor-default"
                      >
                        {associate}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Recognitions */}
          <div className="mt-16 bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-wrap justify-center gap-6 lg:gap-12">
            {[
              { text: "Recognised by MCA" },
              { text: "Recognised by NITI Aayog" },
              { text: "ISO 9001:2015 Certified Organisation" }
            ].map((rec, i) => (
              <div key={i} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-gray-800">{rec.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Form Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 relative" id="contact-form">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative">
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="absolute -top-16 left-0 right-0 bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg z-20"
                >
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-bold">Thank you for contacting Engross Foundation. We will reach out to you soon.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input required type="text" name="name" value={formState.name} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all hover:bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input required type="email" name="email" value={formState.email} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all hover:bg-white" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input required type="tel" name="phone" value={formState.phone} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all hover:bg-white" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <input required type="text" name="subject" value={formState.subject} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all hover:bg-white" placeholder="How can we help?" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea required name="message" value={formState.message} onChange={handleInputChange} rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none hover:bg-white" placeholder="Your message here..."></textarea>
              </div>
              <button disabled={isSubmitting} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                {isSubmitting ? <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : "Submit Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Map Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="bg-blue-600 text-white p-4 text-center font-bold text-lg">Registered Office (Lucknow)</div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14241.657929424843!2d80.893086!3d26.826727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0078832a75%3A0x6b4eb50e7a2b0eb!2sPara%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716301234568!5m2!1sen!2sin" 
                className="w-full h-[400px]" style={{ border: 0 }} allowFullScreen="" loading="lazy">
              </iframe>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="bg-indigo-600 text-white p-4 text-center font-bold text-lg">Head Office (New Delhi)</div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.606346252445!2d77.248694!3d28.551551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a811c7694f%3A0x334ebecfcb8dbd2c!2sEast%20Of%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110065!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin" 
                className="w-full h-[400px]" style={{ border: 0 }} allowFullScreen="" loading="lazy">
              </iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Social Media & 7. Collaboration Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Collaboration */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Partner With Engross Foundation</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
                We welcome partnerships with government agencies, institutions, corporates, NGOs, researchers, and community organizations to create sustainable social impact.
              </p>
              <div className="flex gap-4">
                <button onClick={() => navigate('/volunteer')} className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-all hover:scale-105">
                  Collaborate With Us
                </button>
                <button onClick={() => {document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}} className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all hover:scale-105">
                  Send Inquiry
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="text-blue-100 mb-8 font-light">Follow our journey and stay updated with our latest social impact initiatives.</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} className={`${social.color} text-white w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-${social.color.replace('bg-','')}/50`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`border ${activeFaq === i ? 'border-blue-300 shadow-md' : 'border-gray-200'} rounded-2xl overflow-hidden bg-white hover:border-blue-300 transition-all duration-300`}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === i ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <HeartHandshake className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let’s Build Sustainable Impact Together
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
            Connect with Engross Foundation to support research-driven development, community welfare, and inclusive social initiatives across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/volunteer')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Join Us
            </button>
            <button onClick={() => navigate('/donate')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Donate Now
            </button>
            <button onClick={() => navigate('/projects')} className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1">
              Explore Projects
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}