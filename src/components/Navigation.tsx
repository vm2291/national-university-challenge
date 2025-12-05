import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/event-structure", label: "Event Details"},
    { path: "/competition-structure", label: "Coordinators Info" },
    { path: "/about", label: "Vision" },
    { path: "/history", label: "About Us" }
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-secondary/30 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/WhatsApp Image 2025-12-05 at 12.26.39.jpeg" 
              alt="Takāmul Cup Logo" 
              className="h-12 w-auto object-contain transform transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block">
              Takāmul Cup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-secondary/20 hover:text-primary"
                }`}
              >
                {link.label}
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
          <div className="md:hidden pb-4 space-y-1 border-t border-secondary/30 mt-2 pt-2">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-secondary/20"
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
