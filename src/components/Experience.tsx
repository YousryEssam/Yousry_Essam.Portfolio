import React from 'react';
import { Briefcase, Calendar, MapPin, Database, FileText, Clock } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Internship',
      company: 'Petra Software Industries',
      period: 'Jul 2023 - Aug 2023',
      location: 'Assiut, Egypt',
      type: 'Internship',
      description: 'Gained hands-on experience in database management and development during an intensive summer internship program.',
      responsibilities: [
        'Designed and managed databases using MySQL for real-world project implementations',
        'Wrote efficient, high-quality SQL queries to support diverse application needs',
        'Handled daily database tasks, ensuring accurate and timely updates',
        'Collaborated with development teams to optimize database performance'
      ],
      skills: ['MySQL', 'Database Design', 'SQL Queries', 'Data Management', 'Performance Optimization'],
      icon: <Database className="w-6 h-6" />
    }
  ];

  const volunteerExperiences = [
    {
      title: 'Instructor & Mentor',
      organization: 'ICPC EELU Community',
      period: 'Mar 2024 - Jun 2025',
      location: 'Assiut, Egypt',
      type: 'Volunteer',
      description: 'Leading educational initiatives in competitive programming and mentoring students in advanced problem-solving techniques.',
      responsibilities: [
        'Led C++ and problem-solving sessions for aspiring competitive programmers',
        'Created comprehensive lesson plans and educational materials',
        'Mentored students on algorithms, debugging, and coding best practices',
        'Organized programming contests and workshops'
      ],
      skills: ['C++', 'Teaching', 'Mentoring', 'Algorithm Design', 'Problem Solving'],
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Mentor',
      organization: 'ICPC Assiut Community',
      period: 'Oct 2021 - Jun 2024',
      location: 'Assiut, Egypt',
      type: 'Volunteer',
      description: 'Provided guidance and support to fellow students in competitive programming, building a foundation for mentoring skills.',
      responsibilities: [
        'Guided peers in C++ programming and algorithmic thinking',
        'Offered support in debugging and problem-solving techniques',
        'Strengthened mentoring and communication skills through peer interaction',
        'Contributed to a collaborative learning environment'
      ],
      skills: ['C++', 'Peer Mentoring', 'Communication', 'Debugging', 'Team Collaboration'],
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const ExperienceCard = ({ exp, isVolunteer = false }: { exp: any, isVolunteer?: boolean }) => (
    <div className="group">
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            <div className={`p-3 rounded-lg mr-4 ${
              isVolunteer ? 'bg-gradient-to-r from-teal-500 to-green-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'
            }`}>
              {exp.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
              <p className="text-blue-400 font-semibold">{isVolunteer ? exp.organization : exp.company}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            exp.type === 'Internship' 
              ? 'bg-blue-500/20 text-blue-400' 
              : 'bg-teal-500/20 text-teal-400'
          }`}>
            {exp.type}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{exp.period}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{exp.location}</span>
          </div>
        </div>

        <p className="text-gray-300 mb-6">{exp.description}</p>

        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Key Responsibilities:</h4>
          <ul className="space-y-2">
            {exp.responsibilities.map((resp: string, idx: number) => (
              <li key={idx} className="flex items-start text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Skills Developed:</h4>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill: string, idx: number) => (
              <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-3xl font-bold text-white">Professional Experience</h3>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
        </div>

        {/* Volunteering Experience */}
        <div>
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-teal-400 mr-3" />
            <h3 className="text-3xl font-bold text-white">Volunteering Experience</h3>
          </div>
          <div className="space-y-8">
            {volunteerExperiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} isVolunteer={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;