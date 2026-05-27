import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, Users, Leaf, Heart, Briefcase, Activity, 
  Handshake, CheckCircle, Search, ChevronRight, Globe, 
  BarChart, Lightbulb, ShieldCheck, Mail, Target, Volume2
} from 'lucide-react';

// Hero & Intro static images
import heroImg from '../assets/image/WebSite Photos/6.jpeg';
import introImg from '../assets/image/aboutus.jpeg';

// Import new photos from src/assets/image/wedo
import wedo1 from '../assets/image/wedo/wedo1.png';
import wedo2 from '../assets/image/wedo/wedo2.png';
import wedo3 from '../assets/image/wedo/wedo3.png';
import wedo4 from '../assets/image/wedo/wedo4.png';
import wedo5 from '../assets/image/wedo/wedo5.png';
import wedo6 from '../assets/image/wedo/wedo6.png';
import wedo7 from '../assets/image/wedo/wedo7.png';
import wedo8ii from '../assets/image/wedo/wedo8ii.png';
import wedo9 from '../assets/image/wedo/wedo9.png';

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

export default function WhatWeDo() {
  const navigate = useNavigate();

  // 9 sectors according to user text & images
  const domains = [
    {
      id: "research",
      title: "Research, Survey & Impact Assessment",
      content: "We conduct rigorous research, baseline and endline surveys, and impact assessments to understand community needs and evaluate programme effectiveness. Our evidence-based insights support better planning, policy formulation, and implementation.",
      services: [
        "Baseline surveys", "Endline surveys", "Impact assessments", 
        "FGDs", "Monitoring & evaluation", "Stakeholder consultations", 
        "Household surveys", "Social research", "Data collection", "Policy analysis"
      ],
      image: wedo1,
      icon: <Search className="w-10 h-10 text-indigo-600" />,
      colorTheme: "text-indigo-600",
      bgTheme: "bg-indigo-50",
      reverse: false
    },
    {
      id: "livelihood",
      title: "Livelihood & Economic Development",
      content: "We promote sustainable livelihood opportunities by supporting skill-based employment, entrepreneurship, and micro-enterprises. Our initiatives aim to enhance income generation and economic resilience among vulnerable communities.",
      services: [
        "Skill-based employment", "Entrepreneurship support", 
        "Micro-enterprise development", "Economic empowerment initiatives", "Livelihood enhancement programs"
      ],
      image: wedo2,
      icon: <Briefcase className="w-10 h-10 text-amber-600" />,
      colorTheme: "text-amber-600",
      bgTheme: "bg-amber-50",
      reverse: true
    },
    {
      id: "skill",
      title: "Skill Development & Capacity Building",
      content: "We provide vocational training, employability skills, and capacity-building programmes for individuals and institutions. Our training interventions are designed to enhance skills, confidence, and long-term self-reliance.",
      services: [
        "Vocational training", "Employability programmes", 
        "Capacity-building workshops", "Behavioural development sessions", "Leadership development training"
      ],
      image: wedo3,
      icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
      colorTheme: "text-blue-600",
      bgTheme: "bg-blue-50",
      reverse: false
    },
    {
      id: "health",
      title: "Health, Hygiene & Mental Well-being",
      content: "We work to improve community health through awareness campaigns, preventive healthcare initiatives, and hygiene promotion. We also provide mental health and psychosocial support, especially during crisis situations.",
      services: [
        "Counselling services", "School mental health programmes", 
        "Psychological support", "Preventive healthcare", "Hygiene promotion", "Health awareness camps"
      ],
      image: wedo4,
      icon: <Heart className="w-10 h-10 text-rose-600" />,
      colorTheme: "text-rose-600",
      bgTheme: "bg-rose-50",
      reverse: true
    },
    {
      id: "disaster",
      title: "Disaster Management & Rehabilitation",
      content: "Our disaster response initiatives include preparedness, emergency relief, psychological support, and post-disaster rehabilitation. We focus on building resilient communities capable of responding to and recovering from crises.",
      services: [
        "Emergency relief support", "Psychological first aid", 
        "Post-disaster rehabilitation", "Community resilience programmes", "Recovery support initiatives"
      ],
      image: wedo5,
      icon: <ShieldCheck className="w-10 h-10 text-emerald-600" />,
      colorTheme: "text-emerald-600",
      bgTheme: "bg-emerald-50",
      reverse: false
    },
    {
      id: "community",
      title: "Social Welfare & Community Development",
      content: "We implement welfare programmes aimed at empowering marginalized groups, including women, children, and youth. Our efforts focus on social inclusion, equity, and community participation.",
      services: [
        "Women empowerment", "Child welfare", 
        "Youth development", "Social inclusion", "Awareness generation"
      ],
      image: wedo6,
      icon: <Users className="w-10 h-10 text-purple-600" />,
      colorTheme: "text-purple-600",
      bgTheme: "bg-purple-50",
      reverse: true
    },
    {
      id: "advocacy",
      title: "Awareness, Advocacy & Public Engagement",
      content: "We conduct awareness campaigns and outreach programmes to promote government schemes, rights, and entitlements. Our advocacy efforts aim to bridge information gaps and enhance access to public services.",
      services: [
        "Advocacy campaigns", "Government schemes awareness", 
        "Rights & entitlements outreach", "Community engagement events", "Information gap bridging"
      ],
      image: wedo7,
      icon: <Volume2 className="w-10 h-10 text-orange-600" />,
      colorTheme: "text-orange-600",
      bgTheme: "bg-orange-50",
      reverse: false
    },
    {
      id: "environment",
      title: "Environmental Sustainability & Organic Practices",
      content: "We promote eco-friendly practices, organic farming, and sustainable resource management. Our initiatives encourage environmental conservation and climate-conscious community development.",
      services: [
        "Eco-friendly practices", "Organic farming", 
        "Climate-conscious development", "Sustainable resource management", "Environmental awareness programmes"
      ],
      image: wedo8ii,
      icon: <Leaf className="w-10 h-10 text-teal-600" />,
      colorTheme: "text-teal-600",
      bgTheme: "bg-teal-50",
      reverse: true
    },
    {
      id: "monitoring",
      title: "Monitoring, Evaluation & Policy Support",
      content: "We provide monitoring and evaluation services, policy research, and technical consultancy to improve the effectiveness and impact of development programmes and public policies.",
      services: [
        "Programme monitoring", "Evaluation studies", 
        "Policy research", "Consultancy services", "Technical support", "Impact analysis"
      ],
      image: wedo9,
      icon: <BarChart className="w-10 h-10 text-cyan-600" />,
      colorTheme: "text-cyan-600",
      bgTheme: "bg-cyan-50",
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-800">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[500px] md:h-[70vh] md:min-h-[600px] flex flex-col justify-start md:justify-center items-center overflow-hidden pt-28 pb-12 md:pt-24 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/60 to-purple-900/80 z-10"></div>
          <img src={heroImg} alt="NGO Fieldwork" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-6 md:mt-16">
          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-6 text-sm font-medium">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-400">What We Do</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            What We Do
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Promoting inclusive, equitable, and sustainable development through research-driven and evidence-based interventions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button onClick={() => navigate('/projects')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg flex items-center gap-2">
              Explore Projects <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('/volunteer')} className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:!text-blue-900 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
              Join Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction Section (We Do description) */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">We Do</h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                <p>
                  Engross Foundation works across multiple sectors to promote inclusive, equitable, and sustainable development through research-driven and evidence-based interventions. Our integrated approach focuses on strengthening communities, improving livelihoods, and supporting informed decision-making for long-term impact.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {[
                  { num: 50, label: "Projects", suffix: "+" },
                  { num: 30, label: "States", suffix: "+" },
                  { num: 10000, label: "Survey Samples", suffix: "+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 text-center">
                    <div className="text-4xl font-extrabold text-blue-700 mb-2">
                      <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-[2.5rem] transform rotate-3 scale-105 opacity-20 blur-lg"></div>
              <img src={introImg} alt="Our Impact" className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover relative z-10 hover:scale-[1.02] transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 to 11. Service Domains */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {domains.map((domain, index) => (
            <motion.div 
              key={domain.id} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${domain.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-white/50 ${domain.bgTheme}`}>
                  {domain.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{domain.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{domain.content}</p>
                
                <h4 className={`text-sm font-bold tracking-widest uppercase mb-6 ${domain.colorTheme}`}>Key Services & Initiatives</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {domain.services.map((service, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group cursor-default">
                      <CheckCircle className={`w-6 h-6 mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110 ${domain.colorTheme}`} />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image / Image Grid */}
              {domain.images ? (
                // Dual images layout for Sector 8
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute inset-0 rounded-[3rem] transform scale-105 opacity-50 blur-2xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-70 ${domain.bgTheme}`}></div>
                  <div className="row g-3 relative z-10">
                    <div className="col-6">
                      <img 
                        src={domain.images[0]} 
                        alt={`${domain.title} Part 1`} 
                        className="rounded-[2.5rem] shadow-xl w-full h-[400px] object-cover border-4 border-white transform group-hover:-translate-y-1 transition-all duration-500"
                      />
                    </div>
                    <div className="col-6">
                      <img 
                        src={domain.images[1]} 
                        alt={`${domain.title} Part 2`} 
                        className="rounded-[2.5rem] shadow-xl w-full h-[400px] object-cover border-4 border-white transform group-hover:-translate-y-1 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                // Standard single image layout
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute inset-0 rounded-[3rem] transform scale-105 opacity-50 blur-2xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-70 ${domain.bgTheme}`}></div>
                  <img 
                    src={domain.image} 
                    alt={domain.title} 
                    className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover relative z-10 transform group-hover:-translate-y-2 transition-all duration-700 border-4 border-white"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 12. Our Approach Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Approach</h2>
            <div className="w-24 h-1.5 bg-blue-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Search />, title: "Research and Evidence-Based Planning", desc: "Evidence-driven programme implementation and informed decision making." },
              { icon: <Users />, title: "Community Participation and Inclusion", desc: "Inclusive community engagement and active collaboration for social equity." },
              { icon: <Leaf />, title: "Sustainability and Long-Term Impact", desc: "Focusing on sustainable growth, long-term impact, and community resilience." },
              { icon: <Handshake />, title: "Collaboration with Stakeholders and Institutions", desc: "Strategic partnerships with governments, international organizations, and local institutions." }
            ].map((approach, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(approach.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold mb-3">{approach.title}</h3>
                <p className="text-blue-100 leading-relaxed text-lg fw-light">{approach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Featured Projects Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <div className="w-24 h-1.5 bg-purple-600 mx-auto md:mx-0 rounded-full"></div>
            </div>
            <button onClick={() => navigate('/projects')} className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2 group shadow-sm">
              View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "HCL Foundation", 
              "UNDP", 
              "Tea Board", 
              "PMFME", 
              "Skill Gap Study"
            ].map((project, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate('/projects')}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-300 hover:-translate-y-2 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center aspect-square group"
              >
                <Target className="w-12 h-12 text-purple-200 group-hover:text-purple-600 mb-4 transition-colors duration-300" />
                <h3 className="font-bold text-gray-800 text-center text-lg group-hover:text-purple-700 transition-colors">{project}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        {/* Floating circles decoration */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-md">
            Work With Us to Create Sustainable Impact
          </h2>
          <p className="text-xl md:text-2xl text-emerald-50 mb-12 leading-relaxed font-light">
            Join our mission to strengthen communities, improve livelihoods, and promote inclusive development through research, innovation, and social action.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => navigate('/volunteer')} className="bg-white text-teal-700 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Users className="w-6 h-6" /> Join Us
            </button>
            <button onClick={() => navigate('/donate')} className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3 border border-blue-500">
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
