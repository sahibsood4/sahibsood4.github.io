import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";

// Initialize Locomotive Scroll when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("[data-scroll-container]") as HTMLElement | null;
  if (!container) return; // Prevent errors if the element is not found

  new LocomotiveScroll({
    el: container,
    smooth: true,
  });
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
