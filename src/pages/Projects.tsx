
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <Layout>
      <div className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Projects Portfolio</h1>
          <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
            A collection of data science, analytics, and software development projects showcasing my technical expertise and problem-solving skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Power BI Reports */}
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/PowerB1.webp" 
                alt="Power BI Reports" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">Power BI Reports</h2>
                  <div className="flex space-x-2">
                    <a 
                      href="https://github.com/sahibsood4/Power-BI-Reports" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-slate-700 hover:text-theme-blue"
                      aria-label="GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">
                  Created multiple analytical dashboards to drive data-driven decisions across industries:
                </p>
                <ul className="list-disc pl-5 text-slate-700 mb-4 space-y-2">
                  <li>Marketing Campaign Analysis: Increased lead generation by 35% through targeted insights.</li>
                  <li>Sales Performance Dashboard: Visualized regional sales performance, leading to 20% increase in high-margin product focus.</li>
                  <li>Financial Analysis Tools: Created interactive P&L and budget tracking reports.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Power BI</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Data Analysis</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Data Visualization</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">DAX</Badge>
                </div>
              </div>
            </Card>
            
            {/* MEDBAY */}
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/MEDBAY.webp" 
                alt="MEDBAY" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">MEDBAY</h2>
                  <div className="flex space-x-2">
                    <a 
                      href="https://github.com/sahibsood4/MEDBAY" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-slate-700 hover:text-theme-blue"
                      aria-label="GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">
                  Developed and optimized a full-stack pharmaceutical website to enhance operational efficiency by 30%. Implemented advanced SQL query tuning and indexing techniques for faster database operations.
                </p>
                <ul className="list-disc pl-5 text-slate-700 mb-4 space-y-2">
                  <li>Optimized database performance using advanced indexing strategies.</li>
                  <li>Built responsive frontend with dynamic inventory management.</li>
                  <li>Implemented secure user authentication and role-based access.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">SQL</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Python</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Django</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">JavaScript</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">HTML/CSS</Badge>
                </div>
              </div>
            </Card>
            
            {/* Resumeer */}
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/Resume.webp" 
                alt="Resumeer" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">Resumeer</h2>
                  <div className="flex space-x-2">
                    <a 
                      href="https://github.com/sahibsood4/Resumeer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-slate-700 hover:text-theme-blue"
                      aria-label="GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">
                  Developed a dynamic resume filtering platform to enhance recruitment efficiency by 20%. Built using Python and Django, the platform streamlined candidate screening with intelligent matching algorithms.
                </p>
                <ul className="list-disc pl-5 text-slate-700 mb-4 space-y-2">
                  <li>Implemented NLP techniques for intelligent resume parsing.</li>
                  <li>Created a scoring algorithm to match candidates with job requirements.</li>
                  <li>Built intuitive dashboard for HR teams to track hiring pipelines.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Python</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Django</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">NLP</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Machine Learning</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Bootstrap</Badge>
                </div>
              </div>
            </Card>
            
            {/* Customer Behavior Analysis */}
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/cba.png" 
                alt="Customer Behavior Analysis" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">Customer Behavior Analysis</h2>
                </div>
                <p className="text-slate-700 mb-4">
                  Analyzed customer behavior in the B2B software sales journey at Oracle, identifying key triggers that optimized engagement strategies and enhanced pre-sales effectiveness.
                </p>
                <ul className="list-disc pl-5 text-slate-700 mb-4 space-y-2">
                  <li>Conducted comprehensive analysis of customer journey touchpoints.</li>
                  <li>Identified key engagement metrics correlated with conversion.</li>
                  <li>Created predictive models to forecast customer purchase likelihood.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Python</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">SQL</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Power BI</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Statistical Analysis</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Data Mining</Badge>
                </div>
              </div>
            </Card>
            
            {/* NHS UK Dashboards */}
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/nhs.jpg" 
                alt="NHS UK Dashboards" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">NHS UK Dashboards</h2>
                </div>
                <p className="text-slate-700 mb-4">
                  Designed and delivered custom dashboards and portals for NHS UK, enhancing business intelligence capabilities with Power BI, Power Portals, and Dynamics 365.
                </p>
                <ul className="list-disc pl-5 text-slate-700 mb-4 space-y-2">
                  <li>Created interactive healthcare analytics dashboards for monitoring patient care metrics.</li>
                  <li>Developed resource allocation tools for optimizing healthcare staff deployment.</li>
                  <li>Built administrative portals for streamlining operational processes.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Power BI</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Dynamics 365</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Power Portals</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">JavaScript</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Healthcare Analytics</Badge>
                </div>
              </div>
            </Card>
            
            {/* Database Optimization Project */}
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/sql1.jpeg" 
                alt="Database Optimization" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">Database Optimization Project</h2>
                </div>
                <p className="text-slate-700 mb-4">
                  During my internship at Shri Sai Software Solutions, I optimized backend systems using Django and PostgreSQL, improving response times by 25% through query optimization.
                </p>
                <ul className="list-disc pl-5 text-slate-700 mb-4 space-y-2">
                  <li>Refactored database schema to improve data access patterns.</li>
                  <li>Implemented advanced indexing strategies to speed up common queries.</li>
                  <li>Containerized application deployment using Docker for consistent environments.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">PostgreSQL</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Django</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">SQL Optimization</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Docker</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Database Design</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
