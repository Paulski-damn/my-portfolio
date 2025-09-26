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
            <div className="flex items-center space-x-3">
              {/* Your actual logo */}
              <img
                src={logoImg}
                alt="PolCodes Logo"
                className={`w-10 h-10 rounded-lg object-contain transition-all duration-300 ${darkMode ? 'brightness-110' : 'brightness-100'
                  }`}
              />

              {/* Brand Text */}
              <span className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>{"<Paul Ramos/>"}</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-200 ${activeSection === item
                      ? 'bg-blue-600 text-white'
                      : darkMode
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-colors duration-200 ${darkMode
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md transition-colors duration-200 ${darkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors duration-200 focus:outline-none ${darkMode
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
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize transition-colors duration-200 ${darkMode
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
            <div
              className={`w-32 h-32 mt-10 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center text-4xl font-bold transition-all duration-300 ${darkMode
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                }`}
            >
              <img
                src={FormalPic}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Paul Andrei Ramos
            </h1>
            <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Web Developer
            </p>
            <p className={`text-lg mb-8 max-w-2xl mx-auto transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
              I create robust, scalable web application with modern technologies.
              Passionate about clean code, system architecture, and building solutions that matter.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Paulski-damn" className={`transition-colors duration-200 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/paul-andrei-ramos-81045630b/" className={`transition-colors duration-200 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
              <Linkedin size={28} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=ramospauul@gmail.com"
              target="_blank"
              rel="noopener noreferrer" className={`transition-colors duration-200 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>
              <Mail size={28} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className={`mx-auto transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Aspiring web developer passionate about building web application and learning modern technologies.
                I enjoy turning ideas into functional solutions and continuously growing my skills.
              </p>
              <p className={`text-lg transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                When I'm not coding, I enjoy exploring open-source projects, learning new technologies, and improving my skills.
                I’m committed to writing clean, maintainable code and following best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${darkMode
                  ? 'bg-blue-600/20 text-blue-300'
                  : 'bg-blue-100 text-blue-700'
                  }`}>
                  Effective Communicator
                </span>
                <span className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${darkMode
                  ? 'bg-indigo-600/20 text-indigo-300'
                  : 'bg-indigo-100 text-indigo-700'
                  }`}>
                  Collaborative
                </span>
                <span className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${darkMode
                  ? 'bg-gray-600/20 text-gray-300'
                  : 'bg-gray-100 text-gray-700'
                  }`}>
                  Quick Learner
                </span>
              </div>
            </div>
            <div className="relative">
              <div
                className={`w-full h-80 rounded-lg shadow-2xl flex items-center justify-center transition-all duration-300 ${darkMode
                  ? "bg-gray-900"
                  : "bg-white"
                  }`}
              >
                <img
                  src={aboutPhoto}
                  alt="Project Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
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
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-12 text-center transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Skills & Technologies
          </h2>

          {/* Frontend */}
          <h3
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Frontend
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills
              .filter((s) => s.type === "frontend")
              .map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-6 h-6 object-contain transition-all duration-300 ${darkMode ? "filter invert" : ""
                          }`}
                      />
                      <span
                        className={`font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 transition-colors duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                  >
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Divider */}
          <hr
            className={`border-t-2 my-8 transition-colors duration-300 ${darkMode ? "border-gray-600" : "border-gray-300"
              }`}
          />

          {/* Backend */}
          <h3
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Backend
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills
              .filter((s) => s.type === "backend")
              .map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-6 h-6 object-contain transition-all duration-300 ${darkMode ? "filter invert" : ""
                          }`}
                      />
                      <span
                        className={`font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 transition-colors duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                  >
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Divider */}
          <hr
            className={`border-t-2 my-8 transition-colors duration-300 ${darkMode ? "border-gray-600" : "border-gray-300"
              }`}
          />

          {/* Database */}
          <h3
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Database
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills
              .filter((s) => s.type === "database")
              .map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-6 h-6 object-contain transition-all duration-300 ${darkMode ? "filter invert" : ""
                          }`}
                      />
                      <span
                        className={`font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 transition-colors duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                  >
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
          {/* Divider */}
          <hr
            className={`border-t-2 my-8 transition-colors duration-300 ${darkMode ? "border-gray-600" : "border-gray-300"
              }`}
          />
          {/* DevOps & Tools */}
          <h3
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            DevOps & Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills
              .filter((s) => s.type === "DevOps_Tools")
              .map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-6 h-6 object-contain transition-all duration-300 ${darkMode ? "filter invert" : ""
                          }`}
                      />
                      <span
                        className={`font-medium transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 transition-colors duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                  >
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300 ${darkMode
                ? 'bg-gray-800/50 backdrop-blur-sm'
                : 'bg-white shadow-lg border border-gray-100'
                }`}>
                <div
                  className={`h-48 flex items-center justify-center transition-all duration-300 ${darkMode
                    ? "bg-gray-900"
                    : "bg-white"
                    }`}
                >
                  <img
                    src={myPhoto}
                    alt="Rocket"
                    className="w-full h-full object-contain rounded-lg transition-all duration-300 m-3"
                  />
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                  <p className={`mb-4 text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={`px-2 py-1 rounded text-xs transition-colors duration-300 ${darkMode
                        ? 'bg-blue-600/20 text-blue-300'
                        : 'bg-blue-100 text-blue-700'
                        }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className={`transition-colors duration-200 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}>
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className={`transition-colors duration-200 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
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
          <h2 className={`text-4xl font-bold mb-8 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>Get In Touch</h2>
          <p className={`text-xl mb-12 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            I'm always open to discussing new opportunities, interesting projects, and collaboration.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>Email</h3>
              <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>ramospauul@gmail.com</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Github className="text-white" size={24} />
              </div>
              <h3 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>GitHub</h3>
              <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>github.com/Paulski-damn</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className={`font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>LinkedIn</h3>
              <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>linkedin.com/in/paul-andrei-ramos-81045630b/</p>
            </div>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&to=ramospauul@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t transition-all duration-300 ${darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            © 2025 Paul Ramos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;