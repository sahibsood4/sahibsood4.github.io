
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <Layout>
      <div className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Professional Experience</h1>
            
            <div className="space-y-10">
              {/* Oracle */}
              <Card className="overflow-hidden">
                <div className="bg-slate-100 p-6 flex items-center">
                  <img 
                    src="/lovable-uploads/oracle.png" 
                    alt="Oracle Logo" 
                    className="w-16 h-16 mr-6 object-contain"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Oracle</h2>
                    <p className="text-xl text-theme-blue">Customer Trigger Analysis - SMU MSBA Capstone Project</p>
                    <p className="text-slate-600">Internship · Jan 2025 - Present · 4 mos</p>
                    <p className="text-slate-700">Dallas, Texas, United States · Hybrid</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-slate-700 space-y-4">
                    <p>
                      Conducted comprehensive analysis of customer behavior across the B2B software sales funnel to identify high-impact triggers influencing key engagement metrics.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Business Intelligence (BI)</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Business Analysis</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Sales Analytics</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* SMU */}
              <Card className="overflow-hidden">
                <div className="bg-slate-100 p-6 flex items-center">
                  <img 
                    src="/lovable-uploads/smu.png" 
                    alt="SMU Logo" 
                    className="w-16 h-16 mr-6 object-contain"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Southern Methodist University</h2>
                    <p className="text-xl text-theme-blue">Student Assistant</p>
                    <p className="text-slate-600">Part-time · Dec 2024 - Feb 2025 · 3 mos</p>
                    <p className="text-slate-700">Dallas, Texas, United States · On-site</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-slate-700 space-y-4">
                    <p>
                      Assisted faculty with administrative tasks, data management, and research support. Collaborated with professors to organize educational materials and analyze student performance data.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Prakash Software Solutions */}
              <Card className="overflow-hidden">
                <div className="bg-slate-100 p-6 flex items-center">
                  <img 
                    src="lovable-uploads/prakash-color-logo.png" 
                    alt="Prakash Software Solutions Logo" 
                    className="w-16 h-16 mr-6 object-contain"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Prakash Software Solutions Pvt. Ltd</h2>
                    <p className="text-xl text-theme-blue">Software Engineer</p>
                    <p className="text-slate-600">Full-time · May 2023 - Jun 2024 · 1 yr 2 mos</p>
                    <p className="text-slate-700">Indore, Madhya Pradesh, India · On-site</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-slate-700 space-y-4">
                    <p>
                      Led the development of three large-scale data-driven applications using Power Platform tools (Power BI, Power Apps), delivering innovative solutions that improved client satisfaction by 30%.
                    </p>
                    <p>
                      Designed and implemented interactive dashboards and data visualization solutions to help clients make informed business decisions, resulting in a 95% client satisfaction rate.
                    </p>
                    <p>
                      Collaborated with cross-functional teams to gather requirements, analyze data, and deliver user-focused solutions that addressed specific business needs.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Microsoft Excel</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Microsoft Power Apps</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Data Analysis</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Power BI</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Dashboard Design</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Sopra Steria */}
              <Card className="overflow-hidden">
                <div className="bg-slate-100 p-6 flex items-center">
                  <img 
                    src="lovable-uploads/sopra.png" 
                    alt="Sopra Steria Logo" 
                    className="w-16 h-16 mr-6 object-contain"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Sopra Steria</h2>
                    <p className="text-xl text-theme-blue">Software Engineer</p>
                    <p className="text-slate-600">Full-time · Aug 2022 - May 2023 · 10 mos</p>
                    <p className="text-slate-700">Noida, Uttar Pradesh, India · On-site</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-slate-700 space-y-4">
                    <p>
                      Designed and delivered over 10 custom dashboards and portals for NHS UK, enhancing business intelligence capabilities with Power BI, Power Portals, and Dynamics 365.
                    </p>
                    <p>
                      Streamlined client workflows, boosting user traffic by 40% through Power BI, Power Portals, and JavaScript-based dashboards. Also collaborated with NHS UK teams, improving process efficiency by 30% through modernization of UI and functionality.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Microsoft Dynamics 365</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">SQL</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Power BI</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Power Portals</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">JavaScript</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              
              
              {/* Shri Sai Software Solutions */}
              <Card className="overflow-hidden">
                <div className="bg-slate-100 p-6 flex items-center">
                  <img 
                    src="lovable-uploads/ssss.jpg" 
                    alt="Sopra Steria Logo" 
                    className="w-16 h-16 mr-6 object-contain"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Shri Sai Software Solutions</h2>
                    <p className="text-xl text-theme-blue">Data Analyst Intern</p>
                    <p className="text-slate-600">Internship · May 2021 - Apr 2022 · 1 yr</p>
                    <p className="text-slate-700">Indore, Madhya Pradesh, India · On-site</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-slate-700 space-y-4">
                    <p>
                      As a Web Developer Trainee, I reduced response time by 25% by optimizing database queries and enhancing backend performance. I also containerized deployments using Docker, ensuring smooth integration with frontend features.
                    </p>
                    <p>
                      Developed and optimized backend systems using Django and PostgreSQL, improving response times by 25% through query optimization.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">React.js</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Redux.js</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Django</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">PostgreSQL</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Docker</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
