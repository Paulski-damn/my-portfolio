import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Moon, Sun } from 'lucide-react';
import logoImg from './assets/logonb.png';
import myPhoto from "./assets/vaxibloom.png";
import aboutPhoto from "./assets/formalpic.jpg";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
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
    { name: "Infinity Free", type: "DevOps_Tools", logo: "/logos/xampp.svg" },
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
                className={`text-2xl font-bold transition-all duration-300 hover:scale-105 hover:text-blue-500 cursor-pointer ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                {"<Paul Ramos/>"}
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
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900 hover:shadow-lg hover:shadow-blue-500/20'
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
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-red-400 hover:shadow-lg hover:shadow-red-500/30'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-red-600 hover:shadow-lg hover:shadow-red-500/20'
                    }`}
                >
                  <Mail size={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </div>
            {/* Right Side - Optional Code/Visual Element */}
            <div className="hidden lg:block">
              <div className={`rounded-2xl p-8 relative overflow-hidden ${darkMode
                ? 'bg-gray-800/50 border border-gray-700'
                : 'bg-white/80 border border-gray-200 shadow-2xl'
                }`}>
                {/* Code-like visual element */}
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className={`font-mono text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div>
                      <span className="text-blue-400">const</span>
                      <span className="text-green-400"> developer</span>
                      <span className="text-gray-400"> = </span>
                      <span className="text-yellow-400">{`{`}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">name</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-green-400">"Paul Ramos"</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">role</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-green-400">"Full Stack Developer"</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">passion</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-green-400">"Creating amazing digital experiences"</span>
                    </div>
                    <div>
                      <span className="text-yellow-400">{`}`}</span>
                      <span className="text-gray-400">;</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce"></div>
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
          <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-300 hover:scale-105 hover:text-blue-600 cursor-default ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:rotate-1 group cursor-pointer ${darkMode
                ? 'bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/60'
                : 'bg-white shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/20'
                }`}>

                {/* Project Image with overlay effect */}
                <div className={`h-48 flex items-center justify-center relative overflow-hidden ${darkMode ? "bg-gray-900" : "bg-white"}`}>
                  <img
                    src={myPhoto}
                    alt="VaxiBloom Project"
                    className="w-full h-full object-contain rounded-lg transition-all duration-500 m-3 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex space-x-4">
                        {project.githubUrl && (
                          <Github className="text-white" size={24} />
                        )}
                        {project.liveUrl && (
                          <ExternalLink className="text-white" size={24} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-105 ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                  <p className={`mb-4 text-sm transition-all duration-300 group-hover:text-gray-800 ${darkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600'
                    }`}>{project.description}</p>

                  {/* Technology tags with individual hover effects */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={`px-2 py-1 rounded text-xs transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-md cursor-default ${darkMode
                        ? 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/40'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons with enhanced hover */}
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className={`transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:rotate-12 ${darkMode ? 'text-gray-400 hover:text-white hover:shadow-lg hover:shadow-white/50' : 'text-gray-600 hover:text-gray-900 hover:shadow-lg hover:shadow-gray-900/50'
                        }`}>
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className={`transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:-rotate-12 ${darkMode ? 'text-gray-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/50' : 'text-gray-600 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/50'
                        }`}>
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 transition-all duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
        }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-8 transition-all duration-300 hover:scale-105 hover:text-blue-600 cursor-default ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>Get In Touch</h2>
          <p className={`text-xl mb-12 transition-all  ${darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            I'm always open to discussing new opportunities, interesting projects, and collaboration.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email - Enhanced hover effects */}
            <a
              href="mailto:ramospauul@gmail.com"
              className="space-y-4 block transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto hover:bg-blue-700 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/50 group-hover:rotate-12">
                <Mail className="text-white transition-all duration-300 group-hover:scale-125" size={24} />
              </div>
              <h3 className={`font-semibold transition-all duration-300 group-hover:text-blue-500 group-hover:scale-105 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Email
              </h3>
              <p className={`transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                ramospauul@gmail.com
              </p>
              {/* Floating animation elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
            </a>

            {/* GitHub - Enhanced hover effects */}
            <a
              href="https://github.com/Paulski-damn"
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-4 block transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer group relative"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto hover:bg-blue-700 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/50 group-hover:-rotate-12">
                <Github className="text-white transition-all duration-300 group-hover:scale-125" size={24} />
              </div>
              <h3 className={`font-semibold transition-all duration-300 group-hover:text-blue-500 group-hover:scale-105 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                GitHub
              </h3>
              <p className={`transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Paulski-damn
              </p>
              {/* Floating animation elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
            </a>

            {/* LinkedIn - Enhanced hover effects */}
            <a
              href="https://linkedin.com/in/paul-andrei-ramos-81045630b/"
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-4 block transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer group relative"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto hover:bg-blue-700 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/50 group-hover:rotate-6">
                <Linkedin className="text-white transition-all duration-300 group-hover:scale-125" size={24} />
              </div>
              <h3 className={`font-semibold transition-all duration-300 group-hover:text-blue-500 group-hover:scale-105 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                LinkedIn
              </h3>
              <p className={`transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Paul Andrei Ramos
              </p>
              {/* Floating animation elements */}
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
            </a>
          </div>

          {/* Enhanced CTA Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=ramospauul@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            {/* Sparkle effect */}
            <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t transition-all duration-300 ${darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className={`transition-all duration-300 hover:scale-105 hover:text-blue-500 cursor-default ${darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            © 2025 Paul Ramos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;