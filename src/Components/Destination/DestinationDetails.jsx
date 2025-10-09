// src/Components/Destination/DestinationDetails.jsx

import { useParams } from 'react-router-dom';

const DestinationDetails = () => {
  // useParams hook URL se dynamic part (parameter) ko nikalne mein madad karta hai
  const { destinationName } = useParams();

  return (
    <div style={{ paddingTop: '150px', paddingBottom: '50px', textAlign: 'center' }}>
      <h1>Welcome to {destinationName.replace(/-/g, ' ')}</h1>
      <p>Yahan par {destinationName.replace(/-/g, ' ')} ki details dikhayi jayengi.</p>
      {/* Hum baad mein yahan real data add karenge */}
    </div>
  );
};

export default DestinationDetails;