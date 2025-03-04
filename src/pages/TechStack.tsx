const TechStack = () => {
  const techStack = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "ReactJS" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "NodeJS" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "Firebase" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", name: "Material UI" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", name: "Vite" },
  ];
  
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-white">
      {techStack.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center justify-center  p-4 rounded-xl shadow-lg w-20 h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 border border-indigo-200">
          <img src={tech.icon} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          <p className="text-indigo-600 mt-2 text-xs md:text-sm font-semibold text-center">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;