import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Problem Solver',
    'Competitive Programmer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setDisplayText(
        isDeleting 
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Yousry Essam Ayoub
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-8 h-12">
              <span className="text-teal-400">{displayText}</span>
              <span className="animate-pulse text-blue-400">|</span>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-300">
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Software Engineer with strong problem-solving skills and a solid grasp of software engineering principles and competitive programming. 
              Experienced in developing full-stack applications with .NET technologies, with knowledge in solving complex problems, and solved more than +3000 problems on various online judges.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-600">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Projects
              </button>
              <button className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-900">
            <div className="flex justify-center space-x-6 mb-16">
              <a href="https://github.com/YousryEssam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yousryessam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:yousry.essam.ayoub@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="tel:+201289529751" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;