import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Wrench, Server, Layers } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'ASP.NET Core', level: 90 },
        { name: '.NET Framework', level: 85 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'Entity Framework Core', level: 85 },
        { name: 'SignalR', level: 80 }
      ]
    },
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'C#', level: 95 },
        { name: 'C++', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'SQL', level: 88 }
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'Microsoft SQL Server', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'Blazor', level: 75 },
        { name: 'HTML5', level: 92 },
        { name: 'CSS3', level: 88 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Development',
      icon: <Layers className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'OOP', level: 95 },
        { name: 'SOLID Principles', level: 88 },
        { name: 'Clean Architecture', level: 82 },
        { name: 'Design Patterns', level: 85 },
        { name: 'Unit Testing', level: 78 }
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Visual Studio', level: 92 },
        { name: 'VS Code', level: 90 },
        { name: 'Git & GitHub', level: 88 },
        { name: 'Postman', level: 85 },
        { name: 'Swagger', level: 80 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;