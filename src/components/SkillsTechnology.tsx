import "@/style/skills.css";
import StarImage from "@/assets/Star 9.svg";
import Image from "next/image";

const skillData = [
  { skill: "Python", imagesrc: StarImage },
  { skill: "React JS", imagesrc: StarImage },
  { skill: "Mongo DB", imagesrc: StarImage },
  { skill: "Vue", imagesrc: StarImage },
  { skill: "Jira", imagesrc: StarImage },
  { skill: "Node.Js", imagesrc: StarImage },
  { skill: "Fast API", imagesrc: StarImage },
  { skill: "Mongoose", imagesrc: StarImage },
  { skill: "CRM", imagesrc: StarImage },
  { skill: "Python", imagesrc: StarImage },
  { skill: "React JS", imagesrc: StarImage },
  { skill: "Mongo DB", imagesrc: StarImage },
  { skill: "Vue", imagesrc: StarImage },
  { skill: "Jira", imagesrc: StarImage },
  { skill: "Node.Js", imagesrc: StarImage },
  { skill: "Fast API", imagesrc: StarImage },
  { skill: "Mongoose", imagesrc: StarImage },
  { skill: "CRM", imagesrc: StarImage },
];
const industries = [
  { industry: "Fintech" },
  { industry: "Finance" },
  { industry: "E-commerce" },
  { industry: "Manufacturing" },
  { industry: "Technology" },
  { industry: "Healthcare" },
  { industry: "Networking" },
  { industry: "Education" },
  { industry: "F & B" },
  { industry: "Travel" },
  { industry: "On demand" },
];

export default function SkillsTechnology() {
  return (
    <div className="SKills-main">
      <div className="skills-inner">
        <div className="slide-text">
          <h1>Skills and Techologies</h1>
        </div>
        <div className="slide-slider-main">
          <div className="skill-slide-main">
            {/* Duplicate items for seamless infinite scroll */}
            {skillData.concat(skillData).map((skill, index) => (
              <div key={index} className="skill-slide">
                <p>{skill.skill}</p>
                <Image
                  src={skill.imagesrc}
                  alt={`${skill.skill} icon`}
                  className="skill-slide-img"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="industry-main">
          <div className="industry-text">
            <h1>Industry we expertise In</h1>
          </div>
          <div className="industry-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-data">
                <p>{industry.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
