import "@/style/footer.css";
import Faebook from "@/assets/face book.svg";
import Twitter from "@/assets/twitter.svg";
import Instagram from "@/assets/instagram.svg";
import Youtube from "@/assets/youtub.svg";
import Image from "next/image";
const technologies = [
  { technology: "Phyton" },
  { technology: "React JS" },
  { technology: "Mongoo DB" },
  { technology: "Vue JS" },
  { technology: "Jira" },
  { technology: "Node JS" },
];
const technologies2 = [
  { technology2: "Fast API" },
  { technology2: "Mongoose" },
  { technology2: "Rest API" },
  { technology2: "CRM" },
  { technology2: "JIRA" },
  { technology2: "Fintech" },
];

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-inner">
        <div className="links-main-footer">
          <div className="technologies">
            <h1>Technology</h1>
            <div className="technology-inner-2">
              <div className="ul-item">
                {technologies.map((tech, index) => (
                  <ul key={index}>
                    <li>{tech.technology}</li>
                  </ul>
                ))}
              </div>

              <div className="ul-item">
                {technologies2.map((tech2, index) => (
                  <ul key={index}>
                    <li>{tech2.technology2}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <div className="company technologies">
            <h1>Company</h1>
            <div className="ul-item">
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
          <div className="company-description">
            <h2>Aubair Tech Solutions</h2>
            <p>
              Passionate about building cutting-edge digital solutions, I
              specialize in Full-Stack MERN development, Cloud services, and
              AI-driven innovations. With a commitment to excellence, I
              transform ideas into scalable, high-impact applications that
              empower businesses and enhance user experiences. Innovation,
              efficiency, and problem-solving are at the core of everything I
              do.
            </p>
          </div>
        </div>

        <div className="foter-bottom">
          <div className="bottom-copyright">
            <p>© 2025 All rights reserved</p>
          </div>
          {/* <div className="bottom-tags">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div> */}
          <div className="bottom-icons">
            <Image src={Faebook} alt="icon" className="btm-icon" />
            <Image src={Twitter} alt="icon" className="btm-icon" />
            <Image src={Instagram} alt="icon" className="btm-icon" />
            <Image src={Youtube} alt="icon" className="btm-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
