import React, { useState, useEffect } from "react";
import "./App.css";
import developerImg from "./assets/developer-illustration.jpg";
import projectImage1 from "./assets/gofood.jpeg";
import projectImage2 from "./assets/weather.png";
import projectImage3 from "./assets/project-illustration.png";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaPython, FaReact, FaNodeJs, FaAws } from "react-icons/fa";

// import { SiGooglecloud } from 'react-icons/si';

import { SiCplusplus, SiMongodb, SiExpress, SiMysql } from "react-icons/si";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("about");

  // Scroll handler to update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = NAV_ITEMS.map((item) => item.id);
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) {
            setActiveSection(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("about");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll on navbar click
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <div className="main-container">
      {/* Header */}
      <header className="header">
        <h1>Awal Manga</h1>
        <nav className="navbar">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="about" className="intro-section">
        <div className="intro-content">
          <div className="intro-text">
            <h2>Hi, I'm</h2>
            <h1>Awal Manga</h1>
            <h3 className="highlight">C++ developer</h3>

            <p>
              I specialize in building efficient, scalable, and high-performance
              applications using modern C++, with a strong grasp of
              object-oriented programming, STL, memory management, and
              system-level development.
              <br />
              With a solid foundation in Python, and SQL, and hands-on
              experience with cloud platforms like AWS, Azure, and Google Cloud,
              I bring a well-rounded understanding of software engineering to
              every project.
              <br />
              <br />
              <span className="personal-highlight">
                I'm driven by a deep passion for problem-solving, clean code,
                and continuous learning. I’m always eager to take on new
                challenges, collaborate with like-minded professionals, and stay
                at the forefront of technology through impactful projects and
                innovation.
              </span>
            </p>
          </div>
          <div className="intro-image-highlight">
            <img src={developerImg} alt="Awal Manga illustration" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project-card">
            <img src={projectImage1} alt="GoFood" />
            <h3>GoFood</h3>
            <p>
              A full-stack food ordering website with user login, menu browsing,
              and admin controls using MongoDB, Express, React, and Node.js.
              <br />
              <a
                href="https://github.com/awall5/Gofood-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </p>
          </div>
          <div className="project-card">
            <img src={projectImage2} alt="Weather App" />
            <h3>Weather App</h3>
            <p>
              Get real-time weather information by city with dynamic UI, built
              using React.
              <br />
              <a
                href="https://weather-app-by-awal.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Project
              </a>
            </p>
          </div>
          <div className="project-card">
            <img src={projectImage3} alt="Restaurant Website" />
            <h3>Restaurant Website</h3>
            <p>
              A visually appealing static restaurant website with responsive
              design, built purely using HTML5 and CSS3.
              <br />
              <a
                href="https://github.com/awall5/Lovely-Restaurant-"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FaPython size={48} color="#306998" />
            <p>Python</p>
          </div>
          {/* <div className="skill-item"><FaJava size={48} color="#ea2d2e" /><p>Java</p></div> */}
          <div className="skill-item">
            <SiCplusplus size={48} color="#00599C" />
            <p>C++</p>
          </div>
          <div className="skill-item">
            <SiMysql size={48} color="#00758F" />
            <p>SQL</p>
          </div>
          <div className="skill-item">
            <FaReact size={48} color="#61dafb" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <FaNodeJs size={48} color="#3C873A" />
            <p>Node.js</p>
          </div>
          <div className="skill-item">
            <SiExpress size={48} color="#000000" />
            <p>Express</p>
          </div>
          <div className="skill-item">
            <SiMongodb size={48} color="#47A248" />
            <p>MongoDB</p>
          </div>
          <div className="skill-item">
            <FaAws size={48} color="#FF9900" />
            <p>AWS</p>
          </div>
          {/* <div className="skill-item"><SiGooglecloud size={48} color="#4285F4" /><p>Google Cloud</p></div> */}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="cv-section">
        <div className="cv-card">
          <h2>Resume</h2>
          <p>
            Download or view my resume to know more about my skills, experience,
            and education.
          </p>
          <a
            className="cv-btn"
            href="https://docs.google.com/document/d/1zQiwCKTNI6BSvZakotCuK4okZZpiluhb/edit?usp=drive_link&ouid=109449550388869902757&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View/Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>
          <strong>Let's connect to build the next big thing together.</strong>
        </h2>
        <div className="contact-cards">
          <div className="contact-card">
            <MdEmail size={28} />
            <h4>Email</h4>
            <a href="mailto:awal@example.com">awalmanga25@gmail.com</a>
          </div>
          <div className="contact-card">
            <MdPhone size={28} />
            <h4>Phone</h4>
            <a href="tel:+919876543210">+91 9634683326</a>
          </div>
          <div className="contact-card">
            <FaLinkedin size={28} />
            <h4>LinkedIn</h4>
            <a
              href="https://linkedin.com/in/awalmanga"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/awalmanga
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-container">
          <form
            action="https://formspree.io/f/mgvykqwo"
            method="POST"
            className="contact-form"
          >
            <h2>Send a Message</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />

            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        &copy; {new Date().getFullYear()} Awal Manga. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
