import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import Bootstrap CSS for grid, layout, tables, badges, etc.
import 'bootstrap/dist/css/bootstrap.min.css';

// React Icons (Bootstrap Icons)
import { 
  BsPeopleFill, 
  BsLaptop, 
  BsPersonFill, 
  BsCpu, 
  BsDiagram3Fill, 
  BsBullseye, 
  BsBank, 
  BsBarChartLineFill, 
  BsGlobe, 
  BsGeoAltFill, 
  BsMortarboardFill, 
  BsCheckCircleFill,
  BsChevronRight, 
  BsArrowRight,
  BsPersonCheckFill
} from 'react-icons/bs';

import { FaHandshake } from 'react-icons/fa';

// Images from leaders folder
import ashishImg from '../assets/image/leader/Dr Ashish Sriavstava.jpeg';
import jaiprakashImg from '../assets/image/leader/Jai Prakash Pant Director.jpeg';
import janardanImg from '../assets/image/leader/Janardan Ram Advisor.jpeg';
import manojImg from '../assets/image/leader/Manoj Mishra.jpeg';
import aparnaImg from '../assets/image/leader/Smt. Aparna Bhatt.jpeg';
import Shikhaimg from '../assets/image/leader/Dr Shikha Ojha.jpeg';
import heroImg from '../assets/image/WebSite Photos/4.jpeg';

