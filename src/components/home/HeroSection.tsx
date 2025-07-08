
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e3296633-3b22-4e79-94b7-e9849076d0c2.png')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
                <span className="text-theme-blue">Hello, I'm </span>
                <span className="block mt-2">Sahib Sood</span>
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-in">
              Program Manager | Software Engineer | SQL | Python | Power BI
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl animate-slide-in" style={{animationDelay: "100ms"}}>
            I'm a software engineer and program manager with 5+ years of experience leading release management across healthcare, media, and enterprise tech. I specialize in delivering high-impact tools — from automation and dashboards to full release systems — that improve efficiency, reduce risk, and scale across diverse user bases.
            I blend technical skills, agile leadership, and user-centered thinking to ship solutions that solve real business problems.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in" style={{animationDelay: "200ms"}}>
              <Button asChild className="bg-theme-blue hover:bg-theme-dark-blue text-white">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" className="text-black border-white hover:bg-white/10">
                <Link to="/about">About Me</Link>
              </Button>
              <a 
                href="https://linkedin.com/in/sahibsood"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-[#0077B5] hover:bg-[#005885] rounded-md transition-colors"
              >
                <Linkedin className="mr-2" size={18} /> LinkedIn
              </a>
              <a 
                href="https://github.com/sahibsood4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-[#333] hover:bg-[#222] rounded-md transition-colors"
              >
                <Github className="mr-2" size={18} /> GitHub
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="rounded-full w-80 h-80 border-4 border-theme-blue p-1 bg-white shadow-xl">
              <img 
                src="/lovable-uploads/8f3a8c34-5bee-4660-85b3-a6583544ff4d.png" 
                alt="Sahib Sood" 
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#skills" className="text-white">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

