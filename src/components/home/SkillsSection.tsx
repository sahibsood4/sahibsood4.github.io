
const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            I specialize in SQL, Python, Power BI, and Data Analytics to extract actionable insights and optimize decision-making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            icon="/lovable-uploads/dataa.jpg"
            title="Data Analysis"
            description="Transforming complex data into valuable insights using Python, SQL, and statistical methods."
          />
          
          <SkillCard
            icon="/lovable-uploads/datav.png"
            title="Data Visualization"
            description="Creating impactful dashboards and visual stories using Power BI, Excel, and interactive tools."
          />
          
          <SkillCard
            icon="/lovable-uploads/BI.jpg"
            title="Business Intelligence"
            description="Leveraging data to drive strategic decisions and optimize business processes."
          />
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TechSkillCard title="Languages" skills="SQL, Python, C#, Java" />
            <TechSkillCard title="Tools" skills="Power BI, Excel, Dynamics 365" />
            <TechSkillCard title="Frameworks" skills="React.js, Django, Redux" />
            <TechSkillCard title="Data" skills="PostgreSQL, Tableau, KNIME" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
      <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
      <p className="text-slate-600 text-center">{description}</p>
    </div>
  );
};

interface TechSkillCardProps {
  title: string;
  skills: string;
}

const TechSkillCard = ({ title, skills }: TechSkillCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600">{skills}</p>
    </div>
  );
};

export default SkillsSection;
