import React from 'react';
import { User, Code, Brain, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code className="w-6 h-6" />, name: 'Technical Documentation', description: 'Clear, comprehensive documentation for complex systems' },
    { icon: <Users className="w-6 h-6" />, name: 'Cross-functional Collaboration', description: 'Effective teamwork across diverse technical teams' },
    { icon: <Brain className="w-6 h-6" />, name: 'Problem Solving', description: 'Critical thinking and analytical reasoning for debugging' },
    { icon: <Zap className="w-6 h-6" />, name: 'Adaptability', description: 'Quick learning of new technologies and working under pressure' },
    { icon: <Target className="w-6 h-6" />, name: 'Focus on Quality', description: 'Writing clean, maintainable, and scalable code' },
    { icon: <User className="w-6 h-6" />, name: 'Communication', description: 'Clear communication of technical concepts to diverse audiences' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <User size={120} className="text-gray-400" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                <Code size={24} className="text-white" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Passionate Software Engineer</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a dedicated Software Engineer with a passion for creating innovative solutions and solving complex problems. 
                With expertise in full-stack development using .NET technologies and a strong foundation in competitive programming, 
                I bring both technical depth and creative problem-solving to every project.
              </p>
            </div>

            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in software development has been driven by curiosity and a commitment to continuous learning. 
                Having solved over 3000 programming challenges, I've developed a keen eye for optimization and elegant solutions. 
                I thrive in collaborative environments where I can contribute to meaningful projects while growing professionally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="text-teal-400 font-semibold mb-2">3000+</h4>
                <p className="text-gray-300">Problems Solved</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="text-blue-400 font-semibold mb-2">4+ Years</h4>
                <p className="text-gray-300">Programming Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Core Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 mr-3">{skill.icon}</div>
                    <h4 className="text-white font-semibold">{skill.name}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;