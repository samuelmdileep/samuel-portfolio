import React, { useState } from 'react';
import { 
  ExternalLink, MessageSquare, Music, Briefcase, Activity, Award, 
  BatteryCharging, Wind, Lock, Sun, Flame, Globe, Plug, Code2,
  Zap, Mail, Share2, User, ArrowRight, Menu, X, ChevronDown, ChevronUp
} from 'lucide-react';

// --- SOFTWARE PROJECTS ---
const softwareProjects = [
  {
    id: 1,
    title: "Pager Chat App",
    description: "A real-time messaging application featuring message synchronization, low-latency communication, and a clean UI.",
    tags: ["Flutter", "Dart", "Firebase"],
    icon: <MessageSquare size={24} />,
    image: "pager.png", 
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
    githubLink: "https://github.com/samuelmdileep/Pagerchat",
    liveLink: "https://samuelmdileep.github.io/PagerChat_Web/" 
  },
  {
    id: 2,
    title: "Music Player App",
    description: "Feature-rich offline music player with real-time seekbar, directory browsing, and Provider state management.",
    tags: ["Flutter", "Dart"],
    icon: <Music size={24} />,
    image: "music.png", 
    cardStyle: "bg-gradient-to-br from-green-50 to-white border-green-300 shadow-slate-200 hover:shadow-green-300/60",
    iconStyle: "text-brand-green bg-white",
    textHover: "group-hover:text-brand-green",
    githubLink: "https://github.com/samuelmdileep/Music-Player"
  },
  {
    id: 7,
    title: "HorizonWebs Official Site",
    description: "The digital storefront and primary portfolio for my freelance web development agency, focusing on scalable and practical systems.",
    tags: ["React", "Tailwind CSS"],
    icon: <Globe size={24} />,
    image: "horizon.png", 
    cardStyle: "bg-gradient-to-br from-green-50 to-white border-green-300 shadow-slate-200 hover:shadow-green-300/60",
    iconStyle: "text-brand-green bg-white",
    textHover: "group-hover:text-brand-green",
    liveLink: "https://horizonwebs.netlify.app/"
  },
  {
    id: 3,
    title: "AI Resume Generator",
    description: "AI-powered resume generation platform with structured templates, Firebase data collection, and multi-template rendering.",
    tags: ["Firebase", "AI", "Web"],
    icon: <Code2 size={24} />,
    image: "ai.png", 
    cardStyle: "bg-gradient-to-br from-slate-50 to-white border-slate-300 shadow-slate-200 hover:shadow-slate-300/80",
    iconStyle: "text-slate-600 bg-white",
    textHover: "group-hover:text-slate-700",
    githubLink: "https://github.com/samuelmdileep/resume-ai",
  },
  {
    id: 4,
    title: "SkillsDoc Platform",
    description: "A skill documentation platform with Firebase Auth, cloud storage integration, and scalable architecture for resume exports.",
    tags: ["Firebase", "Web Tech"],
    icon: <Briefcase size={24} />,
    image: "skill.png", 
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
    githubLink: "https://github.com/samuelmdileep/SkillsDoc",
    liveLink: "https://samuelmdileep.github.io/SkillsDoc/dashboard.html"
  },
  {
    id: 5,
    title: "Smart Med Scan",
    description: "A HorizonWebs health-tech solution for scanning and managing medical records with structured data storage.",
    tags: ["HealthTech", "Data Storage"],
    icon: <Activity size={24} />,
    image: "med.png", 
    cardStyle: "bg-gradient-to-br from-green-50 to-white border-green-300 shadow-slate-200 hover:shadow-green-300/60",
    iconStyle: "text-brand-green bg-white",
    textHover: "group-hover:text-brand-green",
    liveLink: "https://samuelmdileep.github.io/smart-med-scan/"
  },
  {
    id: 6,
    title: "Certificator",
    description: "A HorizonWebs platform that automates certificate creation and management for events, colleges, and organizations.",
    tags: ["Automation", "Web Tech"],
    icon: <Award size={24} />,
    image: "certificator.png", 
    cardStyle: "bg-gradient-to-br from-slate-50 to-white border-slate-300 shadow-slate-200 hover:shadow-slate-300/80",
    iconStyle: "text-slate-600 bg-white",
    textHover: "group-hover:text-slate-700",
  },
  {
    id: 101,
    title: "EV Charging Simulator",
    description: "🏆 1st Prize IEEE ElectroVision. Real-time EV infrastructure simulation platform integrating Firebase and Mapbox APIs.",
    tags: ["Tailwind", "Firebase", "Mapbox"],
    icon: <BatteryCharging size={24} />,
    image: "ev.png", 
    cardStyle: "bg-gradient-to-br from-green-50 to-white border-green-300 shadow-slate-200 hover:shadow-green-300/60",
    iconStyle: "text-brand-green bg-white",
    textHover: "group-hover:text-brand-green",
    githubLink: "https://github.com/samuelmdileep/ev-simulator",
  },
  {
    id: 110,
    title: "Valanja Vazhi Maps",
    description: "Creative routing application that prioritizes slower and scenic paths instead of shortest routes, built to explore alternative navigation logic.",
    tags: ["Mapbox", "Routing", "Web App"],
    icon: <ExternalLink size={24} />,
    image: "map.png",
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
    githubLink: "https://github.com/samuelmdileep/valanja-vazhi",
    liveLink: "https://samuelmdileep.github.io/valanja-vazhi/"
  },
  {
    id: 111,
    title: "Morse Quest",
    description: "Interactive Morse code quiz web app developed for IEEE HackHer event, enabling participants to learn and test Morse decoding in real time.",
    tags: ["Web App", "Quiz", "IEEE"],
    icon: <Code2 size={24} />,
    image: "quiz.png",
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
  }
];

