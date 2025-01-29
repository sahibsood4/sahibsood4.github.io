import gsap from "gsap";

// Custom function to split text into spans
function splitText(element: HTMLElement, type: "chars" | "words") {
  const text = element.innerText;
  element.innerHTML = ""; // Clear existing text

  if (type === "words") {
    text.split(" ").forEach((word) => {
      let span = document.createElement("span");
      span.classList.add("split-word");
      span.innerText = word + " ";
      element.appendChild(span);
    });
  } else if (type === "chars") {
    text.split("").forEach((char) => {
      let span = document.createElement("span");
      span.classList.add("split-char");
      span.innerText = char;
      element.appendChild(span);
    });
  }
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.documentElement.style.scrollBehavior = "smooth";
  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Get elements for animation
  const elements = [
    ".landing-info h3",
    ".landing-intro h2",
    ".landing-intro h1",
    ".landing-h2-info",
    ".landing-h2-info-1",
    ".landing-h2-1",
    ".landing-h2-2",
  ];

  elements.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      splitText(el as HTMLElement, "chars");
    });
  });

  // Apply animations
  gsap.fromTo(
    document.querySelectorAll(".split-char"),
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
