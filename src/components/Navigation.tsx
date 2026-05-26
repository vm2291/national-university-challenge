import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/event-gallery", label: "2025 Gallery" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/event-structure", label: "Event Details"},
    { path: "/competition-structure", label: "Coordinators Info" },
    { path: "/prizes", label: "Prizes" },
    { path: "/about", label: "About Us" }
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-secondary/15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/WhatsApp Image 2025-12-05 at 12.26.39.jpeg" 
              alt="Takãmul Cup Logo" 
              className="h-12 w-auto object-contain transform transition-transform group-hover:scale-105"
            />
            <span className="font-display text-xl text-tertiary hidden sm:block">
              Takãmul Cup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 font-medium text-sm tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-secondary"
                    : "text-tertiary/70 hover:text-secondary"
                }`}
              >
                {link.label}
                <span className={`absolute left-3 right-3 -bottom-0.5 h-px bg-secondary origin-left transition-transform duration-300 ${isActive(link.path) ? "scale-x-100" : "scale-x-0"}`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-primary/30 mt-2 pt-2">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-secondary text-secondary-foreground shadow-md"
                    : "text-foreground hover:bg-primary/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
