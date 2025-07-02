"use client";
import "@/style/resources.css";
import Image from "next/image";
import { useState } from "react";

const resources = [
  {
    id: 1,
    title: "Complete MERN Stack Development Guide",
    category: "Documentation",
    type: "PDF",
    description: "Comprehensive guide covering MongoDB, Express.js, React, and Node.js development best practices",
    downloadLink: "#",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    downloads: 2500,
    rating: 4.9
  },
  {
    id: 2,
    title: "E-commerce Platform Case Study",
    category: "Case Study",
    type: "PDF",
    description: "Detailed analysis of MyStoreSphere development process, challenges, and solutions",
    downloadLink: "#",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["E-commerce", "React", "Stripe", "AWS"],
    downloads: 1800,
    rating: 4.8
  },
  {
    id: 3,
    title: "Cloud Migration Strategy Template",
    category: "Template",
    type: "DOCX",
    description: "Step-by-step template for planning and executing cloud migration projects",
    downloadLink: "#",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["AWS", "Azure", "Cloud", "Migration"],
    downloads: 1200,
    rating: 4.7
  },
  {
    id: 4,
    title: "API Security Best Practices",
    category: "Guide",
    type: "PDF",
    description: "Essential security practices for REST API development and deployment",
    downloadLink: "#",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["API", "Security", "Authentication", "JWT"],
    downloads: 3200,
    rating: 4.9
  },
  {
    id: 5,
    title: "Machine Learning Integration Checklist",
    category: "Checklist",
    type: "PDF",
    description: "Complete checklist for integrating ML models into production applications",
    downloadLink: "#",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Machine Learning", "Python", "TensorFlow", "Production"],
    downloads: 950,
    rating: 4.6
  },
  {
    id: 6,
    title: "RPA Implementation Roadmap",
    category: "Roadmap",
    type: "PDF",
    description: "Strategic roadmap for implementing robotic process automation in enterprises",
    downloadLink: "#",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["RPA", "Automation", "Process", "Enterprise"],
    downloads: 750,
    rating: 4.5
  },
  {
    id: 7,
    title: "React Performance Optimization",
    category: "Tutorial",
    type: "Video",
    description: "Advanced techniques for optimizing React application performance",
    downloadLink: "#",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    downloads: 4100,
    rating: 4.8
  },
  {
    id: 8,
    title: "Database Design Patterns",
    category: "Documentation",
    type: "PDF",
    description: "Common database design patterns for scalable applications",
    downloadLink: "#",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Database", "MongoDB", "PostgreSQL", "Design"],
    downloads: 1600,
    rating: 4.7
  }
];

const categories = ["All", "Documentation", "Case Study", "Template", "Guide", "Checklist", "Roadmap", "Tutorial"];

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>★</span>
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return '📄';
      case 'DOCX': return '📝';
      case 'Video': return '🎥';
      default: return '📄';
    }
  };

  return (
    <div className="resources-main">
      <div className="resources-inner">
        <div className="resources-header">
          <h1>Resource Library</h1>
          <p>Free guides, templates, and case studies to accelerate your development journey</p>
        </div>

        <div className="resources-controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="resources-filters">
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

        <div className="resources-stats">
          <div className="stat-item">
            <span className="stat-number">{resources.length}</span>
            <span className="stat-label">Total Resources</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{resources.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()}</span>
            <span className="stat-label">Downloads</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{filteredResources.length}</span>
            <span className="stat-label">Showing</span>
          </div>
        </div>

        <div className="resources-grid">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div className="resource-image">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={300}
                  height={200}
                  className="resource-img"
                />
                <div className="resource-type">
                  <span className="type-icon">{getTypeIcon(resource.type)}</span>
                  <span className="type-text">{resource.type}</span>
                </div>
              </div>

              <div className="resource-content">
                <div className="resource-header">
                  <h3 className="resource-title">{resource.title}</h3>
                  <span className="resource-category">{resource.category}</span>
                </div>

                <p className="resource-description">{resource.description}</p>

                <div className="resource-tags">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="resource-tag">{tag}</span>
                  ))}
                </div>

                <div className="resource-stats">
                  <div className="resource-rating">
                    {renderStars(resource.rating)}
                    <span className="rating-value">{resource.rating}</span>
                  </div>
                  <div className="resource-downloads">
                    <span className="download-icon">⬇️</span>
                    <span className="download-count">{resource.downloads.toLocaleString()}</span>
                  </div>
                </div>

                <div className="resource-actions">
                  <a href={resource.downloadLink} className="btn-download">
                    Download Free
                  </a>
                  <button className="btn-preview">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="no-results">
            <h3>No resources found</h3>
            <p>Try adjusting your search terms or filters</p>
          </div>
        )}

        <div className="resources-cta">
          <h2>Need Custom Documentation?</h2>
          <p>We can create tailored guides and documentation for your specific project needs.</p>
          <div className="cta-buttons">
            <a
              href="https://calendly.com/aubair-akif-dev1998/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Request Custom Guide
            </a>
            <a href="#contact" className="cta-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}