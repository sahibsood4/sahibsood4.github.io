/*mport "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[...Array(6)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>MEDBAY</h4>
                    <p>Database Design & LLM</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p> Python, Django, SQL, Javascript, HTML5, CSS3,</p>
              </div>
              
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;*/


import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Extended WorkItem interface to include GitHub link
interface WorkItem {
  id: number;
  title: string;
  description: string;
  tools: string;
  image: string;
  githubLink: string; // New property for GitHub link
}

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  // Array to hold work items with GitHub links
  const workItems: WorkItem[] = [
    {
      id: 1,
      title: "MEDBAY",
      description: "Database Design & LLM",
      tools: "Python, Django, SQL, Javascript, HTML5, CSS3",
      image: "/images/MEDBAY.webp",
      githubLink: "https://github.com/sahibsood4/medbay",
    },
    {
      id: 2,
      title: "Resumeer",
      description: "Dynamic Resume Filtering",
      tools: "Python, Django, HTML5, CSS3",
      image: "/images/Resumeer.webp",
      githubLink: "https://github.com/sahibsood4/resumeer",
    },
    {
      id: 3,
      title: "Power BI Reports",
      description: "Campaign Performance Analysis",
      tools: "Power BI, Tableau, DAX",
      image: "/images/PowerBI.webp",
      githubLink: "https://github.com/sahibsood4/Power-BI-Reports",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.map((work) => (
            <div className="work-box" key={work.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{work.id}</h3>
                  <div>
                    <h4>{work.title}</h4>
                    <p>{work.description}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{work.tools}</p>
                {/* GitHub link */}
                <a
                  href={work.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub
                </a>
              </div>
              <WorkImage image={work.image} alt={work.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

