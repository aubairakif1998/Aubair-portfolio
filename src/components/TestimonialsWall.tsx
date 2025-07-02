"use client";
import "@/style/testimonials.css";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CTO",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    category: "Web Development",
    testimonial: "Aubair delivered an exceptional e-commerce platform that increased our sales by 300%. His attention to detail and technical expertise is unmatched.",
    project: "E-commerce Platform",
    metrics: "300% increase in sales"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "DataFlow Solutions",
    role: "Product Manager",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    category: "AI/ML",
    testimonial: "The machine learning solution Aubair built for us reduced processing time by 80% and improved accuracy significantly. Outstanding work!",
    project: "ML Data Processing System",
    metrics: "80% faster processing"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "CloudTech Enterprises",
    role: "DevOps Lead",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    category: "Cloud Integration",
    testimonial: "Aubair's cloud migration strategy saved us $50K annually while improving our system reliability. His expertise in AWS is remarkable.",
    project: "Cloud Migration",
    metrics: "$50K annual savings"
  },
  {
    id: 4,
    name: "David Thompson",
    company: "MobileFirst Corp",
    role: "CEO",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    category: "Mobile Development",
    testimonial: "The React Native app Aubair developed has 4.8 stars on app stores and over 100K downloads. Exceptional quality and performance.",
    project: "Mobile App Development",
    metrics: "100K+ downloads, 4.8★ rating"
  },
  {
    id: 5,
    name: "Lisa Wang",
    company: "FinanceFlow",
    role: "Head of Technology",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    category: "Fintech",
    testimonial: "Aubair built our secure payment processing system that handles millions in transactions daily. His security expertise is top-notch.",
    project: "Payment Processing System",
    metrics: "Millions in daily transactions"
  },
  {
    id: 6,
    name: "James Miller",
    company: "AutomateNow",
    role: "Operations Director",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    category: "RPA",
    testimonial: "The RPA solution automated 90% of our manual processes, saving 40 hours per week. Aubair's automation expertise is incredible.",
    project: "Process Automation",
    metrics: "90% automation, 40hrs/week saved"
  }
];

const categories = ["All", "Web Development", "AI/ML", "Cloud Integration", "Mobile Development", "Fintech", "RPA"];

export default function TestimonialsWall() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="testimonials-main">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <h1>Client Success Stories</h1>
          <p>Real results from real clients who trusted us with their vision</p>
        </div>

        <div className="testimonials-filters">
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

        <div className="testimonials-grid">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-info">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="client-avatar"
                  />
                  <div className="client-details">
                    <h3>{testimonial.name}</h3>
                    <p className="client-role">{testimonial.role}</p>
                    <p className="client-company">{testimonial.company}</p>
                  </div>
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.testimonial}"</p>
                
                <div className="project-details">
                  <div className="project-info">
                    <span className="project-label">Project:</span>
                    <span className="project-name">{testimonial.project}</span>
                  </div>
                  <div className="metrics">
                    <span className="metrics-label">Impact:</span>
                    <span className="metrics-value">{testimonial.metrics}</span>
                  </div>
                </div>

                <div className="category-tag">
                  {testimonial.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <h2>Ready to Create Your Success Story?</h2>
          <p>Join these satisfied clients and transform your business with cutting-edge technology solutions.</p>
          <div className="cta-buttons">
            <a
              href="https://calendly.com/aubair-akif-dev1998/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Schedule a Consultation
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01446faab084f247d5?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              View Upwork Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}