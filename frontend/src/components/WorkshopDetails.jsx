import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Monitor, UserCheck, IndianRupee } from 'lucide-react';

const WorkshopDetails = () => {
  const details = [
    { icon: <UserCheck />, label: 'Age Group', value: '8–14 Years', color: 'bg-blue-100 text-blue-600' },
    { icon: <Clock />, label: 'Duration', value: '4 Weeks', color: 'bg-purple-100 text-purple-600' },
    { icon: <Monitor />, label: 'Mode', value: 'Online', color: 'bg-green-100 text-green-600' },
    { icon: <Calendar />, label: 'Start Date', value: '15 July 2026', color: 'bg-amber-100 text-amber-600' },
    { icon: <IndianRupee />, label: 'Fee', value: '₹2,999', color: 'bg-rose-100 text-rose-600' },
  ];

  return (
    <section className="relative z-10" id="details">
      <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl border-white/50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Workshop Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${item.color}`}>
                {React.cloneElement(item.icon, { className: 'w-7 h-7' })}
              </div>
              <p className="text-sm text-gray-500 font-medium mb-1">{item.label}</p>
              <p className="font-bold text-gray-900">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
