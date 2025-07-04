import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Smartphone, Globe, ShoppingCart, User, CheckSquare, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Shahrazad',
      subtitle: 'Graduation Project - A+ Grade',
      description: 'Built a cross-platform app that converts stories into expressive audio using deep learning and generative AI with emotional TTS, voice customization, and Arabic/English support.',
      technologies: ['Flutter', 'FastAPI', 'Python', 'NLP', 'TTS APIs', 'Deep Learning'],
      icon: <Smartphone className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-purple-600',
      highlights: ['AI-powered TTS', 'Cross-platform', 'Multilingual Support', 'Voice Customization']
    },
    {
      title: 'BIOO',
      subtitle: 'Social Media Web Application',
      description: 'Developed a full-featured social platform with real-time messaging, post sharing, social interactions, and responsive design.',
      technologies: ['ASP.NET MVC Core', 'SignalR', 'EF Core', 'SQL Server', 'JavaScript', 'Bootstrap'],
      icon: <Globe className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-teal-500 to-blue-600',
      highlights: ['Real-time Messaging', 'Social Features', 'Responsive Design', 'User Authentication']
    },
    {
      title: 'H-Catch',
      subtitle: 'E-commerce Frontend',
      description: 'Developed a responsive e-commerce frontend with smooth user interactions using modern web technologies.',
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap', 'AJAX'],
      icon: <ShoppingCart className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-600',
      highlights: ['Responsive Design', 'Modern UI/UX', 'Interactive Elements', 'Cross-browser Compatible']
    },
    {
      title: 'Personal Portfolio',
      subtitle: 'Professional Website',
      description: 'Built a responsive, accessible portfolio site to showcase projects and skills, with a focus on clean design and performance. Deployed via GitHub Pages.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      icon: <User className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-600',
      highlights: ['Clean Design', 'Performance Optimized', 'Accessibility', 'GitHub Pages']
    },
    {
      title: 'Todo App',
      subtitle: 'Task Management Application',
      description: 'Built a responsive task management app with add, filter, and delete features, plus light/dark mode for better UX.',
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6)'],
      icon: <CheckSquare className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-teal-600',
      highlights: ['Task Management', 'Dark/Light Mode', 'Local Storage', 'Responsive Design']
    },
    {
      title: 'Endless Runner Game',
      subtitle: 'Unity Game Development',
      description: 'Created a Unity-based endless runner game with lane-switching, obstacles, collectibles, power-ups, and a simple UI with sound and animation.',
      technologies: ['Unity', 'C#'],
      icon: <Gamepad2 className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-500 to-orange-600',
      highlights: ['Game Mechanics', 'Unity Engine', 'Animation System', 'Sound Effects']
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Project Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Project Image */}
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                            {project.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-blue-400 font-semibold">{project.subtitle}</p>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                              <span className="text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                          <ExternalLink size={20} />
                          Live Demo
                        </button>
                        <button className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                          <Github size={20} />
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;