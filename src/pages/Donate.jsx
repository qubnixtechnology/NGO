import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, Target, ArrowRight, Shield, Check, Globe, 
  Users, Activity, BookOpen, AlertCircle
} from 'lucide-react';

// Images
import impactImg from '../assets/image/volunter.png';

export default function DonatePage() {
  const navigate = useNavigate();
  
  // --- EXISTING DONATION FORM LOGIC ---
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', message: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const getPredefinedAmounts = (currencyCode) => {
    switch(currencyCode) {
      case 'INR': return [500, 1000, 2500, 5000, 10000];
      case 'USD': case 'EUR': case 'GBP': return [10, 25, 50, 100, 250];
      default: return [10, 20, 50, 100, 250];
    }
  };

  const getAmountLimits = (currencyCode) => {
    switch(currencyCode) {
      case 'INR': return { min: 50, max: 500000 };
      case 'USD': case 'EUR': case 'GBP': return { min: 5, max: 10000 };
      default: return { min: 5, max: 10000 };
    }
  };

  const currentPredefinedAmounts = selectedCountry ? getPredefinedAmounts(selectedCountry.currencyCode) : [500, 1000, 2500, 5000, 10000];
  const { min: minAmount, max: maxAmount } = selectedCountry ? getAmountLimits(selectedCountry.currencyCode) : { min: 50, max: 500000 };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,currencies,cca2');
        const parsed = response.data
          .filter(country => country.currencies)
          .map((country) => {
            const currencyCode = Object.keys(country.currencies)[0];
            const currency = country.currencies[currencyCode];
            return {
              name: country.name.common,
              code: country.cca2,
              currencyCode,
              currencyName: currency.name,
              symbol: currency.symbol || currencyCode,
            };
          })
          .sort((a, b) => a.name.localeCompare(b.name));
        
        setCountries(parsed);
        const india = parsed.find(c => c.currencyCode === 'INR');
        setSelectedCountry(india || parsed[0]);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };
    fetchCountries();
  }, []);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value) => {
    const numValue = parseInt(value) || 0;
    setCustomAmount(value);
    if (numValue >= minAmount && numValue <= maxAmount) {
      setSelectedAmount(numValue);
    } else {
      setSelectedAmount(0);
    }
  };

  const handlePayment = () => {
    if (selectedAmount >= minAmount && selectedAmount <= maxAmount) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        alert(`Thank you ${donorInfo.name} for your generous donation of ${selectedCountry.symbol}${selectedAmount}!`);
        setDonorInfo({ name: '', email: '', message: '' });
      }, 2000);
    }
  };

  const isValidAmount = selectedAmount >= minAmount && selectedAmount <= maxAmount;

  // --- NEW CROWD FUNDING CONTENT ---
  const campaigns = [
    {
      title: "Mental Health & Disaster Support Fund",
      desc: "Support emergency mental healthcare, counselling services, trauma recovery, disaster rehabilitation, and community resilience programmes.",
      gradient: "from-rose-500 via-pink-500 to-orange-500", 
      icon: <Activity className="w-10 h-10 text-white animate-pulse" />,
      accentColor: "border-t-rose-500",
      raised: "₹1,20,000", goal: "₹2,00,000", percent: 60, donors: 150,
      objectives: ["Psychological first aid", "Counselling support", "Emergency relief", "Community rehabilitation"]
    },
    {
      title: "School Mental Health Initiative",
      desc: "Help provide counselling and emotional support services to students in government schools through research-based awareness initiatives.",
      gradient: "from-blue-600 via-indigo-600 to-violet-600", 
      icon: <BookOpen className="w-10 h-10 text-white" />,
      accentColor: "border-t-indigo-600",
      raised: "₹45,000", goal: "₹1,00,000", percent: 45, donors: 82,
      objectives: ["Student counselling", "Mental health awareness", "Teacher orientation", "Parent engagement"]
    },
    {
      title: "Child Rights Protection Initiative",
      desc: "Promote child rights awareness, child protection systems, POCSO awareness, and safe learning environments through community engagement.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500", 
      icon: <Shield className="w-10 h-10 text-white" />,
      accentColor: "border-t-emerald-500",
      raised: "₹80,000", goal: "₹1,50,000", percent: 53, donors: 110,
      objectives: ["Child safety awareness", "POCSO education", "Teacher training", "Child protection support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins text-gray-800 pb-20">
      
      {/* 1. Header Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white pt-40 pb-32 min-h-[500px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
            <Heart className="w-8 h-8 text-pink-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Our Causes</h1>
          <p className="text-xl text-blue-100 leading-relaxed font-light">
            Your contribution can help us create meaningful social impact and support vulnerable communities through research-driven development initiatives.
          </p>
        </div>
      </section>

      {/* 2. Campaign Cards Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {campaigns.map((camp, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group border-t-4 ${camp.accentColor}`}
            >
              <div className={`h-60 relative overflow-hidden bg-gradient-to-br ${camp.gradient} flex items-center justify-center`}>
                {/* Floating abstract graphic elements for high-end look */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Floating Glassmorphic Icon Container */}
                <div className="relative z-10 w-20 h-20 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {camp.icon}
                </div>

                {/* Floating Title over Header */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-50 transition-colors">{camp.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{camp.desc}</p>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-blue-600">{camp.raised} Raised</span>
                    <span className="text-gray-500">Goal: {camp.goal}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                    <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2.5 rounded-full" style={{ width: `${camp.percent}%` }}></div>
                  </div>
                  <div className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                    <Users className="w-3 h-3" /> {camp.donors} Donors
                  </div>
                </div>

                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Objectives</h4>
                  {camp.objectives.slice(0,3).map((obj, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <button onClick={() => document.getElementById('donate-form').scrollIntoView({ behavior: 'smooth' })} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-sm transition-colors shadow-md">
                    Donate Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. NGO Appeal & 4. Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Your Support Matters</h2>
              <div className="w-20 h-1.5 bg-emerald-500 mb-8 rounded-full"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your support helps Engross Foundation strengthen communities, support vulnerable populations, improve mental well-being, promote child protection, and create sustainable development opportunities across India.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Research-driven interventions", "Community welfare programmes",
                  "Mental health support", "Awareness initiatives"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <Heart className="w-5 h-5 text-rose-500 shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={impactImg} alt="Community Impact" className="rounded-[2.5rem] shadow-2xl w-full h-96 object-cover" />
            </motion.div>
          </div>

          <div className="bg-blue-50 rounded-[3rem] p-10 md:p-16 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 relative z-10">Your Contribution Creates Impact</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {[
                { amt: "₹500", desc: "Support awareness material", icon: <BookOpen /> },
                { amt: "₹1000", desc: "Provide counselling support", icon: <Heart /> },
                { amt: "₹2500", desc: "Support child safety workshops", icon: <Shield /> },
                { amt: "₹5000", desc: "Help community rehabilitation", icon: <Activity /> }
              ].map((impact, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group border border-blue-50">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {impact.icon}
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-2">{impact.amt}</h4>
                  <p className="text-sm text-gray-600 font-medium">{impact.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Actual Donation Form (Existing Logic integrated) */}
      <section id="donate-form" className="py-20 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-emerald-400"></div>
          
          <div className="text-center mb-10 mt-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Make a Secure Donation</h2>
            <p className="text-gray-500">Select your country, choose an amount, and help us create impact.</p>
          </div>

          <div className="space-y-8 relative z-10">
            {/* Country Selection */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Country / Currency</label>
              <select
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCountry?.code || ''}
                onChange={(e) => {
                  const selected = countries.find(c => c.code === e.target.value);
                  setSelectedCountry(selected);
                  const defaultAmounts = getPredefinedAmounts(selected.currencyCode);
                  setSelectedAmount(defaultAmounts[1]); 
                  setCustomAmount('');
                }}
              >
                {countries.length > 0 ? countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.currencyCode} - {country.symbol})
                  </option>
                )) : <option>Loading...</option>}
              </select>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4">Select Amount ({selectedCountry?.symbol})</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                {currentPredefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-2 rounded-xl font-bold text-sm transition-all duration-200 ${
                      selectedAmount === amount && !customAmount
                        ? 'bg-blue-600 text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    {selectedCountry?.symbol}{amount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-3.5 font-bold text-gray-500">{selectedCountry?.symbol}</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  placeholder={`Custom amount (Min: ${minAmount})`}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-semibold text-gray-700"
                />
              </div>
            </div>

            {/* Donor Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name *"
                value={donorInfo.name}
                onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={donorInfo.email}
                onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handlePayment}
              disabled={!isValidAmount || !donorInfo.name || !donorInfo.email || isProcessing}
              className="w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Donate {selectedCountry?.symbol}{selectedAmount} securely</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            <div className="flex justify-center items-center gap-4 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-emerald-500" /> Secure SSL</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-500" /> Tax Deductible (80G)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-center px-6 relative overflow-hidden mt-10">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Together We Can Create Change</h2>
          <p className="text-lg text-emerald-50 mb-10 leading-relaxed font-light">
            Join us in supporting research-driven and community-centered initiatives that empower vulnerable populations and promote sustainable social development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => document.getElementById('donate-form').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-teal-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-transform transform hover:scale-105 shadow-xl">
              Donate Now
            </button>
            <button onClick={() => navigate('/volunteer')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-transform transform hover:scale-105 shadow-xl">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}