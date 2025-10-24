import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Loader2 } from 'lucide-react';

export default function LeadForm({ variant = 'default' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    projectType: 'Full Interiors'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'leads_hyderabad'), {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'landing_page'
      });

      setShowThankYou(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: 'Hyderabad',
        projectType: 'Full Interiors'
      });

      setTimeout(() => setShowThankYou(false), 8000);
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <div className={`${variant === 'compact' ? 'p-6' : 'p-8'} bg-white rounded-2xl shadow-2xl border border-gray-100`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">Our design consultant will contact you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${variant === 'compact' ? 'p-6' : 'p-8'} bg-white rounded-2xl shadow-2xl border border-gray-100`}>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94C50] focus:ring-2 focus:ring-[#D94C50]/20 outline-none transition-all"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94C50] focus:ring-2 focus:ring-[#D94C50]/20 outline-none transition-all"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94C50] focus:ring-2 focus:ring-[#D94C50]/20 outline-none transition-all"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94C50] focus:ring-2 focus:ring-[#D94C50]/20 outline-none transition-all"
            disabled={isSubmitting}
          >
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Pune">Pune</option>
          </select>
        </div>

        <div>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D94C50] focus:ring-2 focus:ring-[#D94C50]/20 outline-none transition-all"
            disabled={isSubmitting}
          >
            <option value="Full Interiors">Full Interiors</option>
            <option value="New Home">New Home</option>
            <option value="Renovation">Renovation</option>
            <option value="Modular Kitchen">Modular Kitchen</option>
          </select>
        </div>

        {error && (
          <div className="text-[#D94C50] text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#D94C50] text-white py-4 rounded-lg font-semibold hover:bg-[#c43d41] transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Get Free Quote'
          )}
        </button>
      </div>
    </form>
  );
}
