
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-theme-dark-blue to-theme-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          I'd love to discuss analytics, business intelligence, and how data can transform organizations!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-white text-theme-dark-blue hover:bg-slate-100">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" className="text-theme-dark-blue border-white hover:bg-white/10">
            <a href="mailto:sahibsood4@gmail.com">
              <Mail className="mr-2" size={18} /> Email Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
