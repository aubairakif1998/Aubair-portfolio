// ServiceSection.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "@/style/ServiceSection.css";
import FlexRowView from "@/components/Carasoul"; // Import the new FlexRowView component

// images import
import WebApplication from "@/assets/web-application.webp";
import MobileApplication from "@/assets/mobile-application.webp";
import CloudIntegration from "@/assets/cloud-integration.webp";
import DIGITALMarketing from "@/assets/digital-marketing.webp";
import RPAImage from "@/assets/rpa.webp";
import MachineLearning from "@/assets/machine-learning.webp";
import GENAI from "@/assets/gen-ai.webp";
import BusinessInteligence from "@/assets/business-intelligence.webp";

// Import your SVGs
import WebAplication2 from "@/assets/Webapplication-2.svg";
import WebAplicationPink from "@/assets/Webapplication-Pink.svg";
import MobileAplication2 from "@/assets/mobile-application-img-2.svg";
import MobileApLicationPink from "@/assets/mobile-application-Pink.svg";
import CloudIntegration2 from "@/assets/cloud-integration-img-2.svg";
import CloudIntegrationPink from "@/assets/cloud-integration-Pink.svg";
import DigitalMarkiting2 from "@/assets/Digital-marketing-2.svg";
import DigitalMarkitingPink from "@/assets/Digital-marketing-Pink.svg";
import RPAImage2 from "@/assets/RPAImage-2.svg";
import RPAImagePink from "@/assets/RPAImage-Pink.svg";
import MachineLearning2 from "@/assets/Machine-Learning-2.svg";
import MachineLearningPink from "@/assets/Machine-Learning-Pink.svg";
import GENAIimg2 from "@/assets/GENAIimg-2.svg";
import GENAIimgPink from "@/assets/GENAIimg-Pink.svg";
import BuisnessInteligence from "@/assets/BuisessInteligence-2.svg";
import BuisnessInteligencePink from "@/assets/BuisessInteligence-Pink.svg";

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("first-tabination");
  const [angles, setAngles] = useState<number[]>(
    Array(8)
      .fill(0)
      .map((_, i) => i * 45)
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const services = [
    {
      id: "first-tabination",
      name: "Web Application",
      image: WebApplication,
      imgSrc: WebAplication2,
      imgSrcPink: WebAplicationPink,
    },
    {
      id: "second-tabination",
      name: "Mobile Application",
      image: MobileApplication,
      imgSrc: MobileAplication2,
      imgSrcPink: MobileApLicationPink,
    },
    {
      id: "third-tabination",
      name: "Cloud Integration",
      image: CloudIntegration,
      imgSrc: CloudIntegration2,
      imgSrcPink: CloudIntegrationPink,
    },
    {
      id: "fourth-tabination",
      name: "RPA",
      image: RPAImage,
      imgSrc: RPAImage2,
      imgSrcPink: RPAImagePink,
    },
    {
      id: "five-tabination",
      name: "Machine Learning",
      image: MachineLearning,
      imgSrc: MachineLearning2,
      imgSrcPink: MachineLearningPink,
    },
    {
      id: "six-tabination",
      name: "Digital Marketing",
      image: DIGITALMarketing,
      imgSrc: DigitalMarkiting2,
      imgSrcPink: DigitalMarkitingPink,
    },
    {
      id: "seventh-tabination",
      name: "Gen AI",
      image: GENAI,
      imgSrc: GENAIimg2,
      imgSrcPink: GENAIimgPink,
    },
    {
      id: "eighth-tabination",
      name: "Business Intelligence",
      image: BusinessInteligence,
      imgSrc: BuisnessInteligence,
      imgSrcPink: BuisnessInteligencePink,
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setActiveTab(services[index].id);
  };

  const handleHoverStart = (index: number) => {
    setHoverIndex(index);
  };

  const handleHoverEnd = () => {
    setHoverIndex(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAngles((prevAngles) => {
        const newAngles = prevAngles.map((angle) => angle + 45);
        const newActiveIndex = newAngles.findIndex(
          (angle) => angle % 360 === 0
        );
        setActiveIndex(newActiveIndex);
        setActiveTab(services[newActiveIndex].id);
        return newAngles;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="augmention-service" id="service">
      <div className="container">
        <div className="slide-text-1">
          <h2>Our Services</h2>
        </div>

        <div className="Slider-and-images-main-div">
          {/* Big Circle (Visible on large screens) */}
          <div className="main big-circle-view">
            <div className="big-circle">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`icon-block item-${index + 1}`}
                  style={{
                    transform: `rotate(${angles[index]}deg) translate(200px) rotate(-${angles[index]}deg)`,
                    color: activeIndex === index ? "#ff5722" : "#000000",
                  }}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => handleHoverStart(index)}
                  onMouseLeave={handleHoverEnd}
                >
                  <button
                    className={`nav-link ${
                      activeTab === service.id ? "active" : ""
                    }`}
                    type="button"
                  >
                    <div
                      className={`btn-inner-img-div ${
                        activeTab === service.id ? "activeBorder" : ""
                      }`}
                    >
                      <Image
                        src={
                          hoverIndex === index || activeIndex === index
                            ? service.imgSrcPink
                            : service.imgSrc
                        }
                        alt={service.name}
                      />
                    </div>
                    <p>{service.name}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Flex Row (Visible on screens < 1440px) */}
          <FlexRowView
            services={services}
            // activeIndex={activeIndex}
            hoverIndex={hoverIndex}
            handleClick={handleClick}
            handleHoverStart={handleHoverStart}
            handleHoverEnd={handleHoverEnd}
          />

          <div className="slider-image-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`tab-pane ${
                  activeTab === service.id ? "show active" : ""
                }`}
                id={service.id}
              >
                {activeTab === service.id && (
                  <div className="service-img">
                    <Image
                      src={service.image}
                      alt={service.name}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
