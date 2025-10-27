import React, { useState } from 'react';

// Props: price aur packageName ko InsideTour se receive karega
const EnquiryForm = ({ price, packageName }) => {
  // States for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelerCount, setTravelerCount] = useState(1); // Default 1 traveler
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState(''); // Submission status message
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for button

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page refresh ko rokein
    setIsSubmitting(true); // Button ko disable karein
    setMessage('Sending enquiry...');

    const formData = {
      packageName,
      pricePerPerson: price,
      fullName,
      email,
      phone,
      travelerCount,
      travelDate,
    };

    console.log("Enquiry Data:", formData);

    // --- Yahaan Backend API Call Add Karein ---
    // Example using fetch (replace with your actual API endpoint and logic)
    /*
    try {
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('API Response:', result);
      setMessage(`Enquiry sent successfully for ${packageName}!`);
      // Optionally clear form
      // setFullName(''); setEmail(''); setPhone(''); setTravelerCount(1); setTravelDate('');

    } catch (error) {
      console.error('Error sending enquiry:', error);
      setMessage('Failed to send enquiry. Please try again.');
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
    */

    // Simulate API call for demonstration
    setTimeout(() => {
        setMessage(`Enquiry sent for ${packageName}! We'll contact you soon.`);
        setIsSubmitting(false); // Re-enable button
         // Optionally clear form after successful submission
         setFullName(''); setEmail(''); setPhone(''); setTravelerCount(1); setTravelDate('');
    }, 1500); // Simulate 1.5 second delay
  };

  return (
    // Add some styling classes (assuming Bootstrap-like structure)
    <div className="widget-card mb-30"> {/* Use existing widget style or create new */}
      <div className="widget-body">
        <div className="package-sidebar-price mb-3 text-center">
            <span>Starting From</span>
            <h4>₹{price || 'N/A'} <small>/ Per Person</small></h4>
        </div>
        <h5 className="package-sidebar-title text-center mb-4">{packageName}</h5>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-inner mb-3 ">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              placeholder="Your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-inner mb-3">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-inner mb-3">
            <label htmlFor="phone">Phone No. *</label>
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="row g-3 mb-3"> {/* Use row for side-by-side on larger screens if needed */}
            <div className="col-md-6"> {/* Example: Half width */}
              <div className="form-inner">
                <label htmlFor="travelerCount">No. of Travelers *</label>
                <input
                  type="number"
                  id="travelerCount"
                  value={travelerCount}
                  onChange={(e) => setTravelerCount(e.target.value)}
                  min="1"
                  required
                  disabled={isSubmitting}
                  style={{ width: '100%', padding: '10px' }} // Basic styling
                />
              </div>
            </div>
            <div className="col-md-6"> {/* Example: Half width */}
              <div className="form-inner">
                <label htmlFor="travelDate">Travel Date *</label>
                <input
                  type="date"
                  id="travelDate"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  required
                  disabled={isSubmitting}
                  style={{ width: '100%', padding: '10px' }} // Basic styling
                />
              </div>
            </div>
          </div>
          <button
             type="submit"
             className="primary-btn1 two w-50 " // Use button style and make full width
             disabled={isSubmitting} // Disable while submitting
            >
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
          </button>
          {message && <p className="mt-3 text-center" style={{fontSize: '0.9em'}}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;