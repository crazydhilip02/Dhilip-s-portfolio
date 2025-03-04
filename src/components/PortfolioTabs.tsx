import { useState } from "react";
import { FaLaptopCode, FaCertificate, FaCogs } from "react-icons/fa";
import { Button } from "../components/ui/button";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certifications";
import TechStack from "../pages/TechStack";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for the sections array
type Section = {
  name: string;
  icon: React.ElementType;
};

const sections: Section[] = [
  { name: "Projects", icon: FaLaptopCode },
  { name: "Certificates", icon: FaCertificate },
  { name: "Tech Stack", icon: FaCogs },
];

const PortfolioTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Projects");

  return (
    <div className="w-full min-h-screen bg-white text-black p-6 md:p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-4">
        Portfolio 
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Explore my journey through projects, certifications, and technical expertise.
      </p>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
        {sections.map((section) => {
          const IconComponent = section.icon;
          const isActive = activeTab === section.name;

          return (
            <Button
              key={section.name}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg flex items-center gap-2 md:gap-3 transition-all shadow-md border-2 ${
                isActive ? "bg-indigo-600 text-white border-transparent" : "bg-white text-indigo-600 hover:bg-indigo-100 border-indigo-400"
              }`}
              onClick={() => setActiveTab(section.name)}
            >
              <IconComponent size={20} className={isActive ? "text-white" : "text-indigo-600"} />
              <span className={isActive ? "text-white" : "text-indigo-600"}>{section.name}</span>
            </Button>
          );
        })}
      </div>

      {/* Content Section with Animation */}
      <div className="flex flex-wrap justify-center gap-8">
        <AnimatePresence mode="wait">
          {activeTab === "Projects" && (
            <motion.div
              key="Projects"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Projects />
            </motion.div>
          )}
          {activeTab === "Certificates" && (
            <motion.div
              key="Certificates"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Certificates />
            </motion.div>
          )}
          {activeTab === "Tech Stack" && (
            <motion.div
              key="Tech Stack"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <TechStack />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioTabs;
