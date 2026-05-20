import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, Users, Leaf, Heart, Monitor, 
  Lightbulb, Shield, Briefcase, Activity, Target, 
  Handshake, CheckCircle, Search, 
  ChevronRight, Landmark, Share2, Award, Globe, Zap, Mail
} from 'lucide-react';

// Images
import heroImg from '../assets/image/WebSite Photos/5.jpeg';
import aboutImg1 from '../assets/image/WebSite Photos/7.jpeg';
import aboutImg2 from '../assets/image/WebSite Photos/10.jpeg';
import impactImg1 from '../assets/image/WebSite Photos/8.jpeg';
import impactImg2 from '../assets/image/WebSite Photos/9.jpeg';

// Animated Counter component
const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
        setCount(Math.floor(easeOutExpo(progress) * end));
        if (progress < 1) {
          window.requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-poppins text-gray-800">
      
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/60 to-purple-900/80 z-10"></div>
          <img src={heroImg} alt="NGO Fieldwork" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-6 text-sm font-medium">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-400">About Us</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            About Engross Foundation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 mb-10 leading-relaxed"
          >
            Committed to inclusive and sustainable development through research, innovation, welfare, and community empowerment.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button onClick={() => navigate('/projects')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg flex items-center gap-2 border border-blue-600 hover:border-blue-700">
              Explore Projects <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('/volunteer')} className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
              Join Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Organization Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Who We Are</h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Engross Foundation is a registered Indian Trust established by highly qualified professionals with extensive experience in development practice and social innovation.
                </p>
                <p>
                  The Foundation works towards inclusive and sustainable development through welfare programmes, research, education, training, counselling, livelihood development, and community empowerment initiatives.
                </p>
                <p>
                  The organization actively promotes awareness of government schemes and supports vulnerable communities through evidence-based interventions and strategic partnerships.
                </p>
              </div>
              
              {/* Stats within intro */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {[
                  { num: 50, label: "Projects Completed", suffix: "+" },
                  { num: 20, label: "States Covered", suffix: "+" },
                  { num: 10000, label: "Survey Participants", suffix: "+" },
                  { num: 500, label: "Volunteers Engaged", suffix: "+" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-5 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="text-3xl font-bold text-blue-700 mb-2">
                      <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4 relative">
              <img src={aboutImg1} alt="NGO Fieldwork" className="rounded-[2rem] shadow-xl w-full h-80 object-cover transform translate-y-8 hover:scale-[1.03] transition-transform duration-500" />
              <img src={aboutImg2} alt="Our Team" className="rounded-[2rem] shadow-xl w-full h-80 object-cover hover:scale-[1.03] transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Vision & Mission Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700"><Globe size={180} /></div>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-white/20 group-hover:-translate-y-2 transition-transform">
                <Target className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Our Vision</h3>
              <div className="bg-white/10 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <p className="text-blue-50 text-lg leading-relaxed">
                  To build an inclusive and sustainable society anchored in research and evidence-based development, ensuring that every individual—especially vulnerable and marginalized communities—has equitable access to opportunities, resources, and support systems for a dignified life.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700"><Lightbulb size={180} /></div>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-white/20 group-hover:-translate-y-2 transition-transform">
                <Activity className="w-10 h-10 text-emerald-300" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Our Mission</h3>
              <div className="bg-white/10 rounded-2xl p-8 border border-white/10 backdrop-blur-sm space-y-4">
                <p className="text-emerald-50 text-lg leading-relaxed">
                  To promote inclusive and sustainable development through research-driven and evidence-based interventions that strengthen livelihoods, enhance skills, and build resilient communities.
                </p>
                <p className="text-emerald-50 text-lg leading-relaxed">
                  Engross Foundation aims to improve access to opportunities, institutional support, and development programmes while generating actionable insights to strengthen public policies and social initiatives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Core Objectives Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Core Objectives</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Search />, title: "Research-Based Inclusive Development", desc: "Design and implement equitable development programmes based on research and evidence." },
              { icon: <Briefcase />, title: "Livelihood Enhancement", desc: "Promote sustainable livelihoods, entrepreneurship, and skill development." },
              { icon: <Landmark />, title: "Resource Accessibility", desc: "Improve access to government schemes, institutional support, and essential services." },
              { icon: <Shield />, title: "Community Resilience", desc: "Strengthen communities against social, economic, and environmental challenges." },
              { icon: <Heart />, title: "Health & Well-being", desc: "Promote public health awareness and preventive healthcare initiatives." },
              { icon: <Leaf />, title: "Environmental Sustainability", desc: "Encourage eco-friendly and organic practices for sustainable development." },
              { icon: <Users />, title: "Capacity Building", desc: "Provide training, workshops, and behavioural development programmes." },
              { icon: <Activity />, title: "Research & Policy Support", desc: "Conduct monitoring, evaluation, impact assessment, and consultancy services." },
              { icon: <Share2 />, title: "Knowledge Dissemination", desc: "Generate awareness and support informed decision-making." }
            ].map((obj, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-gray-100">
                  {React.cloneElement(obj.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{obj.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Approach Section */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Approach</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-[95%] w-1.5 bg-blue-200 rounded-full top-6"></div>
            
            <div className="space-y-16">
              {[
                { icon: <Handshake />, title: "Collaborative Partnerships", desc: "Building partnerships with government bodies, institutions, NGOs, and corporate stakeholders." },
                { icon: <Leaf />, title: "Sustainable Engagement", desc: "Focusing on long-term interventions and community trust-building." },
                { icon: <Award />, title: "Professional & Ethical Leadership", desc: "Ensuring transparency, professionalism, and high-quality programme execution." },
                { icon: <Users />, title: "Community-Centered Development", desc: "Designing programmes based on real community needs and participation." },
                { icon: <Zap />, title: "Empowerment & Self-Reliance", desc: "Helping communities build leadership, awareness, and institutional capacity." }
              ].map((approach, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12 mb-6 md:mb-0">
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {React.cloneElement(approach.icon, { size: 32 })}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{approach.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center transform transition-transform hover:scale-125">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why It Matters Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative grid grid-cols-2 gap-6">
              <img src={impactImg1} alt="Impact Fieldwork 1" className="rounded-3xl shadow-2xl w-full h-96 object-cover transform -translate-y-8 hover:scale-[1.02] transition-transform duration-500" />
              <img src={impactImg2} alt="Impact Fieldwork 2" className="rounded-3xl shadow-2xl w-full h-96 object-cover transform translate-y-8 hover:scale-[1.02] transition-transform duration-500" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">Why It Matters</h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-10 rounded-full"></div>
              <div className="space-y-8 text-xl text-gray-700 leading-relaxed font-light">
                <p>
                  Through a multi-sectoral and evidence-based approach, Engross Foundation works to create sustainable social impact by strengthening communities, empowering vulnerable populations, and improving access to opportunities and support systems.
                </p>
                <p>
                  The organization believes that long-term development requires collaboration, participation, research, and inclusive growth strategies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Recognition & Certifications Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Certifications</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-16"></div>
          
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { title: "Recognised by MCA", icon: <Landmark className="w-14 h-14 text-blue-600" />, color: "border-blue-200 bg-blue-50" },
              { title: "Recognised by NITI Aayog", icon: <Shield className="w-14 h-14 text-emerald-600" />, color: "border-emerald-200 bg-emerald-50" },
              { title: "ISO 9001:2015 Certified Organisation", icon: <CheckCircle className="w-14 h-14 text-purple-600" />, color: "border-purple-200 bg-purple-50" }
            ].map((cert, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className={`flex flex-col items-center p-10 rounded-[2rem] border-2 ${cert.color} shadow-sm bg-white hover:shadow-xl hover:-translate-y-2 transition-all w-72 group`}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{cert.icon}</div>
                <h4 className="font-bold text-gray-800 text-center text-lg">{cert.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Team / Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Leadership</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Leadership Member", role: "Founder & Director", initials: "FD" },
              { name: "Leadership Member", role: "Head of Research", initials: "HR" },
              { name: "Leadership Member", role: "Operations Head", initials: "OH" }
            ].map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group"
              >
                <div className="h-56 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10">
                    <span className="text-4xl font-bold text-blue-300">{member.initials}</span>
                  </div>
                </div>
                <div className="p-10 text-center bg-white relative z-20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-6 text-lg">{member.role}</p>
                  <div className="w-16 h-1.5 bg-gray-200 mx-auto rounded-full group-hover:bg-blue-600 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '50px 50px' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-md">
            Join Us in Creating Social Impact
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-light">
            Become part of our mission to empower communities, support vulnerable populations, and promote sustainable development across India.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => navigate('/volunteer')} className="bg-white text-blue-700 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Users className="w-6 h-6" /> Join Us
            </button>
            <button onClick={() => navigate('/donate')} className="bg-emerald-500 text-white hover:bg-emerald-600 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Heart className="w-6 h-6" /> Donate Now
            </button>
            <button onClick={() => navigate('/contact')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Mail className="w-6 h-6" /> Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}