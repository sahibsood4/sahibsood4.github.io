
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Experience Highlights</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Recent roles where I've made significant impacts through data-driven solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExperienceCard 
            company="Oracle"
            role="SMU MSBA CAPSTONE"
            period="Jan 2025 - Present"
            description="Analyzed customer behavior in the B2B software sales journey and identified key triggers that optimized engagement strategies, enhancing pre-sales effectiveness."
            logo="/lovable-uploads/oracle.png"
            skills={["Business Intelligence", "Business Analysis"]}
          />
          
          <ExperienceCard 
            company="Prakash Software Solutions"
            role="Software Engineer"
            period="May 2023 - Jun 2024"
            description="Led the development of three large-scale data-driven applications using Power Platform tools, delivering innovative solutions that improved client satisfaction by 30%."
            logo="/lovable-uploads/prakash-color-logo.png"
            skills={["Microsoft Excel", "Microsoft Power Apps", "Microsoft Power BI", "SQL", "Python"]}
          />
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-theme-blue hover:bg-theme-dark-blue text-white">
            <Link to="/experience">View Full Experience</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  skills: string[];
}

const ExperienceCard = ({ company, role, period, description, logo, skills }: ExperienceCardProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md">
      <div className="p-6 border-b border-slate-200 bg-slate-50">
        <div className="flex items-center">
          <img src={logo} alt={company} className="w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-bold">{role} at {company}</h3>
            <p className="text-slate-600">{period}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
