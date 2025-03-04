import React from 'react';
import { Code, Server, Database, Layout, Smartphone, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  // Skill categories with their respective skills and proficiency levels
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: <Layout size={24} className="text-indigo-600" />,
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: <Server size={24} className="text-indigo-600" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'RESTful APIs', level: 85 }
      ]
    },
    {
      id: 3,
      title: 'Database',
      icon: <Database size={24} className="text-indigo-600" />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Firebase', level: 75 },
        { name: 'Redis', level: 65 }
      ]
    },
    {
      id: 4,
      title: 'Other Skills',
      icon: <Code size={24} className="text-indigo-600" />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Testing', level: 80 }
      ]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels in various technologies and tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map(category => (
            <div key={category.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-2">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-indigo-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Responsive Design', 'UI/UX Design', 'Agile/Scrum', 'Problem Solving', 'Team Leadership', 
              'Communication', 'Project Management', 'SEO', 'Performance Optimization', 'Accessibility'].map((skill, index) => (
              <span 
                key={index} 
                className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;