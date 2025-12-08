import React, { useState, useEffect } from 'react';
import { MapPin, Mail, ExternalLink, ChevronRight, BadgeCheck, Code2, Quote, ArrowUp, Layers, Coffee, FolderKanban, Circle, Award, Github, Linkedin, Send, Moon, Sun, Instagram, Download } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Typing effect for role
  const roles = ["Junior Full-Stack Developer", "Computer Science Graduate"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, currentRoleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const experiences = [
    { title: "Junior Full-Stack Developer", company: "QX Information Technology Corp.", year: "2025", current: true },
    { title: "IT Intern", company: "Cavite Community Academy Inc.", year: "2024" }
  ];

  const techStack = {
    Frontend: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    Backend: ["PHP", "Laravel", "MySQL"],
    "DevOps & Tools": ["Git", "GitHub", "Vercel", "XAMPP"],
  };

  const projects = [
    {
      title: "VaxiBloom",
      description: "Infant immunization system with scheduling",
      link: "https://github.com/Paulski-damn/Vaxibloom-php-app",
      linkText: "github.com/Paulski-damn",
    },
    {
      title: "Upcoming Project",
      description: "New project in development",
      link: "#",
      linkText: "Coming Soon",
    },
  ];

  const certifications = [
    { title: "To Follow", issuer: "To Follow" },
  ];

  return (
    <div className={`min-h-screen flex flex-col relative transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'
      }`}>
      {/* Subtle dot pattern background */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: darkMode
            ? 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)'
            : 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <main className="flex-1 max-w-4xl mx-auto w-full py-8 px-4 sm:px-6 relative z-10">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Profile Photo with glow effect */}
            <div className="flex-shrink-0 relative group">
              <div className={`absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode ? 'bg-gradient-to-br from-white/10 via-transparent to-white/10' : 'bg-gradient-to-br from-gray-400/20 via-transparent to-gray-400/20'
                }`} />
              <div className={`relative w-40 h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden ring-2 ${darkMode ? 'ring-white/10' : 'ring-gray-300'
                }`}>
                <img
                  src="/formalpic.jpg"
                  alt="Paul Andrei Ramos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              {/* Name row with theme toggle */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl md:text-4xl font-bold">Paul Ramos</h1>
                  <BadgeCheck className="h-6 w-6 fill-blue-500 text-white" />
                </div>

                {/* Theme Toggle Switch */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${darkMode ? 'bg-white/20' : 'bg-gray-300'
                    }`}
                >
                  <div className={`absolute top-1 left-1 w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center ${darkMode ? 'translate-x-7 bg-white' : 'translate-x-0 bg-gray-900'
                    }`}>
                    {darkMode ? <Moon className="h-3 w-3 text-gray-900" /> : <Sun className="h-3 w-3 text-white" />}
                  </div>
                </button>
              </div>

              <div className={`flex items-center gap-2 text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin className="h-4 w-4" />
                <span>Cavite, Philippines</span>
              </div>

              {/* Typing effect for role */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Web Developer</span>
                  <span className="mx-2">\</span>
                  <span className={darkMode ? 'text-white/70' : 'text-gray-700'}>
                    {displayedRole}
                    <span className="animate-pulse">|</span>
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:ramospauul@gmail.com"
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${darkMode
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                >
                  <Mail className="h-4 w-4" />
                  Send an Email
                  <ChevronRight className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com/in/paul-andrei-ramos-81045630b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all flex items-center gap-2 ${darkMode
                    ? 'border-white/10 hover:border-white/30 hover:bg-white/5'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-100'
                    }`}
                >
                  <Linkedin className="h-4 w-4" />
                  Connect
                </a>

                <a
                  href="/RESUME_RAMOS.pdf"
                  download
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all flex items-center gap-2 ${darkMode
                    ? 'border-white/10 hover:border-white/30 hover:bg-white/5'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-100'
                    }`}
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>



        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Left Column - 3/5 */}
          <div className="lg:col-span-3 space-y-4">
            {/* About Card */}
            <div className={`p-6 rounded-2xl border transition-colors ${darkMode
              ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
              : 'bg-white border-gray-200 hover:border-gray-300'
              }`}>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                About
              </h2>
              <div className={`space-y-3 text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>
                  I'm a Junior Full-Stack Developer passionate about building modern web applications. My journey in technology is driven by a commitment to solving real-world problems through clean, efficient code and user-centered design, specializing in{" "}
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>JavaScript</span>,{" "}
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Laravel</span>, and{" "}
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>MySQL</span>{" "}
                  database technologies.
                </p>
                <p>
                  My experience includes developing full-stack applications like VaxiBloom, an infant immunization system that demonstrates my ability to handle complex data management, user authentication, and responsive interface design using modern technologies.
                </p>
                <p>
                  I believe in continuous learning and staying updated with industry trends. When I’m not coding, I explore new technologies, contribute to open-source projects, and refine my skills to deliver exceptional digital solutions.
                </p>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className={`p-6 rounded-2xl border transition-colors ${darkMode
              ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
              : 'bg-white border-gray-200 hover:border-gray-300'
              }`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  Tech Stack
                </h2>
              </div>
              <div className="space-y-4">
                {Object.entries(techStack).map(([category, skills]) => (
                  <div key={category}>
                    <p className={`text-xs font-medium mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-0.5 text-xs rounded-md ${darkMode
                            ? 'bg-white/5 border border-white/10'
                            : 'bg-gray-900/5 border border-gray-900/10'
                            }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond Coding Card */}
            <div className={`p-6 rounded-2xl border transition-colors ${darkMode
              ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
              : 'bg-white border-gray-200 hover:border-gray-300'
              }`}>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                Beyond Coding
              </h2>
              <div className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>
                  When not writing code, I focus on learning about emerging technologies,
                  exploring new frameworks, and staying updated with industry trends.
                </p>
                <p>
                  I share my knowledge through building projects and continuous self-improvement.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 2/5 */}
          <div className="lg:col-span-2 space-y-4">
            {/* Achievement Banner */}
            <div className="rounded-xl overflow-hidden">
              <div className={`relative p-5 overflow-hidden ${darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
                }`}>
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 ${darkMode ? 'bg-black/5' : 'bg-white/5'
                  }`} />
                <div className={`absolute bottom-0 left-0 w-20 h-20 rounded-full translate-y-1/2 -translate-x-1/2 ${darkMode ? 'bg-black/5' : 'bg-white/5'
                  }`} />

                <p className="text-xs font-medium opacity-90 relative z-10">🎓 GRADUATE</p>
                <p className="text-2xl font-bold relative z-10">CLASS OF 2025</p>
                <p className="text-xs opacity-80 relative z-10 mt-1">Cavite State University - Naic</p>
                <p className="text-xs opacity-60 relative z-10">Bachelor of Science in Computer Science</p>
              </div>
            </div>

            {/* Experience Card */}
            <div className={`p-6 rounded-2xl border transition-colors ${darkMode
              ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
              : 'bg-white border-gray-200 hover:border-gray-300'
              }`}>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <svg className="w-4 h-4 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Experience
              </h2>
              <div className="space-y-0">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-start gap-3 group relative">
                    {/* Connecting line */}
                    {index !== experiences.length - 1 && (
                      <div className={`absolute left-[3px] top-6 w-[2px] h-full ${darkMode ? 'bg-white/10' : 'bg-gray-200'
                        }`} />
                    )}

                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 transition-colors relative z-10 ${exp.current
                      ? darkMode
                        ? 'bg-white ring-4 ring-white/10'
                        : 'bg-gray-900 ring-4 ring-gray-900/10'
                      : darkMode
                        ? 'bg-gray-700 group-hover:bg-white/50'
                        : 'bg-gray-300 group-hover:bg-gray-500'
                      }`} />
                    <div className="flex-1 min-w-0 pb-4">
                      <p className="text-sm font-medium leading-tight">{exp.title}</p>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.company}</p>
                    </div>
                    <span className={`text-xs flex-shrink-0 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{exp.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Certifications Card */}
            <div className={`p-6 rounded-2xl border transition-colors ${darkMode
              ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
              : 'bg-white border-gray-200 hover:border-gray-300'
              }`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <Award className="h-4 w-4 -ml-1" /> Certifications
                </h2>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className={`py-2 border-b last:border-0 ${darkMode ? 'border-white/10' : 'border-gray-200'
                    }`}>
                    <p className="text-sm font-medium">{cert.title}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Projects Card */}
            <div className={`p-6 rounded-2xl border transition-colors ${darkMode
              ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
              : 'bg-white border-gray-200 hover:border-gray-300'
              }`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <FolderKanban className="h-4 w-4" /> Recent Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((project) => (
                  <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-3 rounded-lg border transition-all group ${darkMode
                      ? 'border-white/10 hover:border-white/30 hover:bg-white/5'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm font-semibold group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </span>
                      <ExternalLink className={`h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                    </div>
                    <p className={`text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                    <span className={`text-xs group-hover:text-purple-400 transition-colors ${darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>{project.linkText}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="mt-4">
          <div className={`p-6 rounded-2xl border transition-colors ${darkMode
            ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
            : 'bg-white border-gray-200 hover:border-gray-300'
            }`}>
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Send className="h-4 w-4" /> Get in Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contact Info */}
              <div className="space-y-3">
                <div className={`p-4 rounded-lg border ${darkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-gray-50 border-gray-200'
                  }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Email
                    </p>
                  </div>
                  <a
                    href="mailto:ramospauul@gmail.com"
                    className={`text-sm font-medium transition-colors ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}`}
                  >
                    ramospauul@gmail.com
                  </a>
                </div>

                <div className={`p-4 rounded-lg border ${darkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-gray-50 border-gray-200'
                  }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <ExternalLink className="w-4 h-4" />
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Social Links
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://linkedin.com/in/paul-andrei-ramos-81045630b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all hover:-translate-y-0.5 ${darkMode
                        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        }`}
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-xs font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Paulski-damn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all hover:-translate-y-0.5 ${darkMode
                        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        }`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-xs font-medium">GitHub</span>
                    </a>
                    <a
                      href="https://www.instagram.com/paaul_ramoss/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all hover:-translate-y-0.5 ${darkMode
                        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        }`}
                    >
                      <Instagram className="w-4 h-4" />
                      <span className="text-xs font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className={`p-4 rounded-lg border flex flex-col ${darkMode
                ? 'bg-white/5 border-white/10'
                : 'bg-gray-50 border-gray-200'
                }`}>
                <div className="flex items-center gap-2 mb-3">
                  <Circle className="w-4 h-4" />
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Availability
                  </p>
                </div>
                <div className={`flex-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p>
                    I'm currently available for collaborations, freelance projects, and full-time opportunities.
                    Let's build something amazing together!
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="mailto:ramospauul@gmail.com"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${darkMode
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                  >
                    <Mail className="h-4 w-4" />
                    Send me a message
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-700'}`}>
            © {new Date().getFullYear()} Paul Ramos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;