import React from 'react';

const OrderSummary = ({ trip, userData }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p><strong>Destination:</strong> {trip.destination}</p>
      <p><strong>Start Date:</strong> {new Date(trip.startDate).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(trip.endDate).toLocaleDateString()}</p>
      <p><strong>Price:</strong> ${trip.price}</p>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Phone:</strong> {userData.phone}</p>
    </div>
  );
}

export default OrderSummary;