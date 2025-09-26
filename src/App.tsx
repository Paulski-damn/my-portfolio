import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Moon, Sun } from 'lucide-react';
import FormalPic from './assets/formalpic.jpg';
import logoImg from './assets/logonb.png';
import myPhoto from "./assets/vaxibloom.png";
import aboutPhoto from "./assets/self.jpg";

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
  const [darkMode, setDarkMode] = useState(false);

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
    level: number;
    type: "frontend" | "backend" | "database" | "DevOps_Tools";
    logo: string; // path to local logo
  }

  const skills: Skill[] = [
    // Frontend
    { name: "Bootstrap", level: 50, type: "frontend", logo: "/logos/bootstrap.svg" },
    { name: "Tailwind CSS", level: 50, type: "frontend", logo: "/logos/tailwindcss.svg" },
    { name: "JavaScript", level: 50, type: "frontend", logo: "/logos/javascript.svg" },
    { name: "HTML5", level: 80, type: "frontend", logo: "/logos/html5.svg" },
    { name: "CSS3", level: 70, type: "frontend", logo: "/logos/css.svg" },

    // Backend
    { name: "PHP", level: 80, type: "backend", logo: "/logos/php-logo.svg" },
    { name: "Laravel", level: 50, type: "backend", logo: "/logos/laravel.svg" },

    // Database
    { name: "MySQL", level: 80, type: "database", logo: "/logos/mysql.svg" },

    // DevOps & Tools
    { name: "Git", level: 60, type: "DevOps_Tools", logo: "/logos/git.svg" },
    { name: "GitHub", level: 50, type: "DevOps_Tools", logo: "/logos/github.svg" },
    { name: "Vercel", level: 70, type: "DevOps_Tools", logo: "/logos/vercel.svg" },
    { name: "Infinity Free", level: 50, type: "DevOps_Tools", logo: "/logos/xampp.svg" },
    { name: "XAMPP", level: 80, type: "DevOps_Tools", logo: "/logos/xampp.svg" },
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
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {/* Profile picture with creative hover */}
            <div className="relative w-32 h-32 mt-10 mx-auto mb-6 group">
              <div
                className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center text-4xl font-bold ${darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                  }`}
              >
                <img
                  src={FormalPic}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full "
                />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/50 animate-pulse group-hover:animate-spin transition-all duration-500"></div>
            </div>

            {/* Name with typing effect hover */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-300 hover:scale-105 cursor-default bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text hover:text-transparent ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Paul Andrei Ramos
            </h1>

            {/* Subtitle with wave effect */}
            <p className={`text-xl md:text-2xl mb-8 transition-all duration-300 hover:scale-110 hover:text-blue-500 cursor-default ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Web Developer
            </p>

            {/* Description with slide effect */}
            <p className={`text-lg mb-8 max-w-2xl mx-auto  ${darkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500'
              }`}>
              A fresh graduate with a Bachelor of Science in Computer Science.
              I build modern, responsive web applications with intermediate knowledge in full-stack development.
            </p>
          </div>

          {/* Social links with enhanced hover */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Paulski-damn" className={`transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:rotate-12 ${darkMode ? 'text-gray-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/50' : 'text-gray-600 hover:text-gray-900 hover:shadow-lg hover:shadow-blue-500/50'
              }`}>
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/paul-andrei-ramos-81045630b/" className={`transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:-rotate-12 ${darkMode ? 'text-gray-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/50' : 'text-gray-600 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/50'
              }`}>
              <Linkedin size={28} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=ramospauul@gmail.com"
              target="_blank"
              rel="noopener noreferrer" className={`transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:rotate-12 ${darkMode ? 'text-gray-400 hover:text-red-400 hover:shadow-lg hover:shadow-red-500/50' : 'text-gray-600 hover:text-red-600 hover:shadow-lg hover:shadow-red-500/50'
                }`}>
              <Mail size={28} />
            </a>
          </div>

          {/* CTA Button with pulse effect */}
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          {/* Animated chevron */}
          <div className="mt-16 animate-bounce hover:animate-pulse">
            <ChevronDown size={32} className={`mx-auto transition-all duration-300 hover:scale-125 hover:text-blue-500 cursor-pointer ${darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-8 text-center transition-all duration-300 hover:scale-105 hover:text-blue-600 cursor-default ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Text with hover effects */}
              <p className={`text-lg transition-all duration-300 cursor-default ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600'
                }`}>
                I'm Paul Andrei Ramos, a recent graduate with a Bachelor of Science in Computer Science.
                My interest lies in web development, with a focus on building practical and user-friendly applications.
              </p>
              <p className={`text-lg transition-all duration-300 cursor-default ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600'
                }`}>
                Through my academic projects, including a Infant immunization system, I gained experience
                in PHP, and MySQL, while also exploring modern frontend tools like JavaScript and Tailwind CSS.
              </p>
              <p className={`text-lg transition-all duration-300 cursor-default ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600'
                }`}>
                When I'm not coding, I enjoy exploring open-source projects, learning new technologies, and improving my skills.
                I'm committed to writing clean, maintainable code and following best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-lg cursor-default ${darkMode
                  ? 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/40'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}>
                  Effective Communicator
                </span>
                <span className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 hover:-rotate-2 hover:shadow-lg cursor-default ${darkMode
                  ? 'bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/40'
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  }`}>
                  Collaborative
                </span>
                <span className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-lg cursor-default ${darkMode
                  ? 'bg-gray-600/20 text-gray-300 hover:bg-gray-600/40'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                  Quick Learner
                </span>
              </div>
            </div>
            <div className="relative group">
              {/* Image with creative hover */}
              <div className={`w-full h-80 rounded-lg shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:shadow-blue-500/50 ${darkMode
                ? "bg-gray-900"
                : "bg-white"
                }`}>
                <img
                  src={aboutPhoto}
                  alt="About Photo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div>
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
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-12 text-center transition-all duration-300 hover:scale-105 hover:text-blue-600 cursor-default ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Skills & Technologies
          </h2>

          {/* Frontend */}
          <h3
            className={`text-2xl font-semibold mb-6 transition-all duration-300 hover:scale-105 hover:text-blue-500 cursor-default ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Frontend
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills
              .filter((s) => s.type === "frontend")
              .map((skill) => (
                <div key={skill.name} className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-6 h-6 object-contain transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 ${darkMode ? "filter invert" : ""
                          }`}
                      />
                      <span
                        className={`font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-blue-500 ${darkMode ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`transition-all duration-300 group-hover:scale-110 group-hover:text-blue-500 ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 transition-all duration-300 group-hover:h-3 ${darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                  >
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/50 relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Divider with hover effect */}
          <hr
            className={`border-t-2 my-8 transition-all duration-300 hover:border-blue-500 ${darkMode ? "border-gray-600" : "border-gray-300"
              }`}
          />

          {/* Backend */}
          <h3
            className={`text-2xl font-semibold mb-6 transition-all duration-300 hover:scale-105 hover:text-green-500 cursor-default ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Backend
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills
              .filter((s) => s.type === "backend")
              .map((skill) => (
                <div key={skill.name} className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-6 h-6 object-contain transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12 ${darkMode ? "filter invert" : ""
                          }`}
                      />
                      <span
                        className={`font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-green-500 ${darkMode ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`transition-all duration-300 group-hover:scale-110 group-hover:text-green-500 ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 transition-all duration-300 group-hover:h-3 ${darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                  >
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-green-500/50 relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Divider */}
          <hr
            className={`border-t-2 my-8 transition-all duration-300 hover:border-purple-500 ${darkMode ? "border-gray-600" : "border-gray-300"
              }`}
          />

          {/* Database */}
          <h3
            className={`text-2xl font-semibold mb-6 transition-all duration-300 hover:scale-105 hover:text-purple-500 cursor-default ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Database
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills
              .filter((s) => s.type === "database")
              .map((skill) => (
                <div key={skill.name} className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-6 h-6 object-contain transition-all duration-300 group-hover:scale-125 group-hover:rotate-45 ${darkMode ? "filter invert" : ""
                          }`}
                      />
                      <span
                        className={`font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-purple-500 ${darkMode ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`transition-all duration-300 group-hover:scale-110 group-hover:text-purple-500 ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 transition-all duration-300 group-hover:h-3 ${darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                  >
                    <div
                      className="bg-gradient-to-r from-purple-500 to-violet-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/50 relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Divider */}
          <hr
            className={`border-t-2 my-8 transition-all duration-300 hover:border-orange-500 ${darkMode ? "border-gray-600" : "border-gray-300"
              }`}
          />

          {/* DevOps & Tools */}
          <h3
            className={`text-2xl font-semibold mb-6 transition-all duration-300 hover:scale-105 hover:text-orange-500 cursor-default ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            DevOps & Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills
              .filter((s) => s.type === "DevOps_Tools")
              .map((skill) => (
                <div key={skill.name} className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-6 h-6 object-contain transition-all duration-300 group-hover:scale-125 group-hover:-rotate-45 ${darkMode ? "filter invert" : ""
                          }`}
                      />
                      <span
                        className={`font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-orange-500 ${darkMode ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`transition-all duration-300 group-hover:scale-110 group-hover:text-orange-500 ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 transition-all duration-300 group-hover:h-3 ${darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                  >
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-orange-500/50 relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
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