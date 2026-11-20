import PortfolioAssistant from "./portfolioAssistant";
import { Link } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          MF<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HOMEPAGE */}
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Exploring Opportunities in Technology
            </div>

            <p className="eyebrow">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              Hi, I'm <span>Modupe Faith.</span>
            </h1>

            <h2>
              Artificial Intelligence Student
              <br />
              & Aspiring Technology Professional
            </h2>

            <p className="hero-description">
              I'm an Artificial Intelligence student with a
              growing interest in different areas of technology.
              Through my projects, I've gained practical
              experience in machine learning, data analysis,
              software development, databases, and image
              processing.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Projects →
              </a>

              <a href="#about" className="secondary-btn">
                More About Me
              </a>
            </div>
          </div>

         <div className="hero-visual">
  <img
    src="/female-ai-robot.PNG"
    alt="Futuristic female AI robot"
    className="hero-robot"
  />
</div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="section">
          <p className="section-label">01 / ABOUT</p>

          <h2>About Me</h2>

         
<div className="glass-card">
  <p>
    I'm interested in building a career that allows me
    to explore the many possibilities within technology.
    My experience with different technical projects has
    helped me develop a strong interest in problem solving,
    working with data, building software, and understanding
    how technology can be used in different industries.
  </p>

  <p>
    I enjoy taking on challenges that encourage me to
    think critically, develop new skills, and improve
    the way I approach problems. I'm particularly
    interested in opportunities where I can apply my
    knowledge, gain experiences, and work
    alongside people with different skills and
    perspectives. My goal is to keep learning, expand
    my capabilities, and build a career where I can
        contribute to meaningful work.
        </p>
        </div>
        </section>

        
{/* TECHNICAL SKILLS */}
<section id="skills" className="section">
  <p className="section-label">
    02 / TECHNICAL EXPERTISE
  </p>

  <h2>Skills & Technologies</h2>

  <p className="section-description">
    A collection of the technologies, tools, and
    technical skills I've worked with through
    my projects and studies.
  </p>

  <div className="skills-grid">
    {[
      {
        icon: "🧠",
        title: "AI & Machine Learning",
        skills: [
          "Python", "Scikit-learn", "PyTorch",
          "Neural Networks", "Classification",
          "Fuzzy Logic"
        ]
      },
      {
        icon: "📊",
        title: "Data Science & Analytics",
        skills: [
          "Pandas", "NumPy", "Matplotlib",
          "Data Cleaning", "Data Visualisation",
          "Statistical Analysis"
        ]
      },
      {
        icon: "💻",
        title: "Software & Web Development",
        skills: [
          "Python", "C#", "ASP.NET Core",
          "React", "TypeScript", "HTML & CSS"
        ]
      },
      {
        icon: "🖼️",
        title: "Computer Vision & Image Processing",
        skills: [
          "OpenCV", "MATLAB", "Image Processing",
          "Image Segmentation", "Computer Vision",
          "Feature Extraction"
        ]
      },
      {
        icon: "🗄️",
        title: "Databases & Data Management",
        skills: [
          "SQL", "MySQL", "Database Design",
          "ER Diagrams", "Data Modelling",
          "phpMyAdmin"
        ]
      },
      {
        icon: "⚙️",
        title: "Development Tools",
        skills: [
          "GitHub", "VS Code", "Jupyter Notebook",
          "JetBrains Rider", "MATLAB",
          "Git"
        ]
      }
    ].map((category) => (
      <div className="skill-card" key={category.title}>
        <div className="skill-icon">
          {category.icon}
        </div>

        <h3>{category.title}</h3>

        <div className="skill-tags">
          {category.skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
 
{/* PROJECTS */}
<section id="projects" className="section">
  <p className="section-label">03 / PROJECTS</p>
  <h2>My Projects</h2>

  <p className="section-description">
    A selection of projects I've worked on, from machine
    learning and data analysis to software development,
    computer vision, and intelligent systems.
  </p>

  <div className="projects-grid">
    {[
      {
        id: "amazon-reviews",
        title: "Amazon Reviews Classification",
        category: "Machine Learning & NLP",
        description:
          "Built and compared machine learning models to classify Amazon product reviews, using text preprocessing, feature extraction, and model evaluation.",
        technologies: [
          "Python", "Scikit-learn", "TF-IDF",
          "Logistic Regression", "NLP"
        ],
        status: "Completed"
      },
      {
        id: "sensore",
        title: "Sensore — Healthcare Dashboard",
        category: "Software Development",
        description:
          "Contributed to a healthcare monitoring system by developing clinician-facing dashboard features for patient information, alerts, appointments, and reports.",
        technologies: [
          "C#", "ASP.NET Core", "MVC", "EF Core"
        ],
        status: "Completed",
        github: "https://github.com/Modupe26/Sensore-Healthcare-Dashboard",
      },
      {
        id: "computer-vision",
        title: "Computer Vision & Image Processing",
        category: "Computer Vision",
        description:
          "Explored image preprocessing, feature extraction, colour analysis, and segmentation using computer vision techniques.",
        technologies: [
          "Python", "OpenCV", "MATLAB", "PyTorch"
        ],
        status: "Completed"
      },
      {
        id: "fuzzy-logic",
        title: "Fuzzy Logic Fuel Injection Controller",
        category: "Intelligent Systems",
        description:
          "Designed and evaluated a fuzzy logic controller using membership functions and rules to estimate fuel flow under different operating conditions.",
        technologies: [
          "MATLAB", "Fuzzy Logic", "Mamdani FIS"
        ],
        status: "Completed"
      },
      {
        id: "animal-charity",
        title: "Animal Charity Database",
        category: "Database Development",
        description:
          "Designed a relational database for managing animal records, donations, volunteers, campaigns, and adoptions.",
        technologies: [
          "SQL", "MySQL", "phpMyAdmin", "ERD"
        ],
        status: "Completed"
      },
      {
        title: "AI-Powered Study Planner",
        category: "AI & Mobile Development",
        description:
          "A planned cross-platform mobile application for organising study schedules, tracking assessments, and exploring AI-assisted study planning.",
        technologies: [
          "AI", "Mobile Development", "Planning"
        ],
        status: "Planned"
      }
    ].map((project) => (
      <article className="project-card" key={project.title}>
        <div className="project-card-top">
          <span className="project-category">
            {project.category}
          </span>
          <span className="project-status">
            {project.status}
          </span>
        </div>
        

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>


{project.status === "Completed" && (
  <Link
    to={`/projects/${project.id}`}
    className="secondary-btn"
  >
    View Project →
  </Link>
)}
{project.id === "sensore" && (
  <a
    href="https://github.com/Modupe26/Sensore-Healthcare-Dashboard"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn"
  >
    View on GitHub ↗
  </a>
)}
      </article>
    ))}
  </div>
</section>


        {/* CONTACT */}
        <section
          id="contact"
          className="section contact"
        >
          <p className="section-label">
            04 / CONTACT
          </p>

          <h2>Let's Connect</h2>

          <p className="section-description">
            I'm interested in learning, collaborating,
            and exploring opportunities in technology.
          </p>

          
<div className="contact-links">
  <a
    href="mailto:Modupeolaifayanmodi@gmail.com"
    className="secondary-btn contact-btn"
  >
    ✉ Email Me
  </a>

  <a
    href="https://github.com/Modupe26"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn contact-btn"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/modupe-ifayanmodi-8ab2a7307/"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn contact-btn"
  >
    LinkedIn ↗
  </a>
</div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Modupe Faith.
        Built with React & TypeScript.
      </footer>
      <PortfolioAssistant />
    </div>
  )
}

export default App