export default function LeadersPage() {
  const navigate = useNavigate();

  // Core Team details
  const coreTeam = [
    {
      name: "Dr. Ashish Srivastava",
      role: "Researcher / Chief Functionary",
      img: ashishImg,
      subtitle: "PhD Psychology – ODISA",
      details: [
        "30+ years experience in mentoring, evaluation, implementation, social & political research, policy research, CSR, development, training & capacity building.",
        "Medal level mentor, motivational guide, counselling winner & trainer.",
        "Worked with 20+ ministries, CSR, NGOs, development institutions and universities in India.",
        "Associated with assessment, evaluation & policy research works for international organizations."
      ]
    },
    {
      name: "Shri Jai Prakash Pant",
      role: "Director",
      img: jaiprakashImg,
      subtitle: "MCA",
      details: [
        "20+ years in research & evaluation, social impact assessment, rural skill development.",
        "Worked with UNICEF, government institutions & CSR projects.",
        "Expertise in rural social development, MIS, survey management, networking & coordination.",
        "Understanding participant projects for MoE, MoRD, MOSPI, MSME, etc."
      ]
    },
    {
      name: "Shri Manoj Mishra",
      role: "Director",
      img: manojImg,
      subtitle: "30+ Years Experience",
      details: [
        "30+ years in civil rights, public policy, political & corporate lobbying.",
        "Former chairman of CWE Ventures Pvt. Ltd.",
        "Former vice chairman of social organizations and universities.",
        "Lead role in formulation aligned with SDG norms.",
        "Proficient in bridge skills and development initiatives."
      ]
    },
    {
      name: "Shri Janardan Ram",
      role: "Advisor",
      img: janardanImg,
      subtitle: "MHRM, IPS Management",
      details: [
        "20+ years in social development.",
        "Expertise in social reforms, program planning, policy analysis and management.",
        "Worked in education, poverty reduction, health & hygiene, livelihood, skill development, PRIs and rural institutions.",
        "Associated with UNICEF, World Bank and other organizations."
      ]
    },
    {
      name: "Smt. Aparna Bhatt",
      role: "Chief Coordinator",
      img: aparnaImg,
      subtitle: "NIPM Trained Professional",
      details: [
        "20+ years experience in education, counselling, capacity building and social development.",
        "NIPM trained professional.",
        "Former program associate working in government and social sector.",
        "National level mentor, MAHD & postgraduate."
      ]
    },
    {
      name: "Dr. Shikha Ojha",
      role: "Economist / Advisor  / Trainer",
      img: Shikhaimg,
      initials: "SO",
      subtitle: "PhD Economics",
      details: [
        "20+ years research in economics, monitoring & evaluation, CSR and government behavior.",
        "Worked with international and national institutions.",
        "Published in national & international journals.",
        "Expertise in teaching, training, research and capacity building & FPOs."
      ]
    }
  ];

  // Core Advisors Table Data
  const advisors = [
    {
      name: "Dr. K.S. Gupta",
      icon: <BsPersonFill className="text-info fs-5" />,
      designation: "Chief Consultant / Mentor (40+ years)",
      education: "M.Tech, PhD (IIT Delhi)",
      expertise: "Expert Advice, Guidance, Mentoring, Management, Research, Report Writing, Quality Management, Training etc."
    },
    {
      name: "Mr. S.P. Gera",
      icon: <BsPeopleFill className="text-info fs-5" />,
      designation: "Statistician (40+ years)",
      education: "M.Sc.",
      expertise: "Sampling, Data Management and Statistical Analysis etc."
    },
    {
      name: "Dr. Santosh Sharma",
      icon: <BsPersonFill className="text-info fs-5" />,
      designation: "Consultant (15+ years)",
      education: "PhD (Botany)",
      expertise: "Botany, AYUSH, Forest & Plant Research, Report Writing etc."
    },
    {
      name: "Dr. Pooja Verma",
      icon: <BsPersonFill className="text-info fs-5" />,
      designation: "Consultant (10+ years)",
      education: "PhD (Agroforestry)",
      expertise: "Agroforestry, Climate Change, Environment etc."
    },
    {
      name: "Sh. Vikas Kumar",
      icon: <BsDiagram3Fill className="text-info fs-5" />,
      designation: "Consultant (15+ years)",
      education: "MBA, LLB (15+ years)",
      expertise: "HR, Labour Laws and Legal Expert."
    }
  ];

  // Strengths Data
  const strengths = [
    { icon: <BsBullseye className="text-success fs-4" />, title: "30+ Years of Collective Experience" },
    { icon: <BsPeopleFill className="text-primary fs-4" />, title: "Multidisciplinary Expert Team" },
    { icon: <BsBank className="text-primary fs-4" />, title: "Worked with 20+ Ministries & Leading Organizations" },
    { icon: <BsBarChartLineFill className="text-info fs-4" />, title: "Evidence-Based Approach" },
    { icon: <FaHandshake className="text-dark fs-4" />, title: "Commitment to Quality, Ethics & Timely Delivery" }
  ];

  return (
    <div className="min-h-screen bg-light text-dark font-sans">
      
      {/* Custom Styles for exact mockup layout representation */}
      <style>{`
        .bg-custom-teal {
          background-color: #006666 !important;
        }
        .bg-custom-navy {
          background-color: #0f2c59 !important;
        }
        .text-custom-teal {
          color: #006666 !important;
        }
        .text-custom-navy {
          color: #0f2c59 !important;
        }
        .support-team-container {
          border: 2px solid #aed6f1 !important;
          border-radius: 20px;
          background-color: #ffffff;
          padding: 30px 20px;
          position: relative;
        }
        .support-team-badge {
          background-color: #006666;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 8px 35px;
          border-radius: 50px;
          letter-spacing: 1px;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .support-team-circle-icon {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: #006666;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          flex-shrink: 0;
        }
        .dotted-separator-col {
          border-right: 2px dotted #aed6f1;
        }
        @media (max-width: 767.98px) {
          .dotted-separator-col {
            border-right: none;
            border-bottom: 2px dotted #aed6f1;
            padding-bottom: 25px;
            margin-bottom: 25px;
          }
        }
        .section-header-bar {
          background-color: #0f2c59;
          color: #ffffff;
          font-weight: 700;
          text-align: center;
          padding: 12px 20px;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          font-size: 0.95rem;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }
        .advisors-table-container {
          border: 1px solid #dee2e6;
          border-radius: 0 0 12px 12px;
          overflow: hidden;
          background-color: #ffffff;
        }
        .advisors-table {
          margin-bottom: 0;
          border-collapse: collapse;
        }
        .advisors-table th {
          background-color: #005f73;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          border: none;
          padding: 12px 15px;
          letter-spacing: 0.5px;
        }
        .advisors-table td {
          font-size: 0.82rem;
          padding: 12px 15px;
          vertical-align: middle;
          border-color: #e9ecef;
        }
        .advisors-table tbody tr:nth-of-type(even) {
          background-color: #f8fafd;
        }
        .advisors-table tbody tr:nth-of-type(odd) {
          background-color: #ffffff;
        }
        .advisors-table-footer {
          background-color: #e8f5e9;
          color: #0f5132;
          padding: 12px 20px;
          font-size: 0.82rem;
          font-weight: 600;
          border-top: 1px solid #d1e7dd;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .strengths-card-container {
          border: 1px solid #dee2e6;
          border-radius: 0 0 12px 12px;
          background-color: #ffffff;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .strength-list-item {
          display: flex;
          align-items: center;
          padding: 18px 20px;
          border-bottom: 1px solid #f1f3f5;
        }
        .strength-list-item:last-child {
          border-bottom: none;
        }
        .strength-icon-circle {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: #e6f4f8;
          color: #006666;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
          font-size: 1.25rem;
        }
        .strength-item-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: #2b3a4a;
          line-height: 1.4;
        }
        .partners-bar {
          border: 2px solid #a3e4d7;
          border-radius: 15px;
          background-color: #ffffff;
          padding: 15px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .partners-badge-pill {
          background-color: #006666;
          color: #ffffff;
          padding: 12px 24px;
          font-weight: 700;
          font-size: 0.8rem;
          border-radius: 10px;
          letter-spacing: 0.5px;
          white-space: nowrap;
          text-transform: uppercase;
          margin-right: 20px;
        }
        .partner-col-item {
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #dee2e6;
          padding: 8px 15px;
        }
        .partner-col-item:last-child {
          border-right: none;
        }
        .partner-item-icon {
          font-size: 1.4rem;
          color: #006666;
          margin-right: 10px;
          flex-shrink: 0;
        }
        .partner-item-text {
          font-weight: 700;
          font-size: 0.8rem;
          color: #3f4e5e;
          line-height: 1.3;
        }
        @media (max-width: 991.98px) {
          .partners-bar {
            flex-direction: column;
            align-items: stretch;
            padding: 20px;
          }
          .partners-badge-pill {
            margin-right: 0;
            margin-bottom: 20px;
            text-align: center;
          }
          .partner-col-item {
            border-right: none;
            border-bottom: 1px solid #f1f3f5;
            padding: 12px 10px;
            justify-content: flex-start;
          }
          .partner-col-item:last-child {
            border-bottom: none;
          }
        }
        .core-team-card {
          border-radius: 20px;
          border: 1px solid #f1f3f5;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          overflow: hidden;
          transition: all 0.3s ease;
          background: #ffffff;
          height: 100%;
        }
        .core-team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        .core-team-img-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 15px;
          overflow: hidden;
          border: 2px solid #eef2f5;
          flex-shrink: 0;
        }
        .core-team-initials {
          width: 80px;
          height: 80px;
          border-radius: 15px;
          background-color: #e6f4f8;
          color: #006666;
          font-weight: 700;
          font-size: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark text-white d-flex align-items-center justify-content-center" style={{ height: '50vh', minHeight: '400px' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
          <img src={heroImg} alt="Engross Leaders Banner" className="w-100 h-100 object-fit-cover" />
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to right, rgba(15, 44, 89, 0.85), rgba(0, 102, 102, 0.8))', zIndex: 1 }}></div>
        </div>
        <div className="position-relative text-center px-4 max-w-4xl mx-auto" style={{ zIndex: 2, marginTop: '90px' }}>
          {/* Breadcrumb */}
          <div className="d-flex align-items-center justify-content-center mb-3 text-white-50 fs-7">
            <span className="text-white hover-underline cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <BsChevronRight className="mx-2" style={{ fontSize: '0.7rem' }} />
            <span className="text-white hover-underline cursor-pointer" onClick={() => navigate('/about')}>About Us</span>
            <BsChevronRight className="mx-2" style={{ fontSize: '0.7rem' }} />
            <span className="text-info">Our Leaders</span>
          </div>
          <h1 className="display-4 fw-bold text-white mb-3">Our Core Team & Leadership</h1>
          <p className="lead text-light max-w-2xl mx-auto fw-light fs-6">
            The dedicated team of social practitioners, researchers, and advisors driving positive societal change through research and execution.
          </p>
        </div>
      </section>

      {/* Core Team Grid Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-custom-teal fw-bold text-uppercase tracking-wider fs-7">Steering the Mission</span>
            <h2 className="display-6 fw-bold text-custom-navy mt-1">OUR CORE TEAM</h2>
            <div className="mx-auto bg-custom-teal rounded-pill" style={{ width: '60px', height: '4px', marginTop: '12px' }}></div>
          </div>

          <div className="row g-4">
            {coreTeam.map((member, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="core-team-card d-flex flex-column">
                  {/* Accent Top Bar */}
                  <div style={{ height: '6px', background: 'linear-gradient(to right, #0f2c59, #006666)' }}></div>

                  {/* Card Body */}
                  <div className="p-4 flex-grow-1 d-flex flex-column">
                    
                    {/* Header Info: Photo + Name/Role */}
                    <div className="d-flex align-items-center gap-3 mb-4">
                      {member.img ? (
                        <div className="core-team-img-wrapper">
                          <img src={member.img} alt={member.name} className="w-100 h-100 object-fit-cover" />
                        </div>
                      ) : (
                        <div className="core-team-initials">
                          {member.initials}
                        </div>
                      )}
                      <div>
                        <h4 className="h6 fw-bold text-dark mb-1 leading-tight">{member.name}</h4>
                        <p className="small text-custom-teal fw-semibold mb-0">{member.role}</p>
                        <p className="text-muted italic mb-0" style={{ fontSize: '0.75rem' }}>{member.subtitle}</p>
                      </div>
                    </div>

                    <hr className="text-black-50 my-3" />

                    {/* Bio Bullet Points */}
                    <ul className="list-unstyled flex-grow-1 mb-0">
                      {member.details.map((detail, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-2.5 mb-3">
                          <BsCheckCircleFill className="text-success mt-1 flex-shrink-0" style={{ fontSize: '0.9rem' }} />
                          <span className="text-secondary" style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>{detail}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team Container Section */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container py-3">
          
          {/* Support Team Box (Mockup Representation) */}
          <div className="support-team-container shadow-sm">
            {/* badge */}
            <div className="support-team-badge">
              SUPPORT TEAM
            </div>

            <div className="row g-4 pt-3">
              
              {/* Preeti Srivastava */}
              <div className="col-12 col-md-6 dotted-separator-col">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="support-team-circle-icon">
                    <BsPeopleFill />
                  </div>
                  <div>
                    <h3 className="h6 fw-bold text-custom-teal mb-0">Preeti Srivastava</h3>
                    <p className="small text-muted mb-0 fw-semibold text-uppercase">Coordinator</p>
                  </div>
                </div>
                <ul className="ps-3 mb-0 text-secondary" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                  <li className="mb-2">B.Sc. Nursing</li>
                  <li>Responsible for coordination, documentation, survey, counseling and field support.</li>
                </ul>
              </div>

              {/* Ms. Deepti Shukla */}
              <div className="col-12 col-md-6 ps-md-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="support-team-circle-icon">
                    <BsLaptop />
                  </div>
                  <div>
                    <h3 className="h6 fw-bold text-custom-teal mb-0">Ms. Deepti Shukla</h3>
                    <p className="small text-muted mb-0 fw-semibold text-uppercase">Consultant – IT, Training & HR</p>
                  </div>
                </div>
                <ul className="ps-3 mb-0 text-secondary" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                  <li className="mb-2">IT Professional (Worked with IIM Lucknow)</li>
                  <li className="mb-2">10+ years' experience in training, recruitment, HR & admin.</li>
                  <li>Expertise: Training Needs Assessment, Coordination, Documentation & MIS.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Core Advisors / Consultants & Strengths Section */}
          <div className="row g-4 mt-4">
            
            {/* Core Advisors Column */}
            <div className="col-12 col-lg-8">
              <div className="section-header-bar">
                CORE ADVISORS / CONSULTANTS
              </div>
              <div className="advisors-table-container">
                <div className="table-responsive">
                  <table className="table table-striped table-hover advisors-table text-start">
                    <thead>
                      <tr>
                        <th style={{ width: '25%' }}>Name</th>
                        <th style={{ width: '25%' }}>Designation</th>
                        <th style={{ width: '20%' }}>Education & Exp</th>
                        <th style={{ width: '30%' }}>Expertise / Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      {advisors.map((advisor, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold text-custom-navy">
                            <div className="d-flex align-items-center gap-2">
                              <span className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle" style={{ width: '26px', height: '26px', flexShrink: 0 }}>
                                {advisor.icon}
                              </span>
                              <span>{advisor.name}</span>
                            </div>
                          </td>
                          <td className="text-secondary fw-semibold">{advisor.designation}</td>
                          <td className="text-secondary fw-semibold">{advisor.education}</td>
                          <td className="text-muted" style={{ lineHeight: '1.4' }}>{advisor.expertise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Banner bottom */}
                <div className="advisors-table-footer">
                  <span className="d-inline-flex align-items-center justify-content-center bg-success text-white rounded-circle me-2" style={{ width: '22px', height: '22px', fontSize: '0.75rem' }}>
                    <BsPeopleFill />
                  </span>
                  Many Consultants / Advisors / Subject Experts from other parts of the country are also associated with us for specialized assignments.
                </div>
              </div>
            </div>

            {/* Our Strengths Column */}
            <div className="col-12 col-lg-4">
              <div className="section-header-bar">
                OUR STRENGTHS
              </div>
              <div className="strengths-card-container">
                {strengths.map((item, idx) => (
                  <div key={idx} className="strength-list-item">
                    <div className="strength-icon-circle">
                      {item.icon}
                    </div>
                    <span className="strength-item-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Key Partners Footer Bar */}
          <div className="mt-5">
            <div className="partners-bar">
              <div className="partners-badge-pill text-center">
                OUR KEY PARTNERS
              </div>
              
              <div className="row g-0 flex-grow-1 text-center text-lg-start">
                
                <div className="col-12 col-md-6 col-lg partner-col-item">
                  <BsBank className="partner-item-icon" />
                  <span className="partner-item-text">Government Ministries</span>
                </div>
                
                <div className="col-12 col-md-6 col-lg partner-col-item">
                  <BsGlobe className="partner-item-icon" />
                  <span className="partner-item-text">National & International Organizations</span>
                </div>
                
                <div className="col-12 col-md-6 col-lg partner-col-item">
                  <BsBank className="partner-item-icon" />
                  <span className="partner-item-text">Banks & Financial Institutions</span>
                </div>
                
                <div className="col-12 col-md-6 col-lg partner-col-item">
                  <BsPersonCheckFill className="partner-item-icon" />
                  <span className="partner-item-text">State Departments & Agencies</span>
                </div>
                
                <div className="col-12 col-md-12 col-lg partner-col-item">
                  <BsMortarboardFill className="partner-item-icon" />
                  <span className="partner-item-text">Educational & Research Institutions</span>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Join Leadership Section */}
      <section className="py-5 text-center text-white bg-custom-navy">
        <div className="container py-4 max-w-4xl">
          <h2 className="h3 fw-bold mb-3">Want to Collaborate With Us?</h2>
          <p className="lead text-light-50 mb-4 max-w-xl mx-auto fs-6 fw-light">
            We are always looking for passionate domain specialists, advisors, and corporate CSR partners to scale our development initiatives.
          </p>
          <button onClick={() => navigate('/volunteer')} className="btn btn-light text-primary fw-bold px-4 py-2.5 rounded-pill shadow-sm transition-transform hover-scale !inline-flex !items-center !justify-center">
            Become a Partner <BsArrowRight className="inline-block ms-2" />
          </button>
        </div>
      </section>

    </div>
  );
}
