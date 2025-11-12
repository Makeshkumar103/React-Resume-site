import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaBars, FaTimes, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiVercel } from 'react-icons/si';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const skills = {
    webDevelopment: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> }
    ],
    tools: [
      { name: 'VS Code' },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Excel' }
    ],
    softSkills: [
      { name: 'Problem-Solving' },
      { name: 'Communication' },
      { name: 'Team Collaboration' }
    ]
  };

  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'IEDEO',
      period: 'Mar 2025 - Jun 2025',
      responsibilities: [
        'Developed and optimized responsive Web applications using React JS and Next JS, ensuring cross-browser compatibility and performance.',
        'Designed and implemented user-friendly interfaces with improved UI/UX for seamless customer engagement.',
        'Built and deployed a dynamic landing page using Next.js, Tailwind CSS, and Framer Motion, enhancing responsiveness and interactivity.',
        'Leveraged AI-powered tools (Bolt, Lovable and Cursor IDE) to streamline development workflows and integrate AI driven features into applications.'
      ]
    },
    {
      title: 'Data Entry Operator',
      company: 'SBL Knowledge Services Limited',
      period: 'Oct 2024 - Dec 2024',
      responsibilities: [
        'Entered and maintained large volumes of data with 100% accuracy using MS Excel and database tools.',
        'Performed data cleaning, verification, and updating to ensure consistency and reliability of information.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelors in Electronics and Communication Engineering',
      institution: 'Kamaraj College of Engineering and Technology',
      period: '2016-2020'
    },
    {
      degree: 'Higher Secondary',
      institution: 'ST Francis Matric Higher Secondary School',
      period: '2014-2016'
    }
  ];

  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A Portfolio using React JS involves building a dynamic and responsive website to showcase my skills and projects. React components are used to structure the content, such as an about section, skills, contact details. Leverage React router for navigation between different sections. State management for dynamic content, and conditional rendering for a personalized and engaging user experience. React-Bootstrap for styling and consider incorporating animations or transitions to enhance the visual appeal. I uploaded code in my Git hub and I deployed the site in Netlify.',
      technologies: ['React.js', 'React Router', 'Bootstrap', 'Netlify']
    },
    {
      title: 'Zomato Clone',
      description: 'A Zomato clone site using HTML and CSS would involve creating a web page with a similar layout and design to the original Zomato site. Used HTML for structuring the content, and CSS for styling elements like navigation bars, cards for restaurant information, and overall page layout. Media queries in CSS used for responsiveness for various devices.',
      technologies: ['HTML5', 'CSS3', 'Responsive Design']
    }
  ];

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="animated-background"></div>

      {/* Navbar */}
      <nav className="navbar-glass">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            <motion.div 
              className="navbar-brand"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-0 gradient-text">Makeshkumar M</h3>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="navbar-menu d-none d-lg-flex">
              {['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  className={`nav-link-btn ${activeSection === item ? 'active' : ''}`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle d-lg-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                className={`mobile-nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="hero-title mb-4">
                  Hi, I'm <span className="gradient-text">Makeshkumar M</span>
                </h1>
                <h2 className="hero-subtitle mb-4">Frontend Developer</h2>
                <p className="hero-description mb-5">
                  Crafting beautiful, responsive, and user-friendly web experiences
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <motion.a
                    href="#contact"
                    className="btn-glass-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    href="/Makeshkumar-Resume.pdf"
                    download
                    className="btn-glass-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="me-2" />
                    Download Resume
                  </motion.a>
                </div>
                <div className="social-links mt-5">
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="social-icon"
                  >
                    <FaLinkedin size={28} />
                  </motion.a>
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="social-icon"
                  >
                    <FaGithub size={28} />
                  </motion.a>
                  <motion.a 
                    href="mailto:makeshlg6@gmail.com"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="social-icon"
                  >
                    <FaEnvelope size={28} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title text-center mb-5">About Me</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <motion.div 
                  className="glass-card"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="lead text-center">
                    Aspiring frontend developer with a solid foundation in HTML5, CSS3, JavaScript and React JS. 
                    Eager to contribute creativity and technical skill to a dynamic development team. Adapt at translating 
                    design components into responsive and user-friendly interfaces. Seeking an entry level position to apply 
                    and enhance my frontend development expertise while continuously learning and growing in a collaborative 
                    and innovative environment.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title text-center mb-5">Skills</h2>
            
            <div className="row g-4 mb-4">
              <div className="col-lg-4 col-md-6">
                <motion.div 
                  className="glass-card h-100"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="mb-4 gradient-text">Web Development</h4>
                  <div className="skills-grid">
                    {skills.webDevelopment.map((skill, index) => (
                      <motion.div 
                        key={index}
                        className="skill-item"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="col-lg-4 col-md-6">
                <motion.div 
                  className="glass-card h-100"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="mb-4 gradient-text">Tools & Technologies</h4>
                  <div className="skills-grid">
                    {skills.tools.map((skill, index) => (
                      <motion.div 
                        key={index}
                        className="skill-item"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                        <span className="skill-name">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="col-lg-4 col-md-6">
                <motion.div 
                  className="glass-card h-100"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="mb-4 gradient-text">Soft Skills</h4>
                  <div className="skills-grid">
                    {skills.softSkills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        className="skill-item"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="skill-name">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title text-center mb-5">Experience</h2>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="glass-card mb-4"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                      <div>
                        <h4 className="gradient-text mb-2">{exp.title}</h4>
                        <h5 className="company-name">{exp.company}</h5>
                      </div>
                      <span className="period-badge">{exp.period}</span>
                    </div>
                    <ul className="responsibility-list">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title text-center mb-5">Education</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="glass-card mb-4"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                      <div>
                        <h4 className="gradient-text mb-2">{edu.degree}</h4>
                        <h5 className="company-name">{edu.institution}</h5>
                      </div>
                      <span className="period-badge">{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title text-center mb-5">Projects</h2>
            <div className="row g-4">
              {projects.map((project, index) => (
                <div key={index} className="col-lg-6">
                  <motion.div
                    className="glass-card h-100"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="gradient-text mb-3">{project.title}</h4>
                    <p className="mb-4">{project.description}</p>
                    <div className="tech-tags">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title text-center mb-5">Get In Touch</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <motion.div 
                  className="glass-card"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <p className="lead mb-4">
                      I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                      I'll try my best to get back to you!
                    </p>
                    <div className="contact-info">
                      <motion.a 
                        href="mailto:makeshlg6@gmail.com" 
                        className="contact-link"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaEnvelope size={24} />
                        <span>makeshlg6@gmail.com</span>
                      </motion.a>
                      <motion.a 
                        href="tel:+919629976511" 
                        className="contact-link"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaPhone size={24} />
                        <span>+91 9629976511</span>
                      </motion.a>
                    </div>
                    <div className="social-links mt-4">
                      <motion.a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="social-icon"
                      >
                        <FaLinkedin size={28} />
                      </motion.a>
                      <motion.a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        className="social-icon"
                      >
                        <FaGithub size={28} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="text-center py-4">
            <p className="mb-0">© 2025 Makeshkumar M. Built with React.js, Bootstrap & Framer Motion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;