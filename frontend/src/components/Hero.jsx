import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-10 pb-20 lg:pt-15 lg:pb-28 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary-dark font-medium text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Summer 2026 Admissions Open</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span> With AI & Robotics
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Empower your child to become a creator of technology, not just a consumer. 
            Join our 4-week interactive workshop designed specifically for young minds to 
            master the basics of Artificial Intelligence and Robotics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#enroll"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/30"
            >
              Enroll Now <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#curriculum"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-gray-700 font-semibold text-lg border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all"
            >
              View Curriculum
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl" />
          <div className="relative glass-effect rounded-[2.5rem] p-8 border-4 border-white">
            <div className="aspect-square bg-gradient-to-br from-indigo-100 to-cyan-50 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />
              <Bot className="w-48 h-48 text-primary animate-float relative z-10" />
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[150%] h-[150%] border border-dashed border-primary/20 rounded-full"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Next Batch Starts</p>
                <p className="font-bold text-gray-900">15 July 2026</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
