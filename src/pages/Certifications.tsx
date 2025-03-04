import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';
import nptelCert from '../assets/certificates/NPTEL.png';
import corejava from '../assets/certificates/core java.png';
import github from '../assets/certificates/Git@GIthub.jpg'
const certifications = [
  {
    id: 1,
    title: 'Data Structures and Algorithms in Java',
    issuer: 'NPTEL IIT Kanpur',
    date: 'Jul - Oct 2024',
    description: 'Certified in NPTEL Data Structures and Algorithms, showcasing proficiency in problem-solving, data structures, and algorithmic techniques.',
    image: nptelCert
  },
  {
    id: 2,
    title: 'Core java ',
    issuer: 'Infosys Spring Board',
    date: 'August 6 2024',
    description: 'Core Java (Infosys Springboard): In-depth training on Java fundamentals, OOP concepts, and hands-on coding exercises.',
    image: corejava
  },
  {
    id: 2,
    title: 'Git & GitHUB ',
    issuer: 'Udemy',
    date: 'September 4 2024',
    description: 'Git & GitHub Masterclass (Udemy): Comprehensive course covering version control, branching, merging, and collaboration using Git & GitHub.',
    image: github
  }
];

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and knowledge in various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(cert => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:transform hover:scale-105">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setSelectedCert(cert.image)}
              />
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <Award size={24} className="text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{cert.title}</h3>
                    <p className="text-indigo-600 text-sm mb-2">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{cert.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                {/* <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  <span>View Credential</span>
                  <ExternalLink size={14} className="ml-1" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={() => setSelectedCert(null)}
            >
              <X size={32} />
            </button>
            <img src={selectedCert} alt="Certificate" className="w-full max-h-[80vh] object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
