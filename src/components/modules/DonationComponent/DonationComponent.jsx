import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DonationComponent = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const predefinedAmounts = [25, 50, 100, 250];

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setDonationAmount('');
        setCustomAmount('');
        setDonorName('');
        setEmail('');
        setMessage('');
      }, 5000);
    }, 2000);
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-amber-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-brown-800 mb-4">Support Our Conservation Efforts</h2>
            <p className="text-lg text-green-800 max-w-2xl mx-auto">
              Your generous contributions help us preserve the Ankole cattle heritage and support local communities.
              Every donation makes a difference in our mission.
            </p>
          </motion.div>

          <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 md:p-12">
            {isSuccess ? (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Thank You for Your Donation!</h3>
                <p className="text-green-700">
                  Your support is greatly appreciated and will help us make a significant impact in our conservation efforts.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Donation Amounts */}
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-green-800">Select Donation Amount</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {predefinedAmounts.map(amount => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                          donationAmount === amount
                            ? 'bg-green-700 text-white shadow-md'
                            : 'bg-white bg-opacity-50 border border-green-200 text-green-800 hover:bg-green-100'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-lg font-medium text-green-800">Custom Amount</label>
                    <div className="mt-2 relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter custom amount"
                        className="pl-8 w-full py-3 px-4 rounded-lg bg-white bg-opacity-70 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-green-800">Your Information</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Your Name"
                      required
                      className="w-full py-3 px-4 rounded-lg bg-white bg-opacity-70 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                      className="w-full py-3 px-4 rounded-lg bg-white bg-opacity-70 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Leave a message (optional)"
                    rows={4}
                    className="w-full py-3 px-4 rounded-lg bg-white bg-opacity-70 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || (!donationAmount && !customAmount)}
                    className={`w-full py-4 px-8 rounded-lg text-white font-bold text-lg transition-all duration-300 ${
                      isSubmitting || (!donationAmount && !customAmount)
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      `Donate ${donationAmount ? (donationAmount === 'custom' ? `$${customAmount}` : `$${donationAmount}`) : ''}`
                    )}
                  </button>
                  
                  <p className="mt-4 text-sm text-center text-green-700">
                    Your donation is secure and encrypted. We never store credit card information.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Impact Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-green-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brown-800 mb-2">Conservation Programs</h3>
              <p className="text-green-800">
                Your donation helps fund breeding programs, habitat preservation, and genetic research to ensure the survival of Ankole cattle.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-green-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brown-800 mb-2">Community Support</h3>
              <p className="text-green-800">
                We work with local communities to integrate conservation with sustainable development, providing education and economic opportunities.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-green-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brown-800 mb-2">Cultural Preservation</h3>
              <p className="text-green-800">
                We document and preserve traditional knowledge, stories, and practices related to Ankole cattle for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationComponent; 