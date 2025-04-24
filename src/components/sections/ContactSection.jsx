import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ 
        submitting: false, 
        submitted: true, 
        error: null 
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-amber-50/30 to-green-50/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">Contact Us</h2>
          <p className="text-lg text-brown-800 max-w-3xl mx-auto">
            Have questions or want to get involved? Reach out to our team.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="flex-1">
            <div className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl p-6 md:p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-brown-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-800 text-white p-3 rounded-lg shadow-md mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-900">Email</h4>
                    <p className="text-brown-800">info@ankolecattle.org</p>
                    <p className="text-brown-700 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-700 text-white p-3 rounded-lg shadow-md mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-900">Phone</h4>
                    <p className="text-brown-800">+256 700 123 456</p>
                    <p className="text-brown-700 text-sm mt-1">Monday-Friday, 9am-5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brown-700 text-white p-3 rounded-lg shadow-md mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-900">Location</h4>
                    <p className="text-brown-800">Mbarara District, Western Region</p>
                    <p className="text-brown-700 text-sm mt-1">Visit our conservation center</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-amber-700/10 backdrop-blur-sm rounded-lg">
                <h4 className="font-bold text-amber-900 mb-2">Visiting Hours</h4>
                <p className="text-brown-800">
                  Our conservation center is open to visitors Tuesday through Saturday, 10am to 4pm. 
                  Guided tours are available with prior booking.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="flex-1">
            <div className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brown-900 mb-6">Send a Message</h3>
              
              {formStatus.submitted ? (
                <div className="bg-green-100 border border-green-300 text-green-800 rounded-lg p-4 mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We've received your inquiry and will get back to you soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-brown-800 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:border-green-500 focus:ring focus:ring-green-200 transition bg-white/70 backdrop-blur-sm"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-brown-800 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:border-green-500 focus:ring focus:ring-green-200 transition bg-white/70 backdrop-blur-sm"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-brown-800 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:border-green-500 focus:ring focus:ring-green-200 transition bg-white/70 backdrop-blur-sm"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-brown-800 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:border-green-500 focus:ring focus:ring-green-200 transition bg-white/70 backdrop-blur-sm"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`w-full bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all ${formStatus.submitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:scale-[1.02]'}`}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 