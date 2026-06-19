import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyJoin = () => {
  const benefits = [
    "Live Instructor Support",
    "Hands-On Projects",
    "Interactive Learning",
    "Certificate of Completion",
    "Small Batch Size",
    "Industry-Relevant Skills"
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-indigo-900 to-primary-dark rounded-[3rem] px-8 md:px-16 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold mb-4">Why Join This Workshop?</h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            We don't just teach code; we build confidence. Our unique approach ensures 
            that every child gets the attention they need to grasp complex concepts easily.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="text-secondary w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-indigo-50">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="aspect-video bg-indigo-950/50 rounded-2xl flex items-center justify-center border border-white/10 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kids learning robotics" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center z-20 group-hover:scale-110 transition-transform shadow-2xl">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
