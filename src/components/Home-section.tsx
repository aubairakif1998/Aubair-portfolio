import "@/style/Home.css";
import Image from "next/image";
import UpworkIcon from "@/assets/Uprwork-icon.svg";
import Upworktext from "@/assets/upwork text.svg";
import TopRelated from "@/assets/top rated.svg";
import ProfileMan from "@/assets/profile-logo.svg";
import ProfileArrow from "@/assets/profile arrow.svg";

const ProjectsData = [
  {
    projetcs: "500+",
    projectName: "Projects Delivered",
  },
  {
    projetcs: "1000+",
    projectName: "Industry Experts",
  },
  {
    projetcs: "98.9%",
    projectName: "Client Stisfaction",
  },
  {
    projetcs: "30+",
    projectName: "Industry Awards",
  },
];
export default function HomeSection() {
  return (
    <div className="home-main">
      <div className="home-inner">
        <div className="inner-1">
          <div className="home-text">
            <h2>
              Welcome to{" "}
              <span>
                Aubair&apos;s <br />
              </span>
              Digital World
            </h2>
            <p>
              Hi, I&apos;m Aubair! I&apos;m a passionate Full-Stack MERN
              Developer with a keen eye for building seamless web applications.
              Let’s create something amazing together!
            </p>
          </div>

          <div className="video-container">
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Jn5hsfbhWx4?autoplay=1&loop=1&mute=1&playlist=Jn5hsfbhWx4&controls=0&fs=0"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen={false}
              className="background-video"
            ></iframe> */}
          </div>
        </div>
        <div className="inner-2">
          <div className="home-inner home-inner-2-main">
            <div className="upwork-profile">
              <div className="upwork-image-box">
                <Image
                  src={UpworkIcon}
                  alt="Upwork image"
                  className="UpImageMain"
                />
                <Image
                  src={Upworktext}
                  alt="upwork text"
                  className="UpPercentage"
                />
                <Image
                  src={TopRelated}
                  alt="Upwork image"
                  className="UpToprated"
                />
              </div>
              <div className="profile-sec">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={ProfileMan}
                    alt="Profile upload"
                    className="profile-imgs-sec"
                  />
                </div>
                <div>
                  <p className="profile-name">AUBAIR</p>
                  <a
                    href="https://www.upwork.com/freelancers/~01446faab084f247d5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Visit-profile"
                  >
                    Visit Profile <Image src={ProfileArrow} alt="arrow" />
                  </a>
                </div>
              </div>
            </div>

            <div className="btn-div">
              <a
                href="https://www.upwork.com/freelancers/~01446faab084f247d5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="Btn-1">HIRE NOW</button>
              </a>

              <a
                href="https://www.upwork.com/freelancers/~01446faab084f247d5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="Btn-2">BOOK MEETING</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="counting-sec">
        {ProjectsData.map((project, index) => (
          <div key={index} className="profjetcs-calcualtion">
            <p className="projects">{project.projetcs}</p>
            <p className="projects-name">{project.projectName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
