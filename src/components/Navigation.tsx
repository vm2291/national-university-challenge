import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const location = useLocation();

  type SubItem = { hash: string; label: string };
  type NavItem = { path: string; label: string; submenu?: SubItem[] };

  const links: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/event-gallery", label: "2025 Gallery" },
    { path: "/testimonials", label: "Testimonials" },
    {
      path: "/event-structure",
      label: "Event Details",
      submenu: [
        { hash: "structure", label: "Competition Structure" },
        { hash: "flow", label: "Competition Flow" },
        { hash: "schedule", label: "Master Schedule" },
        { hash: "personnel", label: "Key Personnel" },
        { hash: "awards", label: "Awards & Recognition" },
        { hash: "location", label: "Location" },
      ],
    },
    {
      path: "/competition-structure",
      label: "Coordinators Info",
      submenu: [
        { hash: "stages", label: "Stages Breakdown" },
        { hash: "titles", label: "Titles & Awards" },
        { hash: "summary", label: "Summary for Coordinators" },
      ],
    },
    { path: "/prizes", label: "Prizes" },
    { path: "/about", label: "About Us" },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/WhatsApp Image 2025-12-05 at 12.26.39.jpeg" 
              alt="Takãmul Cup Logo" 
              className="h-12 w-auto object-contain transform transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent hidden sm:block">
              Takãmul Cup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const baseCls = `px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 inline-flex items-center gap-1 ${
                isActive(link.path)
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "text-foreground hover:bg-muted/40 hover:text-tertiary"
              }`;
              if (!link.submenu) {
                return (
                  <Link key={link.path} to={link.path} className={baseCls}>
                    {link.label}
                  </Link>
                );
              }
              return (
                <div key={link.path} className="relative group">
                  <Link to={link.path} className={baseCls}>
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  {/* Submenu */}
                  <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="rounded-xl border border-border bg-card/95 backdrop-blur-lg shadow-xl overflow-hidden py-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.hash}
                          to={`${link.path}#${sub.hash}`}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-[#e9c590]/30 hover:text-tertiary transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
          <div className="md:hidden pb-4 space-y-1 border-t border-border mt-2 pt-2">
            {links.map((link) => {
              const itemCls = `flex-1 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                isActive(link.path)
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "text-foreground hover:bg-muted/40"
              }`;
              if (!link.submenu) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block ${itemCls}`}
                  >
                    {link.label}
                  </Link>
                );
              }
              const expanded = openMobileSub === link.path;
              return (
                <div key={link.path}>
                  <div className="flex items-center">
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={itemCls}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${link.label} submenu`}
                      onClick={() => setOpenMobileSub(expanded ? null : link.path)}
                      className="p-2 text-foreground/70 hover:text-tertiary"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {expanded && (
                    <div className="ml-3 mt-1 mb-1 border-l-2 border-[#e9c590] pl-3 space-y-0.5">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.hash}
                          to={`${link.path}#${sub.hash}`}
                          onClick={() => {
                            setIsOpen(false);
                            setOpenMobileSub(null);
                          }}
                          className="block px-3 py-2 text-sm text-foreground/80 hover:text-tertiary hover:bg-[#e9c590]/20 rounded-md"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
