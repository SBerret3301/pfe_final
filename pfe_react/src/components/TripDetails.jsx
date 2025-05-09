import React from 'react';

const TripDetails = ({ trip }) => {
  return (
    <div className="trip-details">
      <h2>{trip.destination}</h2>
      <p><strong>Start Date:</strong> {new Date(trip.startDate).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(trip.endDate).toLocaleDateString()}</p>
      <p><strong>Price:</strong> ${trip.price}</p>
      <p><strong>Description:</strong> {trip.description}</p>
      <button className="book-now-button">Book Now</button>
    </div>
  );
}

export default TripDetails;