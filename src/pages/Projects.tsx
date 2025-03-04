import React, { useState } from 'react';
import porject1 from '../assets/projects/project1.png'
import { ExternalLink, Github, Code, Layers, Monitor } from 'lucide-react';

const Projects: React.FC = () => {
  // Filter categories
  const categories = ['All', 'Web App', 'Mobile', 'UI/UX', 'Backend'];
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web App',
      image: porject1 ,
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
      technologies: ['React', 'Node.js', 'javascript', 'Tailwind'],
      liveUrl: 'https://shoespot-a0a20.web.app',
      githubUrl: 'https://github.com/crazydhilip02/ShoeSpot.git'
    },
    // {
    //   id: 2,
    //   title: 'Task Management App',
    //   category: 'Web App',
    //   image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    //   description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
    //   technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/example/project'
    // },
    // {
    //   id: 3,
    //   title: 'Fitness Tracker Mobile App',
    //   category: 'Mobile',
    //   image: 'https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   description: 'A mobile application for tracking workouts, nutrition, and fitness progress with data visualization.',
    //   technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/example/project'
    // },
    // {
    //   id: 4,
    //   title: 'Real Estate Listing Platform',
    //   category: 'Web App',
    //   image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    //   description: 'A platform for listing and searching real estate properties with advanced filtering and map integration.',
    //   technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/example/project'
    // },
    // {
    //   id: 5,
    //   title: 'Weather Dashboard',
    //   category: 'UI/UX',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   description: 'A weather dashboard with beautiful visualizations and forecasts for multiple locations.',
    //   technologies: ['React', 'D3.js', 'OpenWeather API', 'Styled Components'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/example/project'
    // },
    // {
    //   id: 6,
    //   title: 'API Gateway Service',
    //   category: 'Backend',
    //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80',
    //   description: 'A microservice API gateway with authentication, rate limiting, and request routing capabilities.',
    //   technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/example/project'
    // }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2> */}
          {/* <div className="w-20 h-1 bg-indigo-600 mx-auto"></div> */}
          {/* <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A selection of my recent projects showcasing my skills and experience.
          </p> */}
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    <Monitor size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;