
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-theme-dark-blue">
            Sahib Sood
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-theme-blue font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-theme-blue font-medium">
              About
            </Link>
            <Link to="/experience" className="text-gray-700 hover:text-theme-blue font-medium">
              Experience
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-theme-blue font-medium">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-theme-blue font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-theme-blue font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-theme-blue font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/experience"
                className="text-gray-700 hover:text-theme-blue font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-theme-blue font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-theme-blue font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
