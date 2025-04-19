
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Check out some of my most impactful projects and case studies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Power BI Reports"
            description="Created multiple analytical dashboards to drive data-driven decisions across industries."
            image="/lovable-uploads/PowerB1.webp"
            link="https://github.com/sahibsood4/Power-BI-Reports"
          />
          
          <ProjectCard
            title="MEDBAY"
            description="Developed and optimized a full-stack pharmaceutical website to enhance operational efficiency by 30%."
            image="/lovable-uploads/MEDBAY.webp"
            link="https://github.com/sahibsood4/MEDBAY"
          />
          
          <ProjectCard
            title="Resumeer"
            description="Developed a dynamic resume filtering platform to enhance recruitment efficiency by 20%."
            image="/lovable-uploads/Resume.webp"
            link="https://github.com/sahibsood4/Resumeer"
          />
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-theme-blue hover:bg-theme-dark-blue text-white">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-theme-blue font-medium hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
