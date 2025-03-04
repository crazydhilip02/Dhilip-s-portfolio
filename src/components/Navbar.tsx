import React, { useState, useEffect } from "react";
import { Menu, X, User, FileText, Briefcase, Award, Mail, Folder } from "lucide-react";
import githubIcon from "../assets/icons/github.png";
import instagramIcon from "../assets/icons/instagram.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import mailIcon from "../assets/icons/mail.png";
import whatsappIcon from "../assets/icons/whatsapp.png";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1500); // Adjust breakpoint

  const navItems = [
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "resume", label: "Resume", icon: <FileText size={20} /> },
    { id: "PortfolioTabs", label: "Portfolio", icon: <Folder size={20} /> }, // Portfolio added here
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  const socialLinks = [
    { href: "https://linkedin.com/in/dhilip637410", icon: linkedinIcon, alt: "LinkedIn" },
    { href: "https://github.com/dhilip637410", icon: githubIcon, alt: "GitHub" },
    { href: "mailto:dhilip637410@gmail.com", icon: mailIcon, alt: "Mail" },
    { href: "https://wa.me/6374106956", icon: whatsappIcon, alt: "WhatsApp" },
    { href: "https://instagram.com/dhilip637410", icon: instagramIcon, alt: "Instagram" },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1500);
      if (window.innerWidth >= 1500) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full flex items-center justify-between px-6 sm:px-8 lg:px-10 h-16">
        
        {/* Portfolio Logo - Left Corner */}
        <button onClick={() => handleNavClick("home")} className="text-2xl font-bold text-indigo-600">
          Dhilip's-Portfolio
        </button>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Social Links - Right Corner */}
        {!isMobile && (
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.alt} className="w-8 h-8 hover:opacity-75 transition-opacity" />
              </a>
            ))}
          </div>
        )}

        {/* Mobile Menu Button (Visible when screen < 1500px) */}
        {isMobile && (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="bg-white shadow-lg px-6 pt-3 pb-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center w-full px-4 py-3 rounded-md text-base font-medium transition-colors ${
                activeSection === item.id ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}

          {/* Social Links for Mobile */}
          <div className="flex justify-center space-x-7 mt-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.alt} className="w-10 h-10 hover:opacity-75 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
