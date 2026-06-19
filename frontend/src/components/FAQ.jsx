import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the minimum age required?",
      answer: "Children between 8 and 14 years can participate. The curriculum is tailored specifically for this age group to ensure maximum engagement and understanding."
    },
    {
      question: "Do students need prior coding experience?",
      answer: "No prior experience is required. We start from the absolute basics and gradually move to more advanced concepts. All they need is curiosity!"
    },
    {
      question: "Will students receive a certificate?",
      answer: "Yes, a certificate of completion will be provided after successfully finishing the workshop and submitting the final project."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-3xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">Everything you need to know about the workshop.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-primary bg-white shadow-md' : 'border-gray-200 bg-gray-50 hover:bg-white'}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full p-6 text-left"
            >
              <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-primary/10 text-primary' : 'bg-gray-200 text-gray-500'}`}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
