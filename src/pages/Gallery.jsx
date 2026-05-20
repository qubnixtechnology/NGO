import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Calendar, MapPin, Quote, Camera, 
  ArrowRight, Heart, HeartHandshake, X, ChevronLeft 
} from 'lucide-react';

// Images from assets
import heroImg from '../assets/image/WebSite Photos/11.jpeg';
import img1 from '../assets/image/WebSite Photos/1.jpeg';
import img2 from '../assets/image/WebSite Photos/2.jpeg';
import img3 from '../assets/image/WebSite Photos/3.jpeg';
import img4 from '../assets/image/WebSite Photos/4.jpeg';
import img5 from '../assets/image/WebSite Photos/5.jpeg';
import img6 from '../assets/image/WebSite Photos/6.jpeg';
import img7 from '../assets/image/WebSite Photos/7.jpeg';
import img8 from '../assets/image/WebSite Photos/8.jpeg';
import img9 from '../assets/image/WebSite Photos/9.jpeg';
import img10 from '../assets/image/WebSite Photos/10.jpeg';

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

// Gallery Data
const galleryCategories = [
  "All", 
  "Research & Surveys", 
  "Training Programmes", 
  "Community Outreach", 
  "Mental Health", 
  "Disaster Relief", 
  "Awareness Campaigns", 
  "Workshops", 
  "Field Visits"
];

const websitePhotosModules = import.meta.glob('../assets/image/WebSite Photos/*.{jpeg,jpg,png}', { eager: true });
const projectPhotosModules = import.meta.glob('../assets/image/WebSite Photos/Project Photos/*.{jpeg,jpg,png}', { eager: true });
const welfarePhotosModules = import.meta.glob('../assets/image/WebSite Photos/wellfare activity/*.{jpeg,jpg,png}', { eager: true });

const assignRandomCategory = () => {
  const categories = galleryCategories.filter(c => c !== "All");
  return categories[Math.floor(Math.random() * categories.length)];
};

const allPhotos = [
  ...Object.values(websitePhotosModules).map((mod, i) => ({
    id: `web-${i}`, src: mod.default, category: assignRandomCategory(), title: `Community Activity ${i + 1}`
  })),
  ...Object.values(projectPhotosModules).map((mod, i) => ({
    id: `proj-${i}`, src: mod.default, category: i % 2 === 0 ? "Research & Surveys" : "Field Visits", title: `Fieldwork Project ${i + 1}`
  })),
  ...Object.values(welfarePhotosModules).map((mod, i) => ({
    id: `welfare-${i}`, src: mod.default, category: i % 2 === 0 ? "Community Outreach" : "Disaster Relief", title: `Welfare Programme ${i + 1}`
  }))
];

export default function GalleryPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const filteredPhotos = activeCategory === "All" 
    ? allPhotos 
    : allPhotos.filter(photo => photo.category === activeCategory);

  const handleOpenPhoto = (index) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePhoto = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins text-gray-800">
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-blue-900/90 z-10"></div>
          <img src={heroImg} alt="Engross Foundation Gallery" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-6 text-sm font-medium">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-400">Gallery</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg flex justify-center items-center gap-4"
          >
            Gallery & Media
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Capturing moments of impact, community engagement, research activities, training programmes, and development initiatives across India.
          </motion.p>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Activities & Impact</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Engross Foundation actively works across research, surveys, awareness campaigns, livelihood programmes, mental health initiatives, training workshops, and community development activities.
            <br/><br/>
            This gallery showcases our fieldwork, events, outreach programmes, and impact-driven initiatives.
          </p>
        </div>
      </section>

      {/* 3. Photo Gallery Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event & Activity Photos</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={photo.id}
                  onClick={() => handleOpenPhoto(index)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 group relative cursor-pointer"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">{photo.category}</span>
                      <h4 className="text-white font-bold text-lg leading-tight">{photo.title}</h4>
                    </div>
                    {/* Persistent Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm group-hover:opacity-0 transition-opacity">
                      {photo.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium text-lg">No photos available for this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Featured Events Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Events</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Mental Health Awareness Campaign", 
                desc: "Community counselling and emotional well-being awareness initiative.", 
                date: "March 15, 2026", loc: "Delhi NCR", img: img2 
              },
              { 
                title: "Research & Survey Fieldwork", 
                desc: "Household surveys and impact assessment programmes across districts.", 
                date: "April 02, 2026", loc: "Uttar Pradesh", img: img1 
              },
              { 
                title: "Skill Development Workshop", 
                desc: "Vocational training and employability skill-building sessions.", 
                date: "May 10, 2026", loc: "Maharashtra", img: img4 
              }
            ].map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{event.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-2">{event.desc}</p>
                  <div className="flex flex-col gap-2 mt-auto border-t border-gray-200 pt-4">
                    <div className="flex items-center text-xs font-semibold text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" /> {event.date}
                    </div>
                    <div className="flex items-center text-xs font-semibold text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-emerald-500" /> {event.loc}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Social Impact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Creating Meaningful Change</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 50, label: "Projects Executed", suffix: "+" },
              { num: 20, label: "States Covered", suffix: "+" },
              { num: 10000, label: "Survey Participants", suffix: "+" },
              { num: 500, label: "Dedicated Volunteers", suffix: "+" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-5xl font-extrabold text-emerald-400 mb-3 drop-shadow-md">
                  <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-blue-100 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial / Media Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Voices from the Field</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: "Volunteer", text: "Being part of Engross Foundation's awareness campaigns has been deeply fulfilling. Seeing the direct impact on children's education and safety is incredible." },
              { role: "Community Leader", text: "The skill development workshops brought to our village have truly empowered our youth, opening up opportunities that didn't exist before." },
              { role: "Research Associate", text: "Conducting household surveys allowed us to understand the ground realities, enabling the foundation to craft truly effective and research-driven interventions." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-blue-50 rounded-[2rem] p-8 md:p-10 relative">
                <Quote className="w-12 h-12 text-blue-200 absolute top-6 left-6 -z-0 opacity-50" />
                <p className="text-gray-700 italic relative z-10 leading-relaxed mb-6 font-medium">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    {testimonial.role.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Community Feedback</h4>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-700 text-center px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Be Part of Our Journey
          </h2>
          <p className="text-xl text-emerald-50 mb-12 leading-relaxed font-light">
            Join us in creating sustainable social impact through research, community participation, awareness programmes, and development initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => navigate('/volunteer')} className="bg-white text-teal-700 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              <HeartHandshake className="w-6 h-6" /> Join Us
            </button>
            <button onClick={() => navigate('/donate')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center gap-3">
              <Heart className="w-6 h-6" /> Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={handleClosePhoto}
          >
            {/* Close Button */}
            <button
              onClick={handleClosePhoto}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-50 bg-black/20 hover:bg-black/40 rounded-full p-2"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 md:left-10 text-white/70 hover:text-white p-3 rounded-full bg-black/20 hover:bg-black/50 transition-all z-50 backdrop-blur-sm"
            >
              <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-4 md:right-10 text-white/70 hover:text-white p-3 rounded-full bg-black/20 hover:bg-black/50 transition-all z-50 backdrop-blur-sm"
            >
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedPhotoIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-6xl w-full max-h-screen flex flex-col items-center justify-center pointer-events-none"
            >
              <img
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="text-center mt-6 text-white pointer-events-auto bg-black/50 px-6 py-2 rounded-full backdrop-blur-sm">
                <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">{filteredPhotos[selectedPhotoIndex].category}</span>
                <h4 className="text-lg font-medium mt-1">{filteredPhotos[selectedPhotoIndex].title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
