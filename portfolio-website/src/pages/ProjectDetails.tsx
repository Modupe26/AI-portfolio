import {useState} from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

const projects = {
  "amazon-reviews": {
    title: "Amazon Reviews Classification",
    category: "Machine Learning / NLP",
    description:
      "Built and compared machine learning models to classify Amazon product reviews using text preprocessing and feature extraction.",
    technologies: ["Python", "Scikit-learn", "Pandas", "TF-IDF", "NLP"],
    highlights: [
      "Multinomial Naive Bayes: 76.98% accuracy",
      "Logistic Regression: 78.78% accuracy",
      "Linear SVM: 78.45% accuracy",
    ],
    outcome:
      "Logistic Regression with TF-IDF achieved the highest accuracy.",
  },

  sensore: {
    title: "Sensore Healthcare Dashboard",
    category: "Software Development",
    description:
      "Contributed to a healthcare monitoring system by developing clinician-facing dashboard features.",
    technologies: ["C#", "ASP.NET Core", "MVC", "EF Core"],
    highlights: [
      "Clinician dashboard",
      "Patient alerts and vital signs",
      "Appointments, notes and reports",
    ],
    outcome:
      "Gained practical experience developing healthcare software features.",
  },

 
"computer-vision": {
  title: "AI-Powered Sudometrics Image Analysis",
  category: "Artificial Intelligence & Computer Vision",
  description:
    "I Developed an image processing and AI based workflow to analyse sudometrics images for assessing sudomotor dysfunction. The project involved detecting ArUco markers, correcting image perspective, extracting test pads, analysing colour changes and exploring neural network based segmentation.",
  technologies: ["Python", "OpenCV", "PyTorch", "NumPy", "CNN"],
  highlights: [
    "Processed sudometrics images using ArUco marker detection and perspective correction.",
    "Extracted and standardised test pad regions for image analysis.",
    "Analysed colour information using HSV and LAB colour spaces.",
    "Explored CNN-based segmentation to identify relevant image regions.",
    "Investigated image-based assessment of sudomotor dysfunction."
  ],
  outcome:
    "Built practical experience combining computer vision, image preprocessing and neural network techniques in a healthcare related AI project.",
github: "https://github.com/Modupe26/Sudometrics-AI-Image-processing",
},


  "fuzzy-logic": {
    title: "Fuzzy Logic Fuel Injection Controller",
    category: "Intelligent Systems",
    description:
      "Designed and evaluated a Mamdani fuzzy inference system for fuel injection control.",
    technologies: ["MATLAB", "Fuzzy Logic", "Mamdani FIS"],
    highlights: [
      "Designed membership functions",
      "Created fuzzy inference rules",
      "Evaluated controller outputs",
    ],
    outcome:
      "Applied fuzzy logic to a practical intelligent control problem.",
  },

  "animal-charity": {
    title: "Animal Charity Database",
    category: "Database Development",
    description:
      "Designed a relational database for managing animal records, donations, volunteers and adoption information.",
    technologies: ["SQL", "MySQL", "phpMyAdmin", "ERD"],
    highlights: [
      "Entity relationship modelling",
      "Database normalisation",
      "SQL queries and database implementation",
    ],
    outcome:
      "Developed experience designing and implementing relational databases.",
  },
};

function ProjectDetails() {
    const [currentImage, setCurrentImage] = useState(0);
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <main className="project-details">
        <h1>Project not found</h1>
        <Link to="/#projects">← Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <Link to="/#projects" className="back-link">
        ← Back to Projects
      </Link>

      <p className="section-label">{project.category}</p>

      <h1>{project.title}</h1>

      <p className="section-description">
        {project.description}
      </p>

      <h2>Technologies Used</h2>
      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <h2>Project Highlights</h2>
      <div className="results-list">
        {project.highlights.map((highlight) => (
          <p key={highlight}>{highlight}</p>
        ))}
      </div>

      {id === "sensore" && (
  <section>
    <h2>Project Screenshots</h2>
    <p>
      A preview of the clinician-facing interfaces
      I developed for the Sensore group project.
    </p>

   
   
<div className="project-gallery">
  {(() => {
    const images = [
        "clinician-dashboard1.png",
      "clinician-dashboard2.png",
      "patient-management.png",
      "alerts.png",
      "appointments.png",
      "patient-vitals.png",
      "notes.png",
      "reports.png",
    ];

    const image = images[currentImage];

    return (
      <>
        <img
          src={`https://raw.githubusercontent.com/Modupe26/Sensore-Healthcare-Dashboard/main/Sensore-My-Contribution/screenshot-evidence/${image}`}
          alt={image.replace(".png", "").replaceAll("-", " ")}
          className="slideshow-image"
        />

        <div className="slideshow-controls">
          <button
            onClick={() =>
              setCurrentImage((currentImage - 1 + images.length) % images.length)
            }
          >
            ← Previous
          </button>

          <span>{currentImage + 1} / {images.length}</span>

          <button
            onClick={() =>
              setCurrentImage((currentImage + 1) % images.length)
            }
          >
            Next →
          </button>
        </div>
      </>
    );
  })()}
</div>
  </section>
)}
      <h2>Outcome</h2>
      <p>{project.outcome}</p>

{ id === "amazon-reviews" && (
  <a
    href="https://github.com/Modupe26/amazon-reviews-classification"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn"
  >
    View Code on GitHub →
  </a>
)}
{id === "computer-vision" && (
  <a
    href="https://github.com/Modupe26/Sudometrics-AI-Image-processing"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn"
  >
    View Code on GitHub →
  </a>
)}
{id === "fuzzy-logic" && (
  <a
    href="https://github.com/Modupe26/Fuzzy-Logic-Fuel-Injection-Controller"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn"
  >
    View Code on GitHub →
  </a>
)}
{id === "animal-charity" && (
  <a
    href="https://github.com/Modupe26/Animal-Charity-Database"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn"
  >
    View Code on GitHub →
  </a>
)}
    </main>
  );
}

export default ProjectDetails;
