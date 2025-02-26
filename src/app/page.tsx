"use client";

import Header from "@/components/header";
import HomeSection from "@/components/Home-section";
import OurServices from "@/components/OurServices";
import SkillsTechnology from "@/components/SkillsTechnology";
import Projects from "@/components/Projects";
import BookmeetingandCallNow from "@/components/BookmeetingandCallNow";
import GetForm from "@/components/GetPopup";
import Footer from "@/components/Footer";
import Image from "next/image";
import WhatsAppIcon from "@/assets/whatsap-icon.svg"; // Replace with your WhatsApp icon path

export default function Home() {
  const phoneNumber = "+923488406670"; // Replace with your WhatsApp phone number
  const message = "Hello! I would like to inquire about your services."; // Optional preset message

  return (
    <div>
      <Header />
      <section id="home">
        <HomeSection />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="skills">
        <SkillsTechnology />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <BookmeetingandCallNow />
      <section id="contact">
        <GetForm />
      </section>
      <Footer />

      {/* WhatsApp Icon */}
      <a
        href={`https://wa.me/${phoneNumber.replace(
          /[^\d]/g,
          ""
        )}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "40px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          boxShadow: "rgba(0, 0, 0, 0.5) 2px 5px 8px",
          backgroundColor: "#40C351",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          cursor: "pointer",
          transition: "transform 0.3s ease, boxShadow 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Image
          src={WhatsAppIcon}
          alt="WhatsApp Icon"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </a>
    </div>
  );
}
