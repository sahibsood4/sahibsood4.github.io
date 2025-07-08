
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Database, LineChart, Code, MessageSquare, GraduationCap, BookOpen } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">About Me</h1>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:shrink-0 md:w-1/3">
                  <img 
                    src="/lovable-uploads/8f3a8c34-5bee-4660-85b3-a6583544ff4d.png"
                    alt="Sahib Sood" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 md:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Sahib Sood</h2>
                  <p className="text-lg text-theme-blue font-medium mb-6">
                    Program Manager | Software Engineer | SQL | Python | Power BI
                  </p>
                  <p className="text-slate-700 mb-6">
                    Data-driven Business Analyst with a software engineering background, passionate about leveraging data analytics,
                    visualization, and automation to drive business growth. Currently pursuing an M.S. in Business Analytics at SMU Cox
                    School of Business, I specialize in SQL, Python, Power BI, and predictive analytics to extract actionable insights and
                    optimize decision-making.
                  </p>
                  <p className="text-slate-700">
                    <span className="font-medium">Location:</span> Dallas, Texas, United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Professional Summary</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-slate-700 mb-6">
                    I thrive at the intersection of business, technology, and data, using SQL, Python, Power BI, and KNIME to uncover
                    trends, automate workflows, and enhance decision-making. Whether it's building predictive models, creating
                    interactive dashboards, or optimizing business processes, I am committed to driving data-informed success.
                  </p>
                  <p className="text-slate-700">
                    I am a lifelong learner, constantly exploring machine learning, financial analytics, and emerging technologies. Outside
                    of work, I enjoy hiking, biking, and exploring new innovations in data science.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <Database className="h-6 w-6 text-theme-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Data Analysis</h3>
                  </div>
                  <p className="text-slate-700">
                    Expert in extracting, transforming, and analyzing data using SQL, Python, and Excel to uncover actionable insights.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <LineChart className="h-6 w-6 text-theme-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Data Visualization</h3>
                  </div>
                  <p className="text-slate-700">
                    Creating impactful dashboards and reports using Power BI, Excel, and other tools to communicate data stories effectively.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <Code className="h-6 w-6 text-theme-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Software Development</h3>
                  </div>
                  <p className="text-slate-700">
                    Building data-driven applications and solutions with Python, Django, and JavaScript to automate workflows and improve efficiency.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <MessageSquare className="h-6 w-6 text-theme-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Communication</h3>
                  </div>
                  <p className="text-slate-700">
                    Translating complex data findings into clear, actionable insights for stakeholders across all levels of the organization.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Education</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-start">
                    <div className="rounded-lg bg-red-100 p-3 mr-4">
                      <GraduationCap className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">SMU Cox School of Business</h3>
                      <p className="text-theme-blue font-medium">Master of Science - MS, Business Analytics</p>
                      <p className="text-slate-600">Jul 2024 - May 2025</p>
                      <p className="text-slate-700 mt-2">GPA: 3.66</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-start">
                    <div className="rounded-lg bg-orange-100 p-3 mr-4">
                      <BookOpen className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore</h3>
                      <p className="text-theme-blue font-medium">Bachelor of Technology - BTech, Computer Science</p>
                      <p className="text-slate-600">2018 - 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Certifications</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" 
                      alt="Microsoft" 
                      className="w-12 h-12 mr-4 object-contain" 
                    />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Microsoft Certified: Power Platform Functional Consultant Associate</h3>
                      <p className="text-slate-600">Microsoft</p>
                      <p className="text-slate-700">Issued Nov 2023 · Expires Nov 2025</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/Mastercard-logo.svg" 
                      alt="VMware" 
                      className="w-12 h-12 mr-4 object-contain" 
                    />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">MasterCard</h3>
                      <p className="text-slate-600">Test and Learn</p>
                      <p className="text-slate-700">Issued Apr 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
