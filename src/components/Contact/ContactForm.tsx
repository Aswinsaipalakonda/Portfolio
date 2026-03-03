import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Mail, User, MessageSquare, Tag } from 'lucide-react';
import { Toast } from './Toast';
import emailjs from '@emailjs/browser';

type FormData = {
  user_email: string;
  user_name: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Create a form element dynamically for emailjs
      const formElement = document.createElement('form');
      Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.name = key;
        input.value = value;
        formElement.appendChild(input);
      });

      await emailjs.send(
        'service_k7vkq4b', 
        'template_57op287', 
        data as any,
        'u7qbbQxNSSqzgO5HE'
      );

      setToastMessage('Message sent successfully!');
      setShowToast(true);
      reset();
    } catch (error) {
      setToastMessage('Failed to send message. Please try again.');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast 
        message={toastMessage} 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
      
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#915EFF]/50" />
            <input
              {...register('user_name', { required: 'Name is required' })}
              type="text"
              placeholder="Your Name"
              className={`w-full pl-10 pr-4 py-3 bg-[#151030] rounded-lg border ${
                errors.user_name ? 'border-red-500' : 'border-[#915EFF]/20'
              } focus:border-[#915EFF] text-white outline-hidden transition-all`}
            />
            {errors.user_name && <p className="text-red-500 text-xs mt-1">{errors.user_name.message}</p>}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#915EFF]/50" />
            <input
              {...register('user_email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              placeholder="Your Email"
              className={`w-full pl-10 pr-4 py-3 bg-[#151030] rounded-lg border ${
                errors.user_email ? 'border-red-500' : 'border-[#915EFF]/20'
              } focus:border-[#915EFF] text-white outline-hidden transition-all`}
            />
            {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email.message}</p>}
          </div>

          <div className="relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#915EFF]/50" />
            <input
              {...register('subject', { required: 'Subject is required' })}
              type="text"
              placeholder="Subject"
              className={`w-full pl-10 pr-4 py-3 bg-[#151030] rounded-lg border ${
                errors.subject ? 'border-red-500' : 'border-[#915EFF]/20'
              } focus:border-[#915EFF] text-white outline-hidden transition-all`}
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#915EFF]/50" />
            <textarea
              {...register('message', { required: 'Message is required' })}
              placeholder="Your Message"
              rows={4}
              className={`w-full pl-10 pr-4 py-3 bg-[#151030] rounded-lg border ${
                errors.message ? 'border-red-500' : 'border-[#915EFF]/20'
              } focus:border-[#915EFF] text-white outline-hidden resize-none transition-all`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#915EFF] text-white font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-[#7f4fff] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(145,94,255,0.3)]"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send className="w-5 h-5" />
        </button>
      </form>
    </>
  );
};