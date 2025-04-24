import React, { useState, useContext } from 'react';
import { BookingContext } from '@/context/BookingContext';
import GlassPanel from '@/components/ui/GlassPanel/GlassPanel';
import Button from '@/components/ui/Button/Button';
import { DatePicker, Select, Input } from '@/components/ui/Form';

const BookingForm = () => {
  const { bookingState, dispatch } = useContext(BookingContext);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Stepper progress calculation
  const progress = (currentStep / totalSteps) * 100;

  // Step handlers
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process booking
    dispatch({ type: 'SUBMIT_BOOKING' });
    // Navigate to confirmation page
    // navigate('/booking/confirmation');
  };

  // Available activities
  const activities = [
    { id: 'cow-milking', name: 'Cow Milking', price: 15 },
    { id: 'milk-churning', name: 'Milk Churning & Ghee Making', price: 20 },
    { id: 'cow-grazing', name: 'Cow Grazing Experience', price: 25 },
    { id: 'weaving', name: 'Weaving Milk Pot Covers', price: 15 },
    { id: 'recitation', name: 'Epic Poetic Recitation', price: 10 },
    { id: 'dancing', name: 'Cultural Dancing', price: 18 },
    { id: 'nature-walk', name: 'Nature Walk (12.7km Trail)', price: 30 },
  ];

  // Guest options
  const guestOptions = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} ${i === 0 ? 'Guest' : 'Guests'}`
  }));

  // Calculate total price
  const calculateTotal = () => {
    const basePrice = bookingState.selectedActivities.reduce(
      (total, activityId) => {
        const activity = activities.find(act => act.id === activityId);
        return total + (activity ? activity.price : 0);
      },
      0
    );
    return basePrice * bookingState.guests;
  };

  return (
    <GlassPanel
      variant="default"
      className="p-6 lg:p-8 w-full max-w-2xl mx-auto"
    >
      {/* Progress bar */}
      <div className="mb-8">
        <div className="relative pt-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-forest-green bg-forest-green/10">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-forest-green">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-forest-green/10">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-forest-green transition-all duration-500 ease-in-out"
            ></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Select Date and Activities */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-forest-green-dark">Choose Your Experience</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Visit Date</label>
                <DatePicker
                  value={bookingState.date}
                  onChange={(date) => dispatch({ type: 'SET_DATE', payload: date })}
                  minDate={new Date()}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                <Select
                  options={guestOptions}
                  value={bookingState.guests}
                  onChange={(value) => dispatch({ type: 'SET_GUESTS', payload: value })}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Activities</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className={`
                        p-3 rounded-lg border cursor-pointer transition-all
                        ${bookingState.selectedActivities.includes(activity.id)
                          ? 'border-forest-green bg-forest-green/10'
                          : 'border-gray-200 hover:border-forest-green hover:bg-forest-green/5'}
                      `}
                      onClick={() => {
                        if (bookingState.selectedActivities.includes(activity.id)) {
                          dispatch({
                            type: 'REMOVE_ACTIVITY',
                            payload: activity.id
                          });
                        } else {
                          dispatch({
                            type: 'ADD_ACTIVITY',
                            payload: activity.id
                          });
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{activity.name}</span>
                        <span className="text-sm">${activity.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Contact Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-forest-green-dark">Your Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <Input
                  type="text"
                  value={bookingState.firstName}
                  onChange={(e) => dispatch({ type: 'SET_FIRST_NAME', payload: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <Input
                  type="text"
                  value={bookingState.lastName}
                  onChange={(e) => dispatch({ type: 'SET_LAST_NAME', payload: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <Input
                type="email"
                value={bookingState.email}
                onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <Input
                type="tel"
                value={bookingState.phone}
                onChange={(e) => dispatch({ type: 'SET_PHONE', payload: e.target.value })}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
              <textarea
                rows={3}
                value={bookingState.specialRequests}
                onChange={(e) => dispatch({ type: 'SET_SPECIAL_REQUESTS', payload: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-forest-green focus:ring focus:ring-forest-green/20"
              />
            </div>
          </div>
        )}

        {/* Step 3: Review and Confirm */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-forest-green-dark">Confirm Your Booking</h2>
            
            <GlassPanel
              variant="green"
              className="p-4"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Visit Date</h3>
                  <p>{bookingState.date ? new Date(bookingState.date).toLocaleDateString() : 'Not selected'}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Guests</h3>
                  <p>{bookingState.guests}</p>
                </div>
                
                <div className="pt-2">
                  <h3 className="font-medium mb-2">Selected Activities</h3>
                  <ul className="space-y-1">
                    {bookingState.selectedActivities.map((activityId) => {
                      const activity = activities.find(act => act.id === activityId);
                      return (
                        <li key={activityId} className="flex justify-between">
                          <span>{activity?.name}</span>
                          <span>${activity?.price} × {bookingState.guests}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                <div className="border-t border-forest-green/20 pt-3 mt-3">
                  <div className="flex justify-between items-center font-bold">
                    <h3>Total</h3>
                    <p>${calculateTotal()}</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Note: A 20% deposit is required to confirm your booking. You will receive payment instructions via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          {currentStep > 1 ? (
            <Button 
              variant="ghost"
              onClick={handlePrevious}
              type="button"
            >
              Back
            </Button>
          ) : (
            <div></div>
          )}
          
          {currentStep < totalSteps ? (
            <Button
              variant="primary"
              onClick={handleNext}
              type="button"
            >
              Continue
            </Button>
          ) : (
            <Button
              variant="primary"
              type="submit"
              className="font-bold"
            >
              Complete Booking
            </Button>
          )}
        </div>
      </form>
    </GlassPanel>
  );
};

export default BookingForm; 