// --- HARDWARE & IOT PROJECTS ---
const hardwareProjects = [
 {
    id: 105,
    title: "Firefighting Drone",
    description: "🏆 1st Prize Dept Competition. Drone prototype designed for targeted fire suppression and rapid emergency response.",
    tags: ["Drone Tech", "Hardware"],
    icon: <Flame size={24} />,
    image: "drone.jpeg", 
    cardStyle: "bg-gradient-to-br from-slate-50 to-white border-slate-300 shadow-slate-200 hover:shadow-slate-300/80",
    iconStyle: "text-slate-600 bg-white",
    textHover: "group-hover:text-slate-700",
  },
  {
    id: 102,
    title: "Gas & CO Detection",
    description: "🏆 2nd Prize IEEE Espire. Safety-critical embedded system for detecting hazardous gases and triggering auto-ventilation.",
    tags: ["Embedded C", "Sensors"],
    icon: <Wind size={24} />,
    image: "gas.jpg", 
    cardStyle: "bg-gradient-to-br from-slate-50 to-white border-slate-300 shadow-slate-200 hover:shadow-slate-300/80",
    iconStyle: "text-slate-600 bg-white",
    textHover: "group-hover:text-slate-700",
  },
  {
    id: 108,
    title: "Smart Plug System",
    description: "🏆 4th Prize IEEE Ampower. Intelligent smart plug that monitors power usage and automatically cuts off supply to prevent energy waste.",
    tags: ["IoT", "Automation", "Energy"],
    icon: <Plug size={24} />,
    image: "plug.png",
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
  },
  {
    id: 103,
    title: "WiFi Smart Locker",
    description: "IoT-based smart locking system controllable via a custom Flutter mobile application over WiFi.",
    tags: ["Flutter", "ESP8266", "IoT"],
    icon: <Lock size={24} />,
    image: "lock.png", 
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
  },
  {
    id: 104,
    title: "Solar Panel Tracker",
    description: "Intelligent dual-axis solar tracking system using 4 LDRs and an ESP32 to maximize energy efficiency.",
    tags: ["ESP32", "Sensors"],
    icon: <Sun size={24} />,
    image: "solar.jpeg", 
    cardStyle: "bg-gradient-to-br from-green-50 to-white border-green-300 shadow-slate-200 hover:shadow-green-300/60",
    iconStyle: "text-brand-green bg-white",
    textHover: "group-hover:text-brand-green",
  },
  {
    id: 106,
    title: "AmpRun",
    description: "Foot pressure analysis system that detects weight distribution and provides feedback for improved balance, posture, and movement efficiency.",
    tags: ["IoT", "Sensors", "HealthTech"],
    icon: <Zap size={24} />,
    image: "amprun.jpeg",
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
  },
  {
    id: 107,
    title: "Temperature Regulated Fan",
    description: "Smart fan system that automatically adjusts speed based on temperature using sensors, with a custom 3D printed base.",
    tags: ["IoT", "Sensor", "3D Printing"],
    icon: <Wind size={24} />,
    image: "fan.jpeg",
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
  },
  {
    id: 109,
    title: "Automatic Air Freshener",
    description: "Hardware-based system using 555 timer IC and counter circuit to automatically spray air freshener at set intervals.",
    tags: ["555 Timer", "Counter", "Electronics"],
    icon: <Wind size={24} />,
    image: "air.png",
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
  },
  {
    id: 112,
    title: "Ambulance Siren Generator",
    description: "Analog siren generator using 555 timer IC to produce alternating tone frequencies, replicating alert sounds through oscillator circuits.",
    tags: ["555 Timer", "Analog", "Oscillator"],
    icon: <Activity size={24} />,
    image: "sirene.jpeg",
    cardStyle: "bg-gradient-to-br from-sky-50 to-white border-sky-300 shadow-slate-200 hover:shadow-sky-300/60",
    iconStyle: "text-brand-blue bg-white",
    textHover: "group-hover:text-brand-blue",
  }
];

