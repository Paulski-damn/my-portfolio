import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Moon, Sun } from 'lucide-react';
import logoImg from './assets/logonb.png';
import myPhoto from "./assets/vaxibloom.png";
import aboutPhoto from "./assets/formalpic.jpg";
import ResumeModal from "./ResumeModal";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  comingSoon?: boolean;
}

interface Skill {
  name: string;
  level: number;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or default to dark mode
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true; // Default to dark mode
  });


  // Sample data - replace with your own
  const projects: Project[] = [
    {
      title: "VaxiBloom",
      description: "Infant immunization system with automatic age-based vaccine eligibility checks, BHW scheduling, and admin dashboard with inventory, dose checks, barangay mapping,.",
      technologies: ["Bootstrap", "Vanilla-JavaScript", "Vanilla-PHP", "MySQL"],
      githubUrl: "https://github.com/Paulski-damn/Vaxibloom-php-app"
    },
    {
      title: 'Upcoming Project',
      description: 'Wala pa nga ni, gagawa pa lang.',
      technologies: ['Coming Soon'],
      githubUrl: "",
      comingSoon: true,
    },
    {
      title: 'Future Idea',
      description: 'Gagawa pa nga lang.',
      technologies: ['Planning'],
      githubUrl: "",
      comingSoon: true,
    }
  ];

  interface Skill {
    name: string;
    type: "frontend" | "backend" | "database" | "DevOps_Tools";
    logo: string;
  }

  const skills: Skill[] = [
    // Frontend
    { name: "Bootstrap", type: "frontend", logo: "/logos/bootstrap.svg" },
    { name: "Tailwind CSS", type: "frontend", logo: "/logos/tailwindcss.svg" },
    { name: "JavaScript", type: "frontend", logo: "/logos/javascript.svg" },
    { name: "HTML5", type: "frontend", logo: "/logos/html5.svg" },
    { name: "CSS3", type: "frontend", logo: "/logos/css.svg" },

    // Backend
    { name: "PHP", type: "backend", logo: "/logos/php-logo.svg" },
    { name: "Laravel", type: "backend", logo: "/logos/laravel.svg" },

    // Database
    { name: "MySQL", type: "database", logo: "/logos/mysql.svg" },

    // DevOps & Tools
    { name: "Git", type: "DevOps_Tools", logo: "/logos/git.svg" },
    { name: "GitHub", type: "DevOps_Tools", logo: "/logos/github.svg" },
    { name: "Vercel", type: "DevOps_Tools", logo: "/logos/vercel.svg" },
    { name: "Infinity Free", type: "DevOps_Tools", logo: "/logos/infinityfree.svg" },
    { name: "XAMPP", type: "DevOps_Tools", logo: "/logos/xampp.svg" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode
      ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-black'
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-sm border-b transition-all duration-300 ${darkMode
        ? 'bg-gray-900/90 border-gray-700'
        : 'bg-white/90 border-gray-200'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-3">
              <img
                src={logoImg}
                alt="PolCodes Logo"
                className={`w-10 h-10 rounded-lg object-contain transition-all duration-300 hover:rotate-12 hover:scale-110 ${darkMode ? "brightness-110" : "brightness-100"
                  }`}
              />
              <span
                className={`font-bold tracking-tight cursor-pointer transition-colors duration-300 text-lg sm:text-xl md:text-2xl lg:text-3xl ${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-500`}
              >
                {'<Paul Ramos/>'}
              </span>
            </a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-all duration-300 hover:scale-110 hover:shadow-md ${activeSection === item
                      ? 'bg-blue-600 text-white shadow-lg'
                      : darkMode
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="/RESUME_RAMOS.pdf"
                  download
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium capitalize transition-all duration-300 border ${darkMode
                    ? 'text-gray-300 bg-gray-800 border-gray-700 hover:border-blue-500 hover:bg-gray-700 hover:text-white shadow-sm hover:shadow-md'
                    : 'text-gray-700 bg-white border-gray-300 hover:border-blue-500 hover:bg-gray-50 hover:text-gray-900 shadow-sm hover:shadow-md'
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                    />
                  </svg>

                  <span>Resume</span>
                </a>
              </div>

              {/* Dark Mode Toggle with enhanced hover */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-all duration-300 hover:scale-125 hover:rotate-180 ${darkMode
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-yellow-400'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                  }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-all duration-300 hover:scale-125 hover:rotate-180 ${darkMode
                  ? 'text-gray-300 hover:text-yellow-400'
                  : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-all duration-300 focus:outline-none hover:scale-110 ${darkMode
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${darkMode ? 'bg-gray-800' : 'bg-white border-t border-gray-200'
              }`}>
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize transition-all duration-300 hover:scale-105 hover:pl-6 ${darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="/RESUME_RAMOS.pdf"
                download
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium capitalize transition-all duration-300 shadow-sm ${darkMode
                  ? 'text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white hover:shadow-md'
                  : 'text-gray-600 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>

                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-4 pt-16 md:pt-0">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Greeting */}
              <div className="mb-4">
                <p className={`text-xl md:text-2xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hi, I'm
                </p>
              </div>

              {/* Name with enhanced gradient */}
              <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight cursor-default ${darkMode
                ? 'text-white'
                : 'text-gray-900'
                }`}>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Paul Andrei Ramos
                </span>
              </h1>
              {/* Description */}
              <p className={`text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl ${darkMode
                ? 'text-gray-300'
                : 'text-gray-600'
                }`}>
                A passionate <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Computer Science graduate</span> specializing in
                building modern, scalable web applications. I transform ideas into functional, user-friendly digital
                experiences using cutting-edge technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden group"
                >
                  <span className="relative z-10">View My Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className={`border-2 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group ${darkMode
                    ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-white'
                    : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                    }`}
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12 transition-all duration-500 group-hover:translate-x-full`}></div>
                </button>
              </div>

              {/* Social links */}
              <div className="flex space-x-4 md:space-x-6">
                <a
                  href="https://github.com/Paulski-damn"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${darkMode
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/20'
                    }`}
                >
                  <Github size={20} className="md:w-6 md:h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/paul-andrei-ramos-81045630b/"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${darkMode
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/20'
                    }`}
                >
                  <Linkedin size={20} className="md:w-6 md:h-6" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ramospauul@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${darkMode
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/20'
                    }`}
                >
                  <Mail size={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>


          {/* Scroll indicator */}
          <div className="mt-12 lg:mt-16 text-center animate-bounce">
            <ChevronDown
              size={28}
              className={`mx-auto transition-all duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer ${darkMode
                ? 'text-gray-400'
                : 'text-gray-500'
                }`}
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 hover:scale-105 cursor-default ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Passionate developer dedicated to crafting innovative digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section - Left Side */}
            <div className="relative group">
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${darkMode
                ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                : 'bg-gradient-to-br from-blue-50 to-indigo-100'
                }`}>
                <img
                  src={aboutPhoto}
                  alt="Paul Andrei Ramos - Web Developer"
                  className="w-full h-auto object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-105"
                />

                {/* Professional overlay elements */}
                <div className={`absolute inset-0 bg-gradient-to-t ${darkMode
                  ? 'from-gray-900/80 to-transparent'
                  : 'from-white/60 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6`}>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Full-Stack Developer
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-500 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-200"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-indigo-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-300"></div>
            </div>

            {/* Text Content - Right Side */}
            <div className="space-y-6">
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Crafting Digital Experiences <span className="text-blue-500">That Matter</span>
                </h3>

                <div className="space-y-4">
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    I'm a Paul Andrei Ramos, a recent gradute with a <span className="font-semibold text-blue-500">Bachelor of Science in Computer Science </span>. My journey in technology is driven by a commitment to solving real-world problems through clean, efficient code and user-centered design.
                  </p>

                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    My experience includes developing full-stack applications like <span className="font-semibold text-blue-500">VaxiBloom</span>, an infant immunization system that showcases my ability to handle complex data management, user authentication, and responsive interface design using modern technologies.
                  </p>

                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    I believe in continuous learning and staying updated with industry trends. When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and refining my skills to deliver exceptional digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 transition-all duration-300 ${darkMode ? "bg-gray-800/50" : "bg-gray-50"
          }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-300 hover:scale-105 hover:text-blue-600 cursor-default ${darkMode ? "text-white" : "text-gray-900"
              }`}>
              My Skills
            </h2>
            <p className={`text-xl max-w-2xl mx-auto transition-all duration-300 ${darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
              A combination of technical expertise and professional attributes that I bring to every project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Expertise */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 text-center transition-all duration-300 hover:scale-105 hover:text-blue-500 cursor-default ${darkMode ? "text-white" : "text-gray-900"
                }`}>
                Technical Expertise
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Frontend Development */}
                <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode
                  ? "bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/20"
                  : "bg-white border border-gray-200 hover:border-blue-500/50 hover:shadow-blue-500/10"
                  }`}>
                  <div className="flex items-center mb-4">
                    <h4 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Frontend Development
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {skills.filter(s => s.type === "frontend").map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-2 group cursor-default">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={`w-5 h-5 object-contain transition-all duration-300 group-hover:scale-125 ${darkMode ? "filter invert" : ""}`}
                        />
                        <span className={`text-sm transition-all duration-300 group-hover:text-blue-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Development */}
                <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode
                  ? "bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/20"
                  : "bg-white border border-gray-200 hover:border-blue-500/50 hover:shadow-blue-500/10"
                  }`}>
                  <div className="flex items-center mb-4">
                    <h4 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Backend Development
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {skills.filter(s => s.type === "backend").map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-2 group cursor-default">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={`w-5 h-5 object-contain transition-all duration-300 group-hover:scale-125 ${darkMode ? "filter invert" : ""}`}
                        />
                        <span className={`text-sm transition-all duration-300 group-hover:text-blue-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode
                  ? "bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/20"
                  : "bg-white border border-gray-200 hover:border-blue-500/50 hover:shadow-blue-500/10"
                  }`}>
                  <div className="flex items-center mb-4">
                    <h4 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Database
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {skills.filter(s => s.type === "database").map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-2 group cursor-default">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={`w-5 h-5 object-contain transition-all duration-300 group-hover:scale-125 ${darkMode ? "filter invert" : ""}`}
                        />
                        <span className={`text-sm transition-all duration-300 group-hover:text-blue-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DevOps & Tools */}
                <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode
                  ? "bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/20"
                  : "bg-white border border-gray-200 hover:border-blue-500/50 hover:shadow-blue-500/10"
                  }`}>
                  <div className="flex items-center mb-4">
                    <h4 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      DevOps & Tools
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {skills.filter(s => s.type === "DevOps_Tools").map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-2 group cursor-default">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={`w-5 h-5 object-contain transition-all duration-300 group-hover:scale-125 ${darkMode ? "filter invert" : ""}`}
                        />
                        <span className={`text-sm transition-all duration-300 group-hover:text-blue-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Attributes */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 text-center transition-all duration-300 hover:scale-105 hover:text-blue-500 cursor-default ${darkMode ? "text-white" : "text-gray-900"
                }`}>
                Professional Attributes
              </h3>

              <div className="space-y-6">
                {/* Collaboration */}
                <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode
                  ? "bg-gray-800/80 border border-gray-700 hover:border-blue-500/50"
                  : "bg-white border border-gray-200 hover:border-blue-500/50"
                  }`}>
                  <div className="flex items-start space-x-4">
                    <div>
                      <h4 className={`font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        Collaboration
                      </h4>
                      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Strong team player with excellent communication skills and experience in cross-functional teams.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Goal-Oriented */}
                <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode
                  ? "bg-gray-800/80 border border-gray-700 hover:border-blue-500/50"
                  : "bg-white border border-gray-200 hover:border-blue-500/50"
                  }`}>
                  <div className="flex items-start space-x-4">
                    <div>
                      <h4 className={`font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        Goal-Oriented
                      </h4>
                      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Focused on delivering high-quality results while meeting project deadlines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Problem Solving */}
                <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode
                  ? "bg-gray-800/80 border border-gray-700 hover:border-blue-500/50"
                  : "bg-white border border-gray-200 hover:border-blue-500/50"
                  }`}>
                  <div className="flex items-start space-x-4">
                    <div>
                      <h4 className={`font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        Problem Solving
                      </h4>
                      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Analytical thinker with a knack for finding efficient solutions to complex challenges.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fast Learner */}
                <div className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode
                  ? "bg-gray-800/80 border border-gray-700 hover:border-blue-500/50"
                  : "bg-white border border-gray-200 hover:border-blue-500/50"
                  }`}>
                  <div className="flex items-start space-x-4">
                    <div>
                      <h4 className={`font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        Fast Learner
                      </h4>
                      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Quick to adapt to new technologies and methodologies, always eager to expand my knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-12 text-center transition-colors duration-300 hover:text-blue-600 ${darkMode ? 'text-white' : 'text-gray-900'
              }`}
          >
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl transition-all duration-300
            hover:shadow-xl hover:scale-105
            ${darkMode
                    ? 'bg-gray-800/80 border border-gray-700 hover:border-blue-500/50'
                    : 'bg-white border border-gray-200 hover:border-blue-500/50'
                  }`}
              >
                {/* Project Image / Placeholder */}
                <div
                  className={`relative h-48 overflow-hidden rounded-t-xl flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'
                    }`}
                >
                  {project.comingSoon ? (
                    <span
                      className={`text-sm font-medium italic ${darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}
                    >
                      Wala pa nga ni, gagawa pa lang
                    </span>
                  ) : (
                    <img
                      src={project.image ?? myPhoto}
                      alt={project.title}
                      className="w-full h-full object-contain p-4"
                    />
                  )}

                  {/* Blue highlight line */}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-500 transition-all duration-300 hover:w-full" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-300 hover:text-blue-500 ${darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {project.title}
                    {project.comingSoon && (
                      <span className="ml-2 text-xs bg-yellow-400/20 text-yellow-500 px-2 py-0.5 rounded">
                        Coming Soon
                      </span>
                    )}
                  </h3>

                  <p
                    className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded transition-colors duration-200 ${darkMode
                          ? 'bg-blue-600/20 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    {!project.comingSoon && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-200 hover:text-blue-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                      >
                        <Github size={20} />
                      </a>
                    )}

                    {!project.comingSoon && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-200 hover:text-blue-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.comingSoon && (
                      <span
                        className={`text-xs italic ${darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                      >
                        In progress
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'
          }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'
              }`}
          >
            Get In Touch
          </h2>

          <p
            className={`text-lg mb-14 ${darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
          >
            I’m open to new opportunities, collaborations, and meaningful projects.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {/* Email */}
            <a
              href="mailto:ramospauul@gmail.com"
              className={`rounded-xl p-6 border transition-all duration-300
          hover:shadow-lg hover:-translate-y-1
          ${darkMode
                  ? 'border-gray-700 bg-gray-800 hover:border-blue-500/50'
                  : 'border-gray-200 bg-white hover:border-blue-500/50'
                }`}
            >
              <Mail
                className={`mx-auto mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                size={26}
              />
              <h3
                className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}
              >
                Email
              </h3>
              <p
                className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                ramospauul@gmail.com
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Paulski-damn"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl p-6 border transition-all duration-300
          hover:shadow-lg hover:-translate-y-1
          ${darkMode
                  ? 'border-gray-700 bg-gray-800 hover:border-blue-500/50'
                  : 'border-gray-200 bg-white hover:border-blue-500/50'
                }`}
            >
              <Github
                className={`mx-auto mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                size={26}
              />
              <h3
                className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}
              >
                GitHub
              </h3>
              <p
                className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                Paulski-damn
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/paul-andrei-ramos-81045630b/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl p-6 border transition-all duration-300
          hover:shadow-lg hover:-translate-y-1
          ${darkMode
                  ? 'border-gray-700 bg-gray-800 hover:border-blue-500/50'
                  : 'border-gray-200 bg-white hover:border-blue-500/50'
                }`}
            >
              <Linkedin
                className={`mx-auto mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                size={26}
              />
              <h3
                className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}
              >
                LinkedIn
              </h3>
              <p
                className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                Paul Andrei Ramos
              </p>
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=ramospauul@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg
        bg-blue-600 text-white font-medium
        transition-all duration-300
        hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </a>
        </div>
      </section>


      <footer
        className={`bg-transparent border-t transition-colors duration-300
    ${darkMode ? 'border-gray-700 bg-gray-900/30' : 'border-gray-200 bg-white/50'}
  `}
      >
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">

          {/* Left: Branding */}
          <div className="flex flex-col items-start">
            <span className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {"<Paul Ramos/>"}
            </span>
            <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Full-Stack Developer | Portfolio & Projects
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {['About', 'Projects', 'Contact', 'Resume'].map((link) => (
              <a
                key={link}
                href={link === 'Resume' ? '/RESUME_RAMOS.pdf' : `#${link.toLowerCase()}`}
                download={link === 'Resume'}
                className={`group relative text-sm font-medium transition-colors duration-300
            ${darkMode ? 'text-gray-300 hover:text-blue-500' : 'text-gray-700 hover:text-blue-500'}
          `}
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Paulski-damn"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/paul-andrei-ramos-81045630b/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ramospauul@gmail.com"
              className={`transition-all duration-300 hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <Mail size={24} />
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className={`mt-8 text-center text-sm pb-4 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
          © {new Date().getFullYear()} Paul Ramos. All rights reserved.
        </div>
      </footer>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default Portfolio;
