
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sahib Sood</h3>
            <p className="text-slate-300 mb-4">
              Data Analytics | Software Engineer | SQL | Python | Power BI <br />
              Driving Data-Driven Decisions
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/sahibsood"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-theme-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/sahibsood4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-theme-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:sahibsood4@gmail.com"
                className="text-white hover:text-theme-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-slate-300 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-slate-300 mb-2">Dallas, Texas, United States</p>
            <p className="text-slate-300 mb-2">sahibsood4@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Sahib Sood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
