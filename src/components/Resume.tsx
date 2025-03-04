import React from 'react';
import { Download, GraduationCap } from 'lucide-react';
import RESUMEDHILIP from '../assets/Dhilip- Resume.png'

const Resume: React.FC = () => {
  const resumeDownloadLink = RESUMEDHILIP;
  const basicEducation = [
    {
      id: 1,
      degree: '12th',
      institution: 'SM Nagar Govt Higher Secondary School',
      period: '2019 - 2021',
      description: 'I chose Computer Science in 11th and 12th and secured 74% overall.'
    },
    {
      id: 2,
      degree: '10th',
      institution: 'Govt Higher Secondary School Avadi',
      period: '2019',
      description: 'I secured 71% overall in all subjects.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Information Technology',
      institution: 'Kings Engineering College',
      period: '2021 - 2025',
      description: 'These four years have equipped me with the skills, knowledge, and mindset to take on real-world challenges and excel in the tech industry.'
    },
    
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Resume</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Resume Download Button */}
        <div className="flex justify-center mb-10">
          <a 
            href={resumeDownloadLink} 
            download="Dhiliip_Resume.png" 
            className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          

          {/* Higher Education Section */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap size={24} className="text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">Higher Education</h3>
            </div>

            <div className="space-y-6">
              {education.map(edu => (
                <div key={edu.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                    <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">{edu.period}</span>
                  </div>
                  <p className="text-indigo-600 mb-3">{edu.institution}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Basic Education Section */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap size={24} className="text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800">Basic Education</h3>
            </div>

            <div className="space-y-6">
              {basicEducation.map(edu => (
                <div key={edu.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                    <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">{edu.period}</span>
                  </div>
                  <p className="text-indigo-600 mb-3">{edu.institution}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
