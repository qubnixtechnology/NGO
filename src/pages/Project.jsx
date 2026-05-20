import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Users, Heart, Target, MapPin, Building2, 
  Search, CheckCircle2, ChevronRight, Filter, Globe, 
  BarChart3, ShieldCheck, FileText, X, Lightbulb, Mail, Handshake
} from 'lucide-react';

// Assets
import heroImg from '../assets/image/WebSite Photos/8.jpeg';
import gallery1 from '../assets/image/WebSite Photos/1.jpeg';
import gallery2 from '../assets/image/WebSite Photos/7.jpeg';
import gallery3 from '../assets/image/WebSite Photos/9.jpeg';
import gallery4 from '../assets/image/WebSite Photos/10.jpeg';

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

// Project Database
const allProjects = [
  {
    id: 1, title: "Evaluation of DTNBWED", year: "2026-27", category: "Evaluation",
    organization: "Ministry of Labour and Empowerment", coverage: "All India",
    activities: ["Assessment", "Surveys", "Interviews", "FGDs", "Stakeholder consultations"],
    description: "Comprehensive evaluation of DTNBWED programs across India."
  },
  {
    id: 2, title: "Impact Assessment of PRI Project", year: "2025-26", category: "Impact Assessment",
    organization: "HCL Foundation", location: "Hardoi District, UP",
    activities: ["Surveys", "FGDs", "Interviews", "Consultation"],
    description: "Impact assessment project involving surveys, FGDs, stakeholder consultations, and field research in Hardoi District, Uttar Pradesh."
  },
  {
    id: 3, title: "Monitoring of RD Schemes", year: "2025-26", category: "Monitoring",
    organization: "Ministry of Rural Development", coverage: "3 North-East States & 14 Districts",
    activities: ["Monitoring", "Assessment", "Reporting"],
    description: "Field monitoring and assessment of Rural Development schemes in the North-East."
  },
  {
    id: 4, title: "Impact Assessment of Samuday Project", year: "2025-26", category: "Impact Assessment",
    organization: "HCL Foundation", sampleSize: "4000+",
    activities: ["Surveys", "Stakeholder consultation", "FGDs"],
    description: "Extensive impact assessment of the Samuday Project."
  },
  {
    id: 5, title: "Arunachal Pradesh Farmers Survey", year: "2025-26", category: "Research",
    organization: "NEDFI Guwahati", activities: ["Farmer surveys", "Discussions", "Interviews"],
    description: "Comprehensive survey of farmers in Arunachal Pradesh to assess livelihood challenges."
  },
  {
    id: 6, title: "Impact Study of Safi Sathi Project", year: "2025-26", category: "Impact Assessment",
    organization: "UNDP Innovation", coverage: "Delhi/NCR, Karnataka, Andhra Pradesh, Maharashtra", sampleSize: "4200+",
    activities: ["Surveys", "Consultation"],
    description: "Large-scale impact assessment and stakeholder consultation project focused on social innovation and programme effectiveness."
  },
  {
    id: 7, title: "Baseline Survey – FNHW Programme", year: "2025-26", category: "Research",
    organization: "West Bengal SRLM + UNDP", targetGroups: ["Adolescent girls", "Pregnant women", "Lactating mothers", "Health workers"],
    sampleSize: "4000", activities: ["Baseline Survey"],
    description: "Baseline data collection for Food, Nutrition, Health, and Wash (FNHW) initiatives."
  },
  {
    id: 8, title: "Skill Gap Study", year: "2025-26", category: "Skill Development",
    organization: "Textile Committee, Ministry of Textile", coverage: "PAN India", sampleSize: "5000+",
    activities: ["Textile unit surveys", "Handloom assessment", "Skill mapping", "Stakeholder interactions"],
    description: "National-level study identifying skill gaps within the Indian textile industry."
  },
  {
    id: 9, title: "Monitoring of RD Schemes", year: "2024-25", category: "Monitoring",
    organization: "Ministry of Rural Development", coverage: "Maharashtra & Tripura",
    activities: ["Verification", "Monitoring", "Reporting"],
    description: "Monitoring the implementation of rural development schemes."
  },
  {
    id: 10, title: "PMFME Scheme Impact Assessment", year: "2024-25", category: "Impact Assessment",
    organization: "Ministry of Food Processing Industries", coverage: "32 States PAN India",
    targetGroups: ["SHGs", "FPOs", "Enterprises"],
    description: "National impact assessment of the PMFME scheme for micro food processing enterprises."
  },
  {
    id: 11, title: "Monitoring of RD Schemes (UP)", year: "2024-25", category: "Monitoring",
    organization: "Ministry of Rural Development", location: "Uttar Pradesh",
    activities: ["Survey", "Monitoring", "Verification"],
    description: "State-specific monitoring of rural development schemes in UP."
  },
  {
    id: 12, title: "Tea Consumption Survey", year: "2023-24", category: "Research",
    organization: "Tea Board Kolkata", coverage: "17 States", sampleSize: "10,000+",
    activities: ["Household survey", "Business survey"],
    description: "National-level household and business establishment survey on tea consumption patterns in India."
  },
  {
    id: 13, title: "PMAY-G Complaint Inquiry", year: "2023-24", category: "Monitoring",
    organization: "Ministry of Rural Development", location: "Akola District, Maharashtra",
    activities: ["Inquiry", "Verification", "Reporting"],
    description: "Field inquiry and verification of PMAY-G beneficiary complaints."
  }
];

