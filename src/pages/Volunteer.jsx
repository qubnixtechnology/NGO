import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Users, Heart, GraduationCap, Briefcase, 
  ChevronRight, UploadCloud, CheckCircle2, FileText, 
  BadgeCheck, ClipboardList, Target, Globe, CreditCard,
  Plus, Minus, Send, Check
} from 'lucide-react';

// Assets
import heroImg from '../assets/image/WebSite Photos/10.jpeg'; 
import fieldworkImg1 from '../assets/image/WebSite Photos/1.jpeg';
import fieldworkImg2 from '../assets/image/WebSite Photos/7.jpeg';

// Counter Component
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

// FAQ Accordion
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden mb-4 bg-white shadow-sm hover:border-blue-300 transition-colors">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-gray-800"
        onClick={onClick}
      >
        <span className="text-lg">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="text-blue-500 w-5 h-5"/> : <Plus className="text-blue-500 w-5 h-5"/>}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-5 text-gray-600 text-lg leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
};

export default function JoinUsPage() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  
  const [formState, setFormState] = useState({
    role: '',
    resume: null,
    govId: null
  });
  const [openFAQ, setOpenFAQ] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleApplyClick = (role) => {
    setFormState(prev => ({ ...prev, role }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileChange = (e, type) => {
    if (e.target.files[0]) {
      setFormState(prev => ({ ...prev, [type]: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate backend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // reset after 5s
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins text-gray-800">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[550px] md:h-[80vh] md:min-h-[650px] flex flex-col justify-start md:justify-center items-center overflow-hidden pt-28 pb-12 md:pt-24 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-blue-900/90 z-10"></div>
          <img src={heroImg} alt="Join Engross Foundation" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-6 md:mt-16">
          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-6 text-sm font-medium">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-400">Join Us</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Join Engross Foundation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Be the change. Create impact. Grow with purpose by contributing to meaningful social development initiatives.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button onClick={() => handleApplyClick('')} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-2">
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => handleApplyClick('Volunteer')} className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:!text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
              Become a Volunteer
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Work With Us</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Engross Foundation, we welcome passionate individuals who are committed to creating positive social impact. Whether you are a student, researcher, social worker, professional, or volunteer, you can contribute to meaningful community development initiatives while gaining valuable experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Roles List */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Opportunities available in:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Research & Surveys", "Community Outreach", "Mental Health Support",
                  "Disaster Management", "Skill Development", "Awareness Campaigns"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-blue-300 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                    <span className="font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Statistics */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: 500, label: "Volunteers", suffix: "+" },
                  { num: 50, label: "Projects", suffix: "+" },
                  { num: 20, label: "States Covered", suffix: "+" },
                  { num: 100, label: "Field Surveys", suffix: "+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="text-4xl font-extrabold text-blue-600 mb-2">
                      <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Role Selection Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Role</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Volunteer",
                icon: <Heart className="w-8 h-8" />,
                desc: "Support awareness campaigns, field programmes, social welfare activities, and community outreach initiatives.",
                tags: ["Psychology", "Sociology", "MSW", "Social Work"],
                color: "text-rose-500", bg: "bg-rose-50", border: "hover:border-rose-300"
              },
              {
                title: "Intern",
                icon: <GraduationCap className="w-8 h-8" />,
                desc: "Gain hands-on experience in research, NGO operations, field surveys, and social development projects.",
                tags: ["Students", "Research", "Fieldwork"],
                color: "text-blue-500", bg: "bg-blue-50", border: "hover:border-blue-300"
              },
              {
                title: "Member",
                icon: <Users className="w-8 h-8" />,
                desc: "Become part of Engross Foundation's network and contribute your expertise and leadership.",
                tags: ["Professionals", "Leadership", "Advisory"],
                color: "text-purple-500", bg: "bg-purple-50", border: "hover:border-purple-300"
              },
              {
                title: "Enumerator",
                icon: <ClipboardList className="w-8 h-8" />,
                desc: "Participate in field surveys, data collection, household interviews, and impact assessments.",
                tags: ["Conduct Surveys", "Record Data", "Research Assist"],
                color: "text-emerald-500", bg: "bg-emerald-50", border: "hover:border-emerald-300"
              }
            ].map((role, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group ${role.border}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${role.bg} ${role.color}`}>
                  {role.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{role.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{role.desc}</p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {role.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleApplyClick(role.title)}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  Apply as {role.title} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Join Us Section */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Join Engross Foundation?</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Briefcase />, title: "Hands-on Experience", desc: "Work on real development and research projects across India." },
              { icon: <Target />, title: "Professional Growth", desc: "Improve communication, leadership, and fieldwork skills." },
              { icon: <BadgeCheck />, title: "Certificates & Recognition", desc: "Receive participation certificates and official recognition." },
              { icon: <Globe />, title: "Meaningful Impact", desc: "Contribute directly to sustainable community development." }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100 hover:bg-emerald-50 transition-colors text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-emerald-600 border border-emerald-100">
                  {React.cloneElement(benefit.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 & 7. Fieldwork and Application Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Fieldwork Opportunities */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research & Field Opportunities</h2>
              <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Volunteers, interns, and enumerators get the unique opportunity to participate directly in:
              </p>
              <ul className="space-y-4 mb-10">
                {["Household surveys", "Impact assessments", "Awareness campaigns", "Training programmes", "Community outreach activities"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-2 gap-4">
                <img src={fieldworkImg1} alt="Survey" className="rounded-2xl shadow-md w-full h-48 object-cover" />
                <img src={fieldworkImg2} alt="Community" className="rounded-2xl shadow-md w-full h-48 object-cover" />
              </div>
            </motion.div>

            {/* Application Process */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How It Works</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.7rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  {[
                    { title: "Choose your role", desc: "Select Volunteer, Intern, Member, or Enumerator." },
                    { title: "Fill the application", desc: "Complete the registration form below." },
                    { title: "Upload documents", desc: "Provide your Resume and valid Govt ID." },
                    { title: "Application review", desc: "Our team will review your profile and experience." },
                    { title: "Approval & onboarding", desc: "Get approved and start creating impact!" }
                  ].map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-blue-100 text-blue-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm group-hover:border-blue-200 transition-colors">
                        <h4 className="font-bold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. Future Feature (Placeholder) & 9. FAQ Section */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-blue-600 mb-10 rounded-full"></div>
            <div>
              <FAQItem 
                question="Who can apply?" 
                answer="Students, professionals, researchers, and social workers who are passionate about creating a positive social impact are all welcome to apply."
                isOpen={openFAQ === 0} onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)} 
              />
              <FAQItem 
                question="Is prior experience required?" 
                answer="No, prior experience is not strictly required for all roles. Passionate individuals willing to learn and contribute to the community are highly encouraged."
                isOpen={openFAQ === 1} onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)} 
              />
              <FAQItem 
                question="Will certificates be provided?" 
                answer="Yes! Certificates of participation and appreciation may be provided after the successful completion of your assigned projects and duties."
                isOpen={openFAQ === 2} onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)} 
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[2.5rem] p-10 text-white shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><CreditCard size={180} /></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                  <BadgeCheck className="w-8 h-8 text-blue-200" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Digital Volunteer ID Card</h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Coming Soon: Approved members and volunteers will receive digitally generated ID cards with validity details and specific project assignments right on this portal.
                </p>
                <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide">
                  Feature in Development
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Registration Form Section */}
      <section ref={formRef} className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Registration Form</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">Fill out the details below to officially apply to join our community.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-200 p-8 md:p-12">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                <p className="text-gray-600 text-lg">Thank you for your interest in Engross Foundation. Our team will review your details and get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name *</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address *</label>
                    <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Mobile Number *</label>
                    <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                    <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">State *</label>
                    <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-700">
                      <option value="">Select State</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="up">Uttar Pradesh</option>
                      <option value="delhi">Delhi/NCR</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">District *</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Your district" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Address</label>
                  <textarea rows="3" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="Enter your full residential address..."></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Highest Education</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-700">
                      <option value="">Select Education Level</option>
                      <option>High School</option>
                      <option>Bachelor's Degree</option>
                      <option>Master's / MSW</option>
                      <option>PhD</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Apply As *</label>
                    <select required value={formState.role} onChange={(e) => setFormState({...formState, role: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900 font-semibold">
                      <option value="">Select Role</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Intern">Intern</option>
                      <option value="Member">Member</option>
                      <option value="Enumerator">Enumerator</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Skills & Interests</label>
                  <textarea rows="3" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="Tell us about your relevant skills (e.g. data collection, counseling, fieldwork)..."></textarea>
                </div>

                {/* File Uploads (Frontend Only UI) */}
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Upload Resume (PDF/DOC)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:bg-gray-50 transition-colors relative">
                      <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, 'resume')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 font-medium">
                        {formState.resume ? formState.resume.name : "Drag & drop or click to upload"}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Upload Govt ID (PDF/JPG/PNG)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:bg-gray-50 transition-colors relative">
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileChange(e, 'govId')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 font-medium">
                        {formState.govId ? formState.govId.name : "Drag & drop or click to upload"}
                      </p>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-5 rounded-xl mt-8 transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Processing <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div></span>
                  ) : (
                    <><Send className="w-5 h-5" /> Submit Application</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed font-light">
            Join our growing network of volunteers, interns, researchers, and community leaders working together for inclusive and sustainable development.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-blue-700 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Users className="w-6 h-6" /> Apply Now
            </button>
            <button onClick={() => navigate('/contact')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              Contact Us <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
