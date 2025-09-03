import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { Toast } from './Toast';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_k7vkq4b', // Replace with your EmailJS service ID
        'template_57op287', // Replace with your EmailJS template ID
        form.current,
        'u7qbbQxNSSqzgO5HE' // Replace with your EmailJS public key
      );

      setToastMessage('Message sent successfully!');
      setShowToast(true);
      form.current.reset();
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
      
      <form ref={form} onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
        <div className="space-y-2">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#151030] rounded-lg border border-[#915EFF]/20 focus:border-[#915EFF] text-white"
            required
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 bg-[#151030] rounded-lg border border-[#915EFF]/20 focus:border-[#915EFF] text-white"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 bg-[#151030] rounded-lg border border-[#915EFF]/20 focus:border-[#915EFF] text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full p-3 bg-[#151030] rounded-lg border border-[#915EFF]/20 focus:border-[#915EFF] text-white resize-none"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-[#915EFF] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#7f4fff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send'}
          <Send className="w-4 h-4" />
        </button>
      </form>
    </>
  );
};