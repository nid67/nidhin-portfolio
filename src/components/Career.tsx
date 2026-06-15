import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Mantri (Campus Ambassador)</h4>
                <h5>GeeksforGeeks</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Representing GeeksforGeeks as the official campus ambassador, promoting coding and computer science
              learning through events, technical outreach, and peer-driven initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>Codsoft</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed and deployed machine learning models for spam detection, fraud detection, and movie classification using Logistic Regression, Random Forest achieving up to 95% accuracy.
              Performed full-cycle data preprocessing and feature engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in CSE (AI & ML)</h4>
                <h5>Rajalakshmi Institute of Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Engineering with a focus on Artificial Intelligence and Machine Learning.
              Maintaining a strong academic record with a CGPA of 8.33/10.0.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
