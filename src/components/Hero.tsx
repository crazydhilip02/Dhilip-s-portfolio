import React, { useState, useEffect } from 'react';
import profile from "../assets/profileimages/profile.jpg";
import BlurText from "../components/ui/BlurText";
import SplitText from "../components/ui/SplitText";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } // Adjust this value based on when you want the animation to trigger
    );

    const section = document.getElementById('hero-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div id="hero-section" className="relative min-h-screen w-full flex items-center justify-center bg-indigo-600 text-white">
      <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center">
        
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {isVisible && ( 
              <BlurText
                text="Hi, I'm Dhilip Kumar"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-yellow-300"
              />
            )}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 ">
            {isVisible && (
              <SplitText 
                text="MERN Stack Developer" 
                delay={150} 
                stagger={0.1} 
                direction="top"
              />
            )}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
            I build exceptional digital experiences with modern technologies.
            Passionate about creating intuitive and high-performance applications.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Contact Button */}
            <a
              href="#contact"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>

            {/* View Portfolio Button (Scroll to Portfolio Section) */}
            <a
              href="#portfolio"  // Ensure your Portfolio section has id="portfolio"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-md font-medium transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('PortfolioTabs')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
