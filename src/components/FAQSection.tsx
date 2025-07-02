"use client";
import "@/style/faq.css";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    category: "General",
    question: "What technologies do you specialize in?",
    answer: "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js), cloud platforms (AWS, Azure, GCP), AI/ML technologies (Python, TensorFlow, OpenAI), and modern development tools. I also have extensive experience with mobile development, RPA, and business intelligence solutions."
  },
  {
    id: 2,
    category: "Project Management",
    question: "How do you handle project timelines and deliverables?",
    answer: "I use agile methodology with clear milestones and regular check-ins. Each project starts with detailed planning, followed by iterative development with weekly progress updates. I provide realistic timelines and always communicate any potential delays in advance."
  },
  {
    id: 3,
    category: "Pricing",
    question: "What are your pricing models?",
    answer: "I offer flexible pricing models: hourly rates for smaller tasks, fixed-price for well-defined projects, and retainer agreements for ongoing work. Pricing varies based on project complexity, timeline, and technology requirements. Contact me for a detailed quote."
  },
  {
    id: 4,
    category: "Technical",
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, I offer comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. I provide different support packages ranging from basic maintenance to full-service ongoing development."
  },
  {
    id: 5,
    category: "Process",
    question: "What is your development process?",
    answer: "My process includes: 1) Discovery & Planning, 2) Design & Architecture, 3) Development & Testing, 4) Deployment & Launch, 5) Support & Maintenance. I maintain transparent communication throughout and provide regular demos and progress updates."
  },
  {
    id: 6,
    category: "Technical",
    question: "Can you work with existing codebases?",
    answer: "Absolutely! I have extensive experience working with legacy systems, refactoring existing code, and integrating new features into established applications. I can perform code audits and provide recommendations for improvements."
  },
  {
    id: 7,
    category: "Collaboration",
    question: "How do you handle remote collaboration?",
    answer: "I use modern collaboration tools like Slack, Zoom, Jira, and GitHub for seamless remote work. I'm available across different time zones and maintain regular communication through daily standups, weekly reviews, and milestone demonstrations."
  },
  {
    id: 8,
    category: "Security",
    question: "How do you ensure application security?",
    answer: "Security is built into every layer of development. I implement authentication, authorization, data encryption, secure APIs, regular security audits, and follow OWASP guidelines. All applications include security testing and vulnerability assessments."
  },
  {
    id: 9,
    category: "Scaling",
    question: "Can you help scale existing applications?",
    answer: "Yes, I specialize in application scaling including database optimization, cloud infrastructure setup, load balancing, caching strategies, and microservices architecture. I can help you handle increased traffic and data loads efficiently."
  },
  {
    id: 10,
    category: "Integration",
    question: "Do you handle third-party integrations?",
    answer: "I have extensive experience with various third-party integrations including payment gateways (Stripe, PayPal), social media APIs, cloud services, CRM systems, email services, and custom API integrations. I ensure secure and reliable connections."
  }
];

const categories = ["All", "General", "Technical", "Project Management", "Pricing", "Process", "Collaboration", "Security", "Scaling", "Integration"];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="faq-main">
      <div className="faq-inner">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Get answers to common questions about our development process, pricing, and services</p>
        </div>

        <div className="faq-controls">
          <div className="faq-search">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="faq-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openFAQ === faq.id ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                  <div className="question-content">
                    <span className="category-tag">{faq.category}</span>
                    <h3>{faq.question}</h3>
                  </div>
                  <span className="toggle-icon">
                    {openFAQ === faq.id ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-sidebar">
            <div className="quick-contact">
              <h3>Still have questions?</h3>
              <p>Can't find what you're looking for? Let's discuss your specific needs.</p>
              <div className="contact-options">
                <a
                  href="https://calendly.com/aubair-akif-dev1998/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-schedule"
                >
                  Schedule a Call
                </a>
                <a href="#contact" className="btn-message">
                  Send Message
                </a>
              </div>
            </div>

            <div className="popular-questions">
              <h3>Popular Questions</h3>
              <ul>
                <li onClick={() => {setActiveCategory("Pricing"); setOpenFAQ(3);}}>
                  What are your pricing models?
                </li>
                <li onClick={() => {setActiveCategory("Technical"); setOpenFAQ(4);}}>
                  Do you provide ongoing support?
                </li>
                <li onClick={() => {setActiveCategory("Process"); setOpenFAQ(5);}}>
                  What is your development process?
                </li>
                <li onClick={() => {setActiveCategory("Security"); setOpenFAQ(8);}}>
                  How do you ensure security?
                </li>
              </ul>
            </div>

            <div className="response-time">
              <h3>Response Time</h3>
              <div className="response-stats">
                <div className="stat">
                  <span className="stat-number">< 2hrs</span>
                  <span className="stat-label">Email Response</span>
                </div>
                <div className="stat">
                  <span className="stat-number">< 24hrs</span>
                  <span className="stat-label">Project Quotes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {filteredFAQs.length === 0 && (
          <div className="no-results">
            <h3>No questions found</h3>
            <p>Try adjusting your search terms or browse different categories</p>
          </div>
        )}

        <div className="faq-cta">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss your requirements and create something amazing together.</p>
          <div className="cta-buttons">
            <a
              href="https://calendly.com/aubair-akif-dev1998/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Book Free Consultation
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01446faab084f247d5?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
  );
}