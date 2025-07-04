import React from 'react';
import { Trophy, Medal, Star, Target, Code, Zap } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'ECPC 2024 Finals',
      achievement: 'Ranked 51st among 397 teams (top 13%)',
      description: "Egypt's premier competitive programming contest finals",
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-yellow-400 to-orange-500',
      category: 'Competition',
      year: '2024'
    },
    {
      title: 'ECPC 2024 Qualifications',
      achievement: 'Secured 29th position out of 447 teams (top 7%)',
      description: 'Outstanding performance in national qualifications',
      icon: <Medal className="w-8 h-8" />,
      color: 'from-blue-400 to-purple-600',
      category: 'Competition',
      year: '2024'
    },
    {
      title: 'ECPC 2023 Qualifications',
      achievement: 'Achieved 22nd place among 235 teams (top 10%)',
      description: 'Consistent high performance in competitive programming',
      icon: <Star className="w-8 h-8" />,
      color: 'from-purple-400 to-pink-600',
      category: 'Competition',
      year: '2023'
    },
    {
      title: 'ECPC 2022 Qualifications',
      achievement: 'Placed 24th out of 237 teams (top 11%)',
      description: 'Strong foundation in competitive programming',
      icon: <Target className="w-8 h-8" />,
      color: 'from-teal-400 to-blue-600',
      category: 'Competition',
      year: '2022'
    },
    {
      title: 'Programming Warfare 2023',
      achievement: 'Ranked 19th among 150 teams',
      description: "Upper Egypt's regional programming competition",
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-400 to-teal-600',
      category: 'Regional',
      year: '2023'
    },
    {
      title: 'Programming Mastery',
      achievement: 'Solved 3000+ programming challenges',
      description: 'Across various platforms (Codeforces, LeetCode, HackerRank)',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-red-400 to-orange-600',
      category: 'Achievement',
      year: 'Ongoing'
    }
  ];

  const stats = [
    { number: '3000+', label: 'Problems Solved', color: 'text-blue-400' },
    { number: '4', label: 'ECPC Participations', color: 'text-purple-400' },
    { number: 'Top 13%', label: 'Best National Ranking', color: 'text-teal-400' },
    { number: '4+', label: 'Years of Programming', color: 'text-orange-400' }
  ];

  return (
    <section id="awards" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Awards & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${award.color}`}>
                    {award.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      {award.category}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {award.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{award.title}</h3>
                <p className="text-blue-400 font-semibold mb-4">{award.achievement}</p>
                <p className="text-gray-300 text-sm">{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Programming Highlights */}
        <div className="mt-16 bg-gray-900 p-8 rounded-xl border border-gray-700">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Competitive Programming Journey</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Achievements Timeline</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>2024: ECPC Finals - Top 13% nationally</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>2023: Consistent top 10% performance</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>2022: Started competitive programming journey</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  <span>Ongoing: 3000+ problems solved</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-teal-400 mb-4">Skills Developed</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Algorithmic Thinking',
                  'Problem Solving',
                  'Data Structures',
                  'Dynamic Programming',
                  'Graph Algorithms',
                  'Mathematical Reasoning',
                  'Time Complexity Analysis',
                  'Debugging Skills'
                ].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;