const featuredProjects = allProjects.filter(p => [2, 6, 8, 12].includes(p.id));
const categories = ["All", "Research", "Impact Assessment", "Monitoring", "Skill Development", "Evaluation"];
const years = ["All Years", "2026-27", "2025-26", "2024-25", "2023-24"];
const partners = ["UNDP", "HCL Foundation", "Ministry of Rural Development", "Tea Board", "Textile Committee", "NEDFI"];

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter Logic
  const filteredProjects = allProjects.filter(project => {
    const yearMatch = selectedYear === "All Years" || project.year === selectedYear;
    const catMatch = selectedCategory === "All" || project.category === selectedCategory;
    return yearMatch && catMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-poppins text-gray-800">
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/90 z-10"></div>
          <img src={heroImg} alt="Projects & Fieldwork" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16">
          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-6 text-sm font-medium">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-400">Projects</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Our Projects & Impact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Driving sustainable change through nationwide research, monitoring, and impact assessment programmes.
          </motion.p>
        </div>
      </section>

      {/* 2. Featured Projects Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-2 block">Highlight Reel</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 border border-purple-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 cursor-pointer transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold">
                    {project.year}
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-purple-500 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{project.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4 text-sm font-medium">
                  <Building2 className="w-4 h-4 text-purple-500" /> {project.organization}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.activities?.slice(0,3).map((act, i) => (
                    <span key={i} className="text-xs font-semibold text-purple-600 bg-white border border-purple-200 px-3 py-1 rounded-md">
                      {act}
                    </span>
                  ))}
                  {project.activities?.length > 3 && (
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-md">+{project.activities.length - 3}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4. Year-Wise Projects & Categories (Main Requirement) */}
      <section className="py-24 bg-gray-50 border-t border-gray-200" id="all-projects">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Complete Project Archive</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Filtering Controls */}
          <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 mb-12 flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Year Tabs */}
            <div className="w-full lg:w-auto">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filter by Year
              </h4>
              <div className="flex flex-wrap gap-2">
                {years.map(year => (
                  <button 
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                      selectedYear === year 
                        ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Dropdown/Pills */}
            <div className="w-full lg:w-auto">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                      selectedCategory === cat 
                        ? 'bg-emerald-500 text-white shadow-sm' 
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-emerald-300 hover:text-emerald-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project List */}
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-300 cursor-pointer transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center group"
                  >
                    <div className="flex-shrink-0 w-24 text-center hidden md:block">
                      <span className="text-xl font-black text-gray-300 group-hover:text-blue-200 transition-colors">{project.year.split('-')[0]}</span>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="md:hidden text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">{project.year}</span>
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                      <p className="text-gray-500 text-sm font-medium flex items-center gap-1">
                        <Building2 className="w-4 h-4" /> {project.organization}
                      </p>
                    </div>

                    <div className="flex-shrink-0 md:w-64 flex flex-col gap-2">
                      {project.coverage && (
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <Globe className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                          <span>{project.coverage}</span>
                        </div>
                      )}
                      {project.location && (
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                          <span>{project.location}</span>
                        </div>
                      )}
                      {project.sampleSize && (
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                          <span>Sample: {project.sampleSize}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-center py-20 bg-white rounded-3xl border border-gray-100"
                >
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-600">No projects found</h3>
                  <p className="text-gray-400">Try adjusting your year or category filters.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 9. Impact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Scale of Impact</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 10000, label: "Households Surveyed", suffix: "+" },
              { num: 32, label: "States Covered", suffix: "" },
              { num: 5000, label: "Workers Assessed", suffix: "+" },
              { num: 4000, label: "Community Participants", suffix: "+" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-3 drop-shadow-md">
                  <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base font-semibold text-blue-100 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Project Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fieldwork Gallery</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">Glimpses of our team conducting surveys, fieldwork, and community meetings across India.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-md group ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
              >
                <img src={img} alt="Fieldwork" className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Partner Organizations Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Leading Organizations</h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className="bg-white px-8 py-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex items-center justify-center min-w-[200px]"
              >
                <span className="font-bold text-gray-700 text-lg">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-700 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Collaborate With Us
          </h2>
          <p className="text-xl text-emerald-50 mb-12 leading-relaxed font-light">
            Partner with Engross Foundation for research, monitoring, impact assessment, livelihood development, and community-focused initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => navigate('/contact')} className="bg-white text-teal-700 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Handshake className="w-6 h-6" /> Partner With Us
            </button>
            <button onClick={() => navigate('/contact')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Mail className="w-6 h-6" /> Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* 5. Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl relative overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              <div className="h-3 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              
              <div className="p-8 md:p-10 overflow-y-auto">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-6 flex gap-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">{selectedProject.year}</span>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">{selectedProject.category}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pr-12">{selectedProject.title}</h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Project Details</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-blue-500 shrink-0" />
                        <div>
                          <span className="block text-xs text-gray-500 font-semibold uppercase">Organization</span>
                          <span className="text-gray-800 font-medium">{selectedProject.organization}</span>
                        </div>
                      </li>
                      {(selectedProject.coverage || selectedProject.location) && (
                        <li className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                          <div>
                            <span className="block text-xs text-gray-500 font-semibold uppercase">Location / Coverage</span>
                            <span className="text-gray-800 font-medium">{selectedProject.coverage || selectedProject.location}</span>
                          </div>
                        </li>
                      )}
                      {selectedProject.sampleSize && (
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-purple-500 shrink-0" />
                          <div>
                            <span className="block text-xs text-gray-500 font-semibold uppercase">Sample Size</span>
                            <span className="text-gray-800 font-medium">{selectedProject.sampleSize}</span>
                          </div>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Key Activities</h4>
                    <ul className="space-y-3">
                      {selectedProject.activities?.map((act, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {selectedProject.targetGroups && (
                  <div className="mb-8">
                     <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Target Groups</h4>
                     <div className="flex flex-wrap gap-2">
                       {selectedProject.targetGroups.map((group, i) => (
                         <span key={i} className="bg-purple-50 text-purple-700 border border-purple-100 px-4 py-2 rounded-xl text-sm font-semibold">
                           {group}
                         </span>
                       ))}
                     </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
