import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, Code } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/YousryEssam',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/yousryessam',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:yousry.essam.ayoub@gmail.com',
      label: 'Email'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      url: 'tel:+201289529751',
      label: 'Phone'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Yousry Essam</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Software Engineer passionate about creating innovative solutions and solving complex problems. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Awards', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 mb-6">
              <p className="text-gray-400">yousry.essam.ayoub@gmail.com</p>
              <p className="text-gray-400">+20 1289 529 751</p>
              <p className="text-gray-400">Assiut, Egypt</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 mx-2" />
            <span>by Yousry Essam</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">© 2024 All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;