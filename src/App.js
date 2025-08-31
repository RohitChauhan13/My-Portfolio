import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare,
  FaDatabase,
  FaMobile,
  FaServer,
  FaCode,
  FaGitAlt,
  FaMoneyBillWave,
  FaGraduationCap,
  FaHeartbeat,
  FaGlobe,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiSqlite } from 'react-icons/si';

import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success'); // 'success' or 'error'

  // Scroll effect for navbar and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Test server connection on component mount
    testConnection();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    // Test server connection
  const testConnection = async () => {
    try {
      const response = await fetch('https://my-portfolio-server-lupl.onrender.com/api/test');
      const data = await response.json();
      console.log('Server connection:', data);
    } catch (error) {
      console.error('Server connection failed:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://my-portfolio-server-lupl.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setModalType('success');
        setModalMessage('Message sent successfully! I will get back to you soon.');
        setShowModal(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setModalType('error');
      setModalMessage('Failed to send message. Please try again or contact me directly.');
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>RC</span>
          </motion.div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Rohit Kamlesh Chauhan
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developer (MERN)💻
            </h2>
            <p className="hero-description">
              Passionate about building scalable web applications and mobile solutions. 
              Specialized in React Native, Java, Python, and backend development.
            </p>
            <div className="hero-buttons">
              <Link to="projects" smooth={true} duration={500}>
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <motion.button 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-card">
              <div className="profile-avatar">
                <FaReact size={60} />
              </div>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">React Native</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Graphics */}
        <div className="hero-graphics">
          <motion.div 
            className="floating-shape shape-1"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="floating-shape shape-2"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -360]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="floating-shape shape-3"
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 180]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                I am a passionate MERN Stack Developer with expertise in building modern web applications 
                and mobile solutions. With a strong foundation in both frontend and backend technologies, 
                I specialize in creating robust, scalable applications that solve real-world problems.
              </p>
              <p>
                My journey in software development has led me to work on diverse projects ranging from 
                enterprise-level management systems to innovative mobile applications. I believe in 
                writing clean, maintainable code and staying updated with the latest technologies.
              </p>
            </motion.div>
            <motion.div 
              className="about-stats"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3>5+</h3>
                <p>Projects Completed</p>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3>3+</h3>
                <p>Technologies Mastered</p>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <div className="skills-grid">
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3>Frontend Development</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <FaReact />
                  <span>React.js</span>
                </div>
                <div className="skill-item">
                  <FaReact />
                  <span>React Native</span>
                </div>
                <div className="skill-item">
                  <FaHtml5 />
                  <span>HTML5</span>
                </div>
                <div className="skill-item">
                  <FaCss3Alt />
                  <span>CSS3</span>
                </div>
                <div className="skill-item">
                  <FaJsSquare />
                  <span>JavaScript</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3>Backend Development</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <FaNodeJs />
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <FaJava />
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <FaPython />
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <SiMongodb />
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <SiMysql />
                  <span>MySQL</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3>Other Technologies</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <FaMobile />
                  <span>Mobile Development</span>
                </div>
                <div className="skill-item">
                  <FaServer />
                  <span>Server Management</span>
                </div>
                <div className="skill-item">
                  <FaCode />
                  <span>C#</span>
                </div>
                <div className="skill-item">
                  <FaGitAlt />
                  <span>Git</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <div className="projects-grid">
            <motion.div 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <FaMoneyBillWave size={60} />
              </div>
              <div className="project-content">
                <h3>Payroll Management System</h3>
                <p>A comprehensive payroll management solution built with Java and MySQL, featuring employee management, salary calculations, and reporting.</p>
                <div className="project-tech">
                  <span className="tech-badge">Java</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">Swing UI</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">Source Code</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <FaGraduationCap size={60} />
              </div>
              <div className="project-content">
                <h3>Student Management System</h3>
                <p>Advanced student data management system with registration, grade tracking, and administrative features.</p>
                <div className="project-tech">
                  <span className="tech-badge">Java</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">JSP</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">Source Code</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <FaHeartbeat size={60} />
              </div>
              <div className="project-content">
                <h3>Medicoo - Medical App</h3>
                <p>React Native mobile application for medical data management with CRUD operations and SQLite database.</p>
                <div className="project-tech">
                  <span className="tech-badge">React Native</span>
                  <span className="tech-badge">SQLite</span>
                  <span className="tech-badge">JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">Source Code</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <FaGlobe size={60} />
              </div>
              <div className="project-content">
                <h3>Modern Web Applications</h3>
                <p>Collection of responsive web applications built with HTML, CSS, and JavaScript showcasing modern UI/UX design.</p>
                <div className="project-tech">
                  <span className="tech-badge">HTML5</span>
                  <span className="tech-badge">CSS3</span>
                  <span className="tech-badge">JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">Source Code</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaMapMarkerAlt />
                <div>
                  <h3>Location</h3>
                  <p>India</p>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope />
                <div>
                  <h3>Email</h3>
                  <p>rohitchauhan6232@gmail.com</p>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhone />
                <div>
                  <h3>Phone</h3>
                  <p>+91 7024756186</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.form 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Rohit Kamlesh Chauhan. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* Success/Error Modal */}
      {showModal && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className={`modal ${modalType}`}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-icon">
              {modalType === 'success' ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaCheckCircle />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaExclamationCircle />
                </motion.div>
              )}
            </div>
            <h3>{modalType === 'success' ? 'Success!' : 'Error!'}</h3>
            <p>{modalMessage}</p>
            <motion.button
              className="modal-btn"
              onClick={() => setShowModal(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {modalType === 'success' ? 'Great!' : 'Try Again'}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
