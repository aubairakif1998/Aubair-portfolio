"use client";
import "@/style/products.css";
import Image from "next/image";
import { useState } from "react";

const currentProducts = [
  {
    id: 1,
    name: "MyStoreSphere",
    category: "E-commerce Platform",
    description: "Complete e-commerce solution with admin dashboard, customer portal, and payment integration",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: [
      "Multi-vendor marketplace",
      "Real-time inventory management",
      "Stripe payment integration",
      "Advanced analytics dashboard",
      "Mobile-responsive design",
      "SEO optimized"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    metrics: {
      users: "10K+",
      transactions: "$2M+",
      uptime: "99.9%"
    },
    liveLink: "https://mystoresphere-client-app.vercel.app/",
    adminLink: "https://mystoresphere-store-app.vercel.app/670bdacdbce0484afe5a194b",
    status: "Live",
    testimonial: {
      text: "MyStoreSphere transformed our business. Sales increased by 300% in the first quarter!",
      author: "Sarah Johnson, TechStart Inc."
    }
  },
  {
    id: 2,
    name: "AI Content Generator",
    category: "AI/ML Tool",
    description: "Advanced AI-powered content generation platform for marketing teams and content creators",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: [
      "GPT-4 integration",
      "Multi-language support",
      "Content templates",
      "Plagiarism detection",
      "Team collaboration",
      "API access"
    ],
    techStack: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL"],
    metrics: {
      users: "5K+",
      content: "1M+ pieces",
      accuracy: "95%"
    },
    liveLink: "#",
    status: "Beta",
    testimonial: {
      text: "This AI tool reduced our content creation time by 80% while maintaining quality.",
      author: "Michael Chen, ContentFlow"
    }
  },
  {
    id: 3,
    name: "CloudSync Pro",
    category: "Cloud Integration",
    description: "Seamless cloud migration and synchronization tool for enterprise applications",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: [
      "Multi-cloud support",
      "Real-time sync",
      "Data encryption",
      "Automated backups",
      "Cost optimization",
      "Compliance monitoring"
    ],
    techStack: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    metrics: {
      clients: "50+",
      data: "100TB+",
      savings: "$500K+"
    },
    liveLink: "#",
    status: "Enterprise",
    testimonial: {
      text: "CloudSync Pro saved us $50K annually while improving our system reliability.",
      author: "Emily Rodriguez, CloudTech"
    }
  }
];

const upcomingProducts = [
  {
    id: 4,
    name: "AutoFlow RPA",
    category: "Process Automation",
    description: "Intelligent RPA platform that automates complex business processes with AI-driven decision making",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: [
      "Visual workflow builder",
      "AI-powered decisions",
      "Integration APIs",
      "Performance analytics",
      "Compliance tracking",
      "24/7 monitoring"
    ],
    techStack: ["Python", "TensorFlow", "React", "Docker", "Redis"],
    launchDate: "Q2 2025",
    expectedMetrics: {
      automation: "90%",
      timeSaving: "40hrs/week",
      roi: "300%"
    },
    status: "Development"
  },
  {
    id: 5,
    name: "DataViz Intelligence",
    category: "Business Intelligence",
    description: "Advanced data visualization and business intelligence platform with predictive analytics",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: [
      "Interactive dashboards",
      "Predictive analytics",
      "Real-time data streams",
      "Custom visualizations",
      "Export capabilities",
      "Team sharing"
    ],
    techStack: ["D3.js", "Python", "Apache Kafka", "ClickHouse", "React"],
    launchDate: "Q3 2025",
    expectedMetrics: {
      insights: "Real-time",
      accuracy: "98%",
      speed: "10x faster"
    },
    status: "Planning"
  }
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("current");

  const renderProductCard = (product: any, isUpcoming = false) => (
    <div key={product.id} className="product-card">
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={250}
          className="product-img"
        />
        <div className="product-status">
          <span className={`status-badge ${product.status.toLowerCase()}`}>
            {product.status}
          </span>
        </div>
      </div>

      <div className="product-content">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-category">{product.category}</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-features">
          <h4>Key Features:</h4>
          <ul>
            {product.features.slice(0, 4).map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="tech-stack">
          <h4>Tech Stack:</h4>
          <div className="tech-tags">
            {product.techStack.map((tech: string, index: number) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {!isUpcoming ? (
          <div className="product-metrics">
            <h4>Success Metrics:</h4>
            <div className="metrics-grid">
              {Object.entries(product.metrics).map(([key, value]) => (
                <div key={key} className="metric-item">
                  <span className="metric-value">{value as string}</span>
                  <span className="metric-label">{key}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="product-launch">
            <h4>Expected Launch:</h4>
            <span className="launch-date">{product.launchDate}</span>
            <div className="expected-metrics">
              {Object.entries(product.expectedMetrics).map(([key, value]) => (
                <div key={key} className="expected-metric">
                  <span>{key}: {value as string}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.testimonial && (
          <div className="product-testimonial">
            <p>"{product.testimonial.text}"</p>
            <span>- {product.testimonial.author}</span>
          </div>
        )}

        <div className="product-actions">
          {!isUpcoming ? (
            <>
              {product.liveLink !== "#" && (
                <a href={product.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View Live Demo
                </a>
              )}
              {product.adminLink && (
                <a href={product.adminLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Admin Panel
                </a>
              )}
            </>
          ) : (
            <button className="btn-notify">
              Notify When Available
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="products-main">
      <div className="products-inner">
        <div className="products-header">
          <h1>Our Products</h1>
          <p>Innovative solutions that drive business growth and digital transformation</p>
        </div>

        <div className="products-tabs">
          <button
            className={`tab-btn ${activeTab === "current" ? "active" : ""}`}
            onClick={() => setActiveTab("current")}
          >
            Current Products
          </button>
          <button
            className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Products
          </button>
        </div>

        <div className="products-content">
          {activeTab === "current" ? (
            <div className="products-grid">
              {currentProducts.map(product => renderProductCard(product))}
            </div>
          ) : (
            <div className="products-grid">
              {upcomingProducts.map(product => renderProductCard(product, true))}
            </div>
          )}
        </div>

        <div className="products-cta">
          <h2>Need a Custom Solution?</h2>
          <p>Let's discuss how we can build the perfect product for your business needs.</p>
          <div className="cta-buttons">
            <a
              href="https://calendly.com/aubair-akif-dev1998/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Schedule Consultation
            </a>
            <a href="#contact" className="cta-secondary">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}