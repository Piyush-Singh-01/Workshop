import React from 'react';
import { Toaster } from 'react-hot-toast';
import Hero from './components/Hero.jsx';
import WorkshopDetails from './components/WorkshopDetails.jsx';
import LearningOutcomes from './components/LearningOutcomes.jsx';
import WhyJoin from './components/WhyJoin.jsx';
import FAQ from './components/FAQ.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <Toaster position="top-right" />
      
      {/* Navigation - Simple Sticky Header */}
      <nav className="sticky top-0 z-50 glass-effect py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
            K
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-800">Kidrove</span>
        </div>
        <a 
          href="#enroll" 
          className="px-5 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
        >
          Enroll Now
        </a>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <WhyJoin />
        <FAQ />
        <RegistrationForm />
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <p className="mb-2">© 2026 Kidrove. All rights reserved.</p>
        <p className="text-sm text-gray-500">Inspiring the next generation of innovators.</p>
      </footer>
    </div>
  );
}

export default App;
