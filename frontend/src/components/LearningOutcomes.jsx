import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Wrench, Lightbulb, Code, Palette } from 'lucide-react';

const LearningOutcomes = () => {
  const outcomes = [
    {
      title: 'Understand AI Fundamentals',
      description: 'Learn the core concepts of Artificial Intelligence and how machines learn in a kid-friendly way.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Learn Robotics Basics',
      description: 'Discover how robots interact with the world using sensors and actuators.',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Develop Logical Thinking',
      description: 'Enhance problem-solving abilities through structured algorithmic thinking games.',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-400'
    },
    {
      title: 'Build Hands-On Projects',
      description: 'Create real working projects that kids can show off to friends and family.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-400'
    },
    {
      title: 'Improve Creativity',
      description: 'Encourage out-of-the-box thinking by designing unique tech solutions.',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-rose-500 to-red-400'
    }
  ];

  return (
    <section id="curriculum" className="pt-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Will They Learn?</h2>
        <p className="text-lg text-gray-600">Our curriculum is designed to be engaging, practical, and fun. No boring lectures here!</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {outcomes.map((outcome, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${outcome.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
            
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${outcome.color} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
              {outcome.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">{outcome.title}</h3>
            <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearningOutcomes;
