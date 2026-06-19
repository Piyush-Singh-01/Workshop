import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { Loader2, Send } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
});

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast.success(result.message || 'Registration submitted successfully!');
        reset();
      } else {
        toast.error(result.message || 'Failed to submit registration');
      }
    } catch (error) {
      toast.error('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enroll" className="py-12">
      <div className="max-w-4xl mx-auto glass-effect rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">Ready to start the journey?</h2>
            <p className="text-gray-600">
              Secure a spot for your child today. Seats are limited to ensure personalized attention.
            </p>
            <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl">
              <p className="text-sm text-indigo-800 font-semibold mb-1">Batch Starting:</p>
              <p className="text-2xl font-bold text-primary">15 July 2026</p>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  {...register('name')}
                  id="name"
                  type="text"
                  placeholder="Parent or Child's Name"
                  className={`w-full px-5 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-primary'}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className={`w-full px-5 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary/20 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-primary'}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  {...register('phone')}
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  className={`w-full px-5 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary/20 ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-primary'}`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-primary/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Enroll Now <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