export default function App() {
  // Navigation & Toggle States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllSoftware, setShowAllSoftware] = useState(false);
  const [showAllHardware, setShowAllHardware] = useState(false);
  
  const renderCards = (projectsArray) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {projectsArray.map((project) => (
        <div key={project.id} className={`group border-2 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full ${project.cardStyle}`}>
          
          <div className="h-48 md:h-56 w-full relative overflow-hidden bg-slate-100 border-b border-slate-100/50 flex items-center justify-center text-slate-400">
            <span className="absolute z-0 text-sm font-medium tracking-widest uppercase text-center px-4">
              {project.title}
            </span>
            <img 
              src={project.image} 
              alt={project.title} 
              className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <div className={`absolute top-4 right-4 z-20 p-2.5 md:p-3 rounded-xl shadow-lg ${project.iconStyle}`}>
              {project.icon}
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-grow bg-white/50 backdrop-blur-sm z-10">
            <h3 className={`text-xl md:text-2xl font-bold mb-3 text-slate-800 transition-colors ${project.textHover}`}>
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-slate-600 mb-6 flex-grow leading-relaxed font-medium">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] md:text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 px-2.5 py-1.5 rounded-lg text-slate-600 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-auto pt-5 border-t-2 border-slate-100/50">
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-brand-blue transition-colors"
                >
                  <ExternalLink size={16} /> Live Site
                </a>
              )}
              
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <Share2 size={16} /> Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      
      {/* 🌟 FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-100/90 via-white/95 to-sky-100/90 backdrop-blur-md border-b border-white/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          
          {/* Logo / Title */}
          <div className="flex items-center gap-2 cursor-pointer relative z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-emerald-500/10 p-1.5 md:p-2 rounded-xl">
              <Code2 size={24} className="text-emerald-500" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-emerald-500 uppercase">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600">
            <a href="#software" className="hover:text-emerald-500 transition-colors">Software</a>
            <a href="#hardware" className="hover:text-emerald-500 transition-colors">Hardware & IoT</a>
            <a href="#contact" className="bg-emerald-50 border border-emerald-200 text-emerald-600 px-5 py-2.5 rounded-full hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden p-2 text-emerald-600 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <nav className="flex flex-col p-6 gap-4 font-bold text-slate-600 text-center">
            <a href="#software" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-emerald-500">Software Projects</a>
            <a href="#hardware" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-emerald-500">Hardware & IoT</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-2 bg-emerald-50 border border-emerald-200 text-emerald-600 px-5 py-3 rounded-full hover:bg-emerald-500 hover:text-white transition-all">
              Let's Talk
            </a>
          </nav>
        </div>
      </header>
      
      {/* 🚀 IMAGE-MATCHED DASHBOARD HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 auto-rows-[minmax(180px,auto)] items-stretch">
          
          {/* 1. Main Intro Card (Left Box) */}
          <div className="lg:col-span-8 bg-white/90 backdrop-blur-sm rounded-[2rem] p-6 sm:p-10 md:p-14 relative border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-center">
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-100 px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-6 md:mb-8 shadow-sm">
                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-widest">Available for new projects</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-800 leading-tight mb-4 md:mb-6 tracking-tight">
                Samuel <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">M Dileep</span>
              </h1>
              
             <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-8 md:mb-10 font-medium">
                Software Developer and Electronics Innovator at Mar Athanasius College of Engineering (EEE), designing intelligent IoT systems and high-performance Flutter applications. Founder of <a href="https://horizonwebs.netlify.app/" target="_blank" rel="noreferrer" className="text-slate-800 font-bold underline decoration-emerald-400 underline-offset-4 hover:text-emerald-600 transition-colors">Horizon Webs</a>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#software" className="bg-emerald-600 text-white px-6 md:px-8 py-3.5 rounded-full font-bold text-base md:text-lg hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                  View Projects <ArrowRight size={20} />
                </a>
                <a href="#contact" className="bg-transparent text-slate-800 border-2 border-slate-300 px-6 md:px-8 py-3.5 rounded-full font-bold text-base md:text-lg hover:border-slate-800 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                  Contact Me <Mail size={20} className="text-slate-600" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. Profile Photo Card (Right Box) */}
          <div className="lg:col-span-4 rounded-[2rem] relative bg-gradient-to-br from-emerald-400 to-sky-400 p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.1)] group min-h-[300px] md:min-h-[350px] flex">
             <div className="relative w-full h-full rounded-[1.65rem] overflow-hidden bg-slate-200">
               <img 
                 src="photo.jpeg" 
                 alt="Samuel M Dileep" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 onError={(e) => { e.target.style.display = 'none'; }}
               />
               
               <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 -z-10">
                  <span className="text-sm uppercase font-bold tracking-widest flex items-center gap-2"><User size={18}/> Photo</span>
               </div>

               <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5 bg-white/50 backdrop-blur-xl py-2.5 px-3 md:py-3 md:px-4 rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 transition-transform duration-500 group-hover:-translate-y-1">
                 <div className="flex-shrink-0 bg-white p-2 rounded-full border border-sky-50 shadow-sm flex items-center justify-center">
                   <Globe size={18} className="text-sky-500" />
                 </div>
                 <div className="flex flex-col justify-center mt-0.5">
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none mb-1 md:mb-1.5">Founder @</p>
                   <p className="text-[13px] md:text-[15px] font-black text-slate-800 leading-none">Horizon Webs</p>
                 </div>
               </div>
             </div>
          </div>

          {/* 3. Eventloops Experience Strip */}
          <div className="lg:col-span-7 bg-slate-900 rounded-[2rem] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-center lg:mt-2 border border-slate-800">
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
            
            <div className="absolute -right-8 top-12 w-64 h-72 bg-slate-800/40 rounded-2xl border border-slate-700/50 shadow-2xl backdrop-blur-md transform rotate-[-6deg] group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-500 hidden md:block">
              <div className="w-full h-8 border-b border-slate-700/50 flex items-center px-4 gap-1.5 bg-slate-900/50 rounded-t-2xl">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <div className="w-3/4 h-3 rounded-full bg-slate-700/50"></div>
                <div className="w-1/2 h-3 rounded-full bg-slate-700/50"></div>
                <div className="mt-2 grid grid-cols-2 gap-3">
                   <div className="h-20 rounded-xl bg-emerald-500/10 border border-emerald-500/20"></div>
                   <div className="h-20 rounded-xl bg-sky-500/10 border border-sky-500/20"></div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 pointer-events-none">
              <span className="text-emerald-400 font-bold tracking-widest text-[10px] md:text-xs uppercase bg-emerald-400/10 px-3 py-1.5 rounded-full mb-4 inline-block border border-emerald-400/20 shadow-sm">
                Active Role
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Frontend Developer <br/>@ Eventloops</h3>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-sm lg:max-w-md leading-relaxed">
                Architecting the UI/UX for <span className="text-white font-semibold underline decoration-emerald-400 underline-offset-4">Eventbee</span> using Flutter, focusing on real-time performance and beautiful user interactions.
              </p>
            </div>
          </div>

          {/* 4. IoT & Skills Cloud Card */}
          <div className="lg:col-span-5 bg-slate-900 rounded-[2rem] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-center lg:mt-2 group border border-slate-800">
            
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-75"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-75"></div>
            
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1e293b_2px,transparent_2px)] [background-size:24px_24px] z-0"></div>
            
            <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-transparent via-slate-700/50 to-transparent z-0"></div>
            <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent z-0"></div>
            
            <div className="absolute top-1/3 right-[46px] w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse z-0 hidden md:block"></div>
            <div className="absolute bottom-[78px] right-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse z-0 hidden md:block" style={{ animationDelay: '0.5s' }}></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 md:mb-8 text-white">
                <div className="p-2 md:p-2.5 bg-slate-800 rounded-xl border border-slate-700 shadow-inner">
                   <Zap size={18} className="text-emerald-400 md:w-5 md:h-5" />
                </div>
                <h4 className="font-bold uppercase tracking-[0.15em] text-xs md:text-sm text-slate-300">Core Arsenal</h4>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  "Flutter & Dart", 
                  "IoT & ESP32", 
                  "React & Tailwind", 
                  "Embedded C",
                  "Firebase & Cloud", 
                  "PCB & Circuits",
                  "AutoCAD & Fusion",
                  "UI/UX & Figma",
                  "Automation",
                  "REST APIs"
                ].map((skill) => (
                  <span key={skill} className="bg-slate-800 border border-slate-700/50 px-3 md:px-4 py-2 md:py-2.5 rounded-xl font-bold text-[11px] md:text-sm text-slate-300 shadow-sm hover:bg-slate-800 hover:border-emerald-500/40 hover:text-white transition-all duration-300 flex items-center gap-2 group/pill cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover/pill:bg-emerald-400 group-hover/pill:shadow-[0_0_8px_#34d399] transition-all"></div>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Projects Section */}
      <section id="software" className="max-w-7xl mx-auto pt-10 md:pt-16 pb-16 px-4 md:px-6 relative scroll-mt-24">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Software & Apps</h2>
          <div className="w-16 md:w-24 h-1.5 bg-brand-blue mx-auto rounded-full shadow-sm"></div>
        </div>
        
        {/* Render only 6 projects initially */}
        {renderCards(showAllSoftware ? softwareProjects : softwareProjects.slice(0, 6))}

        {/* Show More / Show Less Button */}
        {softwareProjects.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAllSoftware(!showAllSoftware)}
              className="group flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-600 px-8 py-3 rounded-full font-bold hover:border-sky-400 hover:text-sky-500 transition-all shadow-sm hover:shadow-md"
            >
              {showAllSoftware ? (
                <>Show Less <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" /></>
              ) : (
                <>Show More <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" /></>
              )}
            </button>
          </div>
        )}
      </section>

      {/* Hardware & IoT Projects Section */}
      <section id="hardware" className="max-w-7xl mx-auto py-10 md:py-16 px-4 md:px-6 relative bg-white rounded-[2rem] md:rounded-[3rem] shadow-sm mb-12 md:mb-20 border border-slate-100 scroll-mt-24">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Hardware & Embedded IoT</h2>
          <div className="w-16 md:w-24 h-1.5 bg-brand-green mx-auto rounded-full shadow-sm"></div>
        </div>
        
        {/* Render only 6 projects initially */}
        {renderCards(showAllHardware ? hardwareProjects : hardwareProjects.slice(0, 6))}

        {/* Show More / Show Less Button */}
        {hardwareProjects.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAllHardware(!showAllHardware)}
              className="group flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-600 px-8 py-3 rounded-full font-bold hover:border-emerald-400 hover:text-emerald-500 transition-all shadow-sm hover:shadow-md"
            >
              {showAllHardware ? (
                <>Show Less <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" /></>
              ) : (
                <>Show More <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" /></>
              )}
            </button>
          </div>
        )}
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className="bg-slate-900 text-white py-16 md:py-20 px-4 md:px-6 rounded-t-[2rem] md:rounded-t-[3rem] mt-10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand-green/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-brand-blue/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight">Let's Build Something Great.</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Whether you need a scalable Flutter application, a custom hardware prototype, or a complete digital solution from Horizon Webs, I'm always open to discussing new projects.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mb-16 md:mb-20">
            <a href="mailto:samuelmdileep@gmail.com" className="flex items-center gap-2 bg-brand-green hover:bg-green-500 text-white px-8 py-3.5 md:py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto justify-center">
              <Mail size={20} /> Get in Touch
            </a>
            <a href="https://github.com/samuelmdileep" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 md:py-4 rounded-full font-bold transition-all w-full sm:w-auto justify-center backdrop-blur-sm border border-white/10 hover:border-white/20">
              <Share2 size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/samuel-m-dileep-b84960314/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 md:py-4 rounded-full font-bold transition-all w-full sm:w-auto justify-center backdrop-blur-sm border border-white/10 hover:border-white/20">
              <User size={20} /> LinkedIn
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs md:text-sm font-medium">
            <p>© {new Date().getFullYear()} Samuel M Dileep. All rights reserved.</p>
            <p>
              Founder of{" "}
              <a 
                href="https://horizonwebs.netlify.app/" 
                target="_blank" 
                rel="noreferrer"
                className="text-brand-blue font-bold hover:underline"
              >
                Horizon Webs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}