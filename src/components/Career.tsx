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
                <h4>Software Engineer</h4>
                <h5>Sopra Steria</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            At Sopra Steria India Ltd., I modernized UI and workflows for NHS UK, boosting process efficiency by 30%. I developed 10+ custom portals and dashboards, increasing user traffic by 40%, and enhanced data capture efficiency by 43% using Azure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Prakash Software Solutions</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            At Prakash Software Solutions, I achieved 95% client satisfaction by delivering user-focused solutions using Power Platform tools. I increased user engagement by 20% with Power BI dashboards and improved operational efficiency by 45% through process optimization and scalable applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Trigger Analysis Capstone- Analyst</h4>
                <h5>Oracle</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            At Oracle, I analyzed customer behavior and identified key triggers in the B2B software sales journey. I optimized touchpoints and engagement strategies using data analytics and delivered actionable insights to enhance pre-sales effectiveness, driving improved sales outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
