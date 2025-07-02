"use client";
import "@/style/credentials.css";
import Image from "next/image";

const credentials = [
  {
    id: 1,
    title: "Top Rated Plus on Upwork",
    organization: "Upwork",
    description: "Achieved Top Rated Plus status with 100% job success score and excellent client feedback",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300",
    link: "https://www.upwork.com/freelancers/~01446faab084f247d5?viewMode=1",
    stats: {
      rating: "5.0",
      jobs: "50+",
      earnings: "$100K+"
    }
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    description: "Certified in designing and deploying scalable cloud solutions on AWS platform",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300",
    link: "#",
    stats: {
      level: "Associate",
      year: "2024",
      validity: "3 years"
    }
  },
  {
    id: 3,
    title: "MongoDB Certified Developer",
    organization: "MongoDB University",
    description: "Expert certification in MongoDB database design, development, and optimization",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300",
    link: "#",
    stats: {
      level: "Professional",
      year: "2024",
      validity: "2 years"
    }
  },
  {
    id: 4,
    title: "React Advanced Certification",
    organization: "Meta (Facebook)",
    description: "Advanced React development certification covering hooks, context, and performance optimization",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300",
    link: "#",
    stats: {
      level: "Advanced",
      year: "2023",
      validity: "Lifetime"
    }
  }
];

const achievements = [
  {
    id: 1,
    title: "Best E-commerce Solution 2024",
    organization: "TechInnovate Awards",
    description: "MyStoreSphere won the best e-commerce platform award for innovation and user experience"
  },
  {
    id: 2,
    title: "Top 1% Developer",
    organization: "GitHub",
    description: "Ranked in top 1% of developers globally based on contributions and code quality"
  },
  {
    id: 3,
    title: "Client Choice Award",
    organization: "Upwork",
    description: "Received multiple Client Choice Awards for exceptional project delivery and communication"
  },
  {
    id: 4,
    title: "Innovation in AI Integration",
    organization: "AI Development Summit",
    description: "Recognized for innovative AI integration in business applications"
  }
];

const clientLogos = [
  {
    name: "TechStart Inc.",
    logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=150&h=80"
  },
  {
    name: "DataFlow Solutions",
    logo: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=150&h=80"
  },
  {
    name: "CloudTech Enterprises",
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=150&h=80"
  },
  {
    name: "MobileFirst Corp",
    logo: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=150&h=80"
  },
  {
    name: "FinanceFlow",
    logo: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=150&h=80"
  },
  {
    name: "AutomateNow",
    logo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=80"
  }
];

export default function ProfessionalCredentials() {
  return (
    <div className="credentials-main">
      <div className="credentials-inner">
        <div className="credentials-header">
          <h1>Professional Credentials</h1>
          <p>Certified expertise backed by proven results and industry recognition</p>
        </div>

        <div className="credentials-section">
          <h2>Certifications & Qualifications</h2>
          <div className="credentials-grid">
            {credentials.map((credential) => (
              <div key={credential.id} className="credential-card">
                <div className="credential-image">
                  <Image
                    src={credential.image}
                    alt={credential.title}
                    width={300}
                    height={200}
                    className="credential-img"
                  />
                  <div className="credential-overlay">
                    <span className="credential-org">{credential.organization}</span>
                  </div>
                </div>

                <div className="credential-content">
                  <h3 className="credential-title">{credential.title}</h3>
                  <p className="credential-description">{credential.description}</p>

                  <div className="credential-stats">
                    {Object.entries(credential.stats).map(([key, value]) => (
                      <div key={key} className="stat-item">
                        <span className="stat-label">{key}:</span>
                        <span className="stat-value">{value}</span>
                      </div>
                    ))}
                  </div>

                  {credential.link !== "#" && (
                    <a
                      href={credential.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="credential-link"
                    >
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h2>Awards & Recognition</h2>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-org">{achievement.organization}</span>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="linkedin-integration">
          <div className="linkedin-card">
            <div className="linkedin-header">
              <div className="linkedin-logo">💼</div>
              <div className="linkedin-info">
                <h3>Connect on LinkedIn</h3>
                <p>Professional network and industry insights</p>
              </div>
            </div>
            <div className="linkedin-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Connections</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Recommendations</span>
              </div>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Profile Views</span>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/aubair-akif-7291052b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-btn"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="clients-section">
          <h2>Trusted by Leading Companies</h2>
          <div className="clients-logos">
            {clientLogos.map((client, index) => (
              <div key={index} className="client-logo">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="logo-img"
                />
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="credentials-cta">
          <h2>Ready to Work with a Certified Expert?</h2>
          <p>Let's leverage proven expertise to build your next successful project.</p>
          <div className="cta-buttons">
            <a
              href="https://calendly.com/aubair-akif-dev1998/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Schedule Consultation
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01446faab084f247d5?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              Hire on Upwork
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}