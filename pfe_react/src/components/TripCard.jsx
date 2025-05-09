import React from "react";

const TripCard = ({ trip }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-semibold text-gray-800">{trip.title}</h3>
        <p className="text-sm text-gray-500 mb-1">{trip.location}</p>
        <p className="text-sm text-yellow-500 font-medium">
          ⭐ {trip.rating} - {trip.reviews} avis
        </p>
        <p className="text-sm text-green-600 font-semibold mt-1">
          {trip.discount} € de réduction
        </p>
        <p className="text-sm text-red-600 font-bold mt-1">
          {trip.price} €
          <span className="line-through text-gray-400 ml-2">
            {trip.originalPrice} €
          </span>
        </p>
        <p className="text-xs text-gray-500 mt-1">{trip.dates}</p>
        <a
          href="#"
          className="mt-3 inline-block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          Voir plus
        </a>
      </div>
    </div>
  );
};

export default TripCard;
