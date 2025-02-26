"use client";
import "@/style/getPopup.css";
import { useState } from "react";

interface PopMainProps {
  onClose: () => void;
}

export default function PopMain({ onClose }: PopMainProps) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form data submitted:", formData);
    // Add form submission logic here
    onClose(); // Close the popup after submission
  };

  return (
    <div className="Pop-overlay" onClick={onClose}>
      <div
        className="Pop-main"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="Pop-form">
          <h2>Get Connect</h2>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your first name"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label htmlFor="email">Phone Number</label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your Number"
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a brief description"
          />

          <div className="Pop-buttons">
            <button onClick={handleSubmit}>Send</button>
            <button onClick={onClose} className="closed-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
