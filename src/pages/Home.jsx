import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, BookOpen, Users, Leaf, Heart, Monitor, 
  Lightbulb, Shield, Briefcase, Activity, Target, 
  Network, MessageSquare, Handshake, CheckCircle, Search
} from 'lucide-react';

// Import local images
import slide1Img from '../assets/image/WebSite Photos/1.jpeg';
import slide2Img from '../assets/image/WebSite Photos/6.jpeg';
import slide3Img from '../assets/image/WebSite Photos/9.jpeg';
import aboutImg from '../assets/image/WebSite Photos/7.jpeg';
import founderImg from '../assets/image/WebSite Photos/10.jpeg'; // For team image
import volunteerImg from '../assets/image/WebSite Photos/11.jpeg';
import fund1Img from '../assets/image/WebSite Photos/2.jpeg';
import fund2Img from '../assets/image/WebSite Photos/3.jpeg';
import fund3Img from '../assets/image/WebSite Photos/4.jpeg';
import impactImg from '../assets/image/WebSite Photos/8.jpeg'; // For why it matters

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
        
        // easeOutExpo function for smooth deceleration
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

export default function Home() {
  const navigate = useNavigate();

  // 1. Hero Banner Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Empowering Communities Through Research & Development",
      subtitle: "Promoting inclusive and sustainable development through evidence-based interventions, research, and community participation.",
      image: slide1Img,
      buttons: [
        { text: "Donate Now", path: "/donate", primary: true },
        { text: "Join Us", path: "/volunteer", primary: false }
      ]
    },
    {
      title: "Supporting Mental Health & Disaster Recovery",
      subtitle: "Providing psychological support, rehabilitation services, and resilience-building programmes for vulnerable communities.",
      image: slide2Img,
      buttons: [
        { text: "Support a Cause", path: "/donate", primary: true },
        { text: "Learn More", path: "/about", primary: false }
      ]
    },
    {
      title: "Building Sustainable Livelihood Opportunities",
      subtitle: "Strengthening livelihoods, entrepreneurship, and skill development for marginalized communities across India.",
      image: slide3Img,
      buttons: [
        { text: "Explore Projects", path: "/projects", primary: true },
        { text: "Become a Volunteer", path: "/volunteer", primary: false }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins text-gray-800">
      
      {/* 1. Hero Banner Slider */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {slides[currentSlide].buttons.map((btn, idx) => (
                  <button 
                    key={idx}
                    onClick={() => navigate(btn.path)}
                    className={`${btn.primary 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 hover:border-blue-700' 
                      : 'bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-blue-900 text-white'} 
                      px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}
                  >
                    {btn.text} {btn.primary && <ArrowRight className="w-5 h-5" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-blue-500 w-8' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Professional Statistics Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 50, label: "Projects Completed", icon: <CheckCircle className="w-8 h-8"/>, suffix: "+" },
              { num: 20, label: "States Covered", icon: <Network className="w-8 h-8"/>, suffix: "+" },
              { num: 10000, label: "Survey Participants", icon: <Users className="w-8 h-8"/>, suffix: "+" },
              { num: 500, label: "Volunteers Engaged", icon: <Heart className="w-8 h-8"/>, suffix: "+" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-blue-50 p-6 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-200"
              >
                <div className="text-blue-600 flex justify-center mb-4 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Engross Foundation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-blue-900">About Engross Foundation</h2>
              <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Engross Foundation is a registered Indian Trust established by experienced professionals committed to inclusive and sustainable development through research, welfare, education, training, counselling, and livelihood development.
                </p>
                <p>
                  The organization works to strengthen vulnerable communities through evidence-based interventions, strategic partnerships, and long-term community engagement programmes.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <button 
                  onClick={() => navigate('/about')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md flex items-center gap-2 group"
                >
                  Read More 
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/projects')}
                  className="bg-purple-50 hover:bg-purple-100 text-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 border border-purple-200"
                >
                  Explore Projects
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative grid grid-cols-2 gap-4"
            >
              <img 
                src={aboutImg} 
                alt="NGO Impact" 
                className="rounded-3xl shadow-xl w-full h-72 object-cover transform translate-y-8 hover:scale-105 transition-transform duration-500"
              />
              <img 
                src={founderImg} 
                alt="Our Team" 
                className="rounded-3xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To build an inclusive and sustainable society where every individual has equitable access to opportunities, resources, and support systems for a dignified life.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To promote research-driven and evidence-based development programmes that strengthen livelihoods, enhance skills, and build resilient communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Core Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Core Objectives</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users />, title: "Inclusive Development", desc: "Promote equitable and research-based development programmes." },
              { icon: <Briefcase />, title: "Livelihood Enhancement", desc: "Support sustainable livelihood opportunities and entrepreneurship." },
              { icon: <Shield />, title: "Community Resilience", desc: "Strengthen resilience against social and environmental challenges." },
              { icon: <Heart />, title: "Health & Well-being", desc: "Improve public health and hygiene awareness." },
              { icon: <Leaf />, title: "Environmental Sustainability", desc: "Promote eco-friendly and organic practices." },
              { icon: <Monitor />, title: "Skill Development", desc: "Provide vocational training and capacity-building programmes." },
              { icon: <Search />, title: "Research & Policy Support", desc: "Conduct monitoring, evaluation, and consultancy services." },
              { icon: <BookOpen />, title: "Knowledge Dissemination", desc: "Enhance awareness and informed decision-making." }
            ].map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {obj.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{obj.title}</h3>
                <p className="text-gray-600 leading-relaxed">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">What We Do</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
            </div>
            <button 
              onClick={() => navigate('/what-we-do')}
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 group"
            >
              View All Services <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Research & Survey", desc: "Impact assessments, FGDs, baseline and endline surveys.", color: "from-blue-500 to-cyan-500" },
              { title: "Livelihood Development", desc: "Economic empowerment and entrepreneurship support.", color: "from-emerald-500 to-teal-500" },
              { title: "Skill Development", desc: "Training, workshops, and employability programmes.", color: "from-purple-500 to-pink-500" },
              { title: "Mental Health Support", desc: "Counselling and psychosocial support initiatives.", color: "from-orange-500 to-red-500" },
              { title: "Disaster Management", desc: "Emergency response and rehabilitation programmes.", color: "from-blue-600 to-indigo-600" },
              { title: "Community Development", desc: "Awareness campaigns and welfare initiatives.", color: "from-green-500 to-emerald-600" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate('/what-we-do')}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 transition-opacity group-hover:opacity-100`}></div>
                <div className="relative p-8 h-full flex flex-col justify-between min-h-[250px]">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 transform group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed text-lg">{service.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn More <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Approach Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Approach</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {[
              { icon: <Handshake />, title: "Collaborative Partnerships", desc: "Working with institutions and government bodies." },
              { icon: <Leaf />, title: "Sustainable Engagement", desc: "Long-term community-focused interventions." },
              { icon: <Users />, title: "Professional Leadership", desc: "Ethical and research-driven programme implementation." },
              { icon: <Heart />, title: "Community-Centered Work", desc: "Inclusive and participatory development planning." },
              { icon: <Target />, title: "Empowerment & Self-Reliance", desc: "Building leadership and community ownership." }
            ].map((approach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-600 hover:border-blue-600 cursor-pointer transition-all duration-300 border border-gray-100 h-full flex flex-col group"
              >
                <div className="text-blue-600 mb-6 group-hover:text-white group-hover:scale-110 transform transition-all duration-300 origin-left">
                  {React.cloneElement(approach.icon, { size: 48 })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">{approach.title}</h3>
                <p className="text-gray-600 text-lg group-hover:text-blue-50 transition-colors duration-300 leading-relaxed">{approach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
            </div>
            <button 
              onClick={() => navigate('/projects')}
              className="bg-purple-50 hover:bg-purple-100 text-purple-700 px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 group"
            >
              View All Projects <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HCL Foundation PRI Project", desc: "Impact assessment and stakeholder consultation in Hardoi, Uttar Pradesh." },
              { title: "Skill Gap Study", desc: "PAN India survey and assessment for the textile sector." },
              { title: "Tea Consumption Survey", desc: "17-state national survey for Tea Board Kolkata." },
              { title: "Safi Sathi Project", desc: "UNDP-supported impact assessment across multiple states." }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-purple-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col"
                onClick={() => navigate('/projects')}
              >
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <Activity size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{project.desc}</p>
                <button className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Report <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Crowd Funding Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Support Our Causes</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mental Health & Disaster Support Fund", desc: "Provide emergency mental healthcare and rehabilitation support.", img: fund1Img },
              { title: "School Mental Health Initiative", desc: "Support counselling programmes for school students.", img: fund2Img },
              { title: "Child Rights Protection Initiative", desc: "Promote child safety awareness and protection mechanisms.", img: fund3Img }
            ].map((campaign, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100"
              >
                <div className="h-56 relative overflow-hidden">
                  <img src={campaign.img} alt={campaign.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-blue-600 rounded-full uppercase tracking-wider shadow-md">
                    Cause
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{campaign.title}</h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{campaign.desc}</p>
                  </div>
                  <div className="space-y-3 mt-auto">
                    <button onClick={() => navigate('/donate')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                      Donate Now
                    </button>
                    <button onClick={() => navigate('/donate')} className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-4 rounded-xl transition-colors">
                      Support This Cause
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Why It Matters Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">Why It Matters</h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                Through evidence-based interventions and collaborative community engagement, Engross Foundation aims to create sustainable social impact, strengthen systems, and improve access to opportunities for vulnerable populations.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] transform rotate-3 scale-105 opacity-20"></div>
              <img src={impactImg} alt="Impact Fields" className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. Volunteer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
            <div className="md:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Become a Volunteer</h2>
              <p className="text-xl text-teal-50 leading-relaxed mb-10">
                Join our network of volunteers, interns, members, and enumerators working together to create meaningful social impact across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => navigate('/volunteer')} className="bg-white hover:bg-teal-50 text-teal-700 px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl">
                  Join Us
                </button>
                <button onClick={() => navigate('/volunteer')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative z-10 w-full">
              <img src={volunteerImg} alt="Volunteers" className="rounded-3xl shadow-2xl w-full object-cover h-80 md:h-[400px] border-4 border-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* 12. Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What People Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: "Volunteer", text: "Working with Engross Foundation helped me gain practical experience in community development." },
              { type: "Research Associate", text: "The organization provides meaningful opportunities to contribute to real social impact." },
              { type: "Community Participant", text: "The awareness programmes positively impacted our community." }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-blue-50 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
              >
                <MessageSquare className="text-blue-200 w-16 h-16 absolute top-8 right-8 group-hover:scale-110 group-hover:text-blue-300 transition-all" />
                <p className="text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
                    {t.type.charAt(0)}
                  </div>
                  <div className="font-bold text-gray-900 text-lg">{t.type}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Contact CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '50px 50px' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight drop-shadow-md">
            Let’s Work Together for Social Change
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => navigate('/contact')} className="bg-white text-blue-700 hover:bg-gray-50 px-12 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              Contact Us
            </button>
            <button onClick={() => navigate('/donate')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-12 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl">
              Donate Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}