import React from "react";
import dhilip2 from "../assets/profileimages/dhiliip2.jpg";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Profile Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={dhilip2}
              alt="Profile"
              className="rounded-lg shadow-lg w-3/4 sm:w-2/3 md:w-[60%] max-h-[70%] object-cover md:object-contain"
              onError={(e) => {
                e.currentTarget.src = "/fallback-image.jpg";
              }}
            />
          </div>

          {/* About Text Section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              MERN Stack & JAVA Developer
            </h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate MERN stack developer with expertise in
              building dynamic and user-friendly web applications.
              Skilled in MongoDB, Express.js, React.js, and Node.js,
              I specialize in crafting scalable and efficient
              full-stack solutions. With a strong foundation in
              JavaScript, Tailwind CSS, HTML, and CSS, I focus on
              creating seamless and responsive user experiences.
              My problem-solving mindset and understanding of
              algorithms and data structures help me tackle
              complex challenges effectively.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar size={20} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Birthday</p>
                  <p className="font-medium">3 July 2004</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">City</p>
                  <p className="font-medium">Avadi, Chennai</p>
                </div>
              </div>
              <div className="flex items-center">
                <Briefcase size={20} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Freelance</p>
                  <p className="font-medium">Available</p>
                </div>
              </div>
              <div className="flex items-center">
                <GraduationCap size={20} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Degree</p>
                  <p className="font-medium">B.Tech Information Technology</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">dhilip637410@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-indigo-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">6374106956</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
