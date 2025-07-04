import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Information Technology Institute (ITI)',
      degree: '9-Month Diploma: Professional Training Program (PTP)',
      specialization: 'Professional Development & BI-infused CRM',
      period: 'Oct 2024 - Present',
      location: 'Egypt',
      status: 'In Progress',
      description: 'Intensive professional training program focusing on business intelligence and customer relationship management systems.',
      highlights: ['Business Intelligence', 'CRM Systems', 'Professional Development', 'Industry-Ready Skills']
    },
    {
      institution: 'Assiut University',
      degree: 'Bachelor of Computer Science',
      specialization: 'Faculty of Computer Science and Information Technology',
      period: 'Oct 2020 - Jul 2024',
      location: 'Assiut, Egypt',
      gpa: '2.93/4.0',
      status: 'Completed',
      description: 'Comprehensive computer science education with focus on software engineering, algorithms, and system design.',
      highlights: ['Software Engineering', 'Data Structures & Algorithms', 'Database Systems', 'Web Development']
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-800 group-hover:bg-purple-500 transition-colors duration-300"></div>

                  {/* Content */}
                  <div className="ml-20">
                    <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                          <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'In Progress' 
                            ? 'bg-teal-500/20 text-teal-400' 
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {edu.status}
                        </span>
                      </div>

                      <h4 className="text-xl font-semibold text-blue-400 mb-2">{edu.degree}</h4>
                      <p className="text-gray-300 mb-4">{edu.specialization}</p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center text-gray-400">
                            <Award className="w-4 h-4 mr-2" />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 mb-6">{edu.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;