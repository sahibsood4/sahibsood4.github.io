
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
