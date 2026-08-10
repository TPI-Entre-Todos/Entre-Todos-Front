import React from 'react';

export default function TripCard({ trip }) {
  const isOwed = trip.balanceType === 'debt';

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className={`h-40 ${trip.bgColor} p-4 relative flex flex-col justify-between items-center text-white/80`}>
        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-sm">
          {trip.initial}
        </div>

        {trip.isOrganizer && (
          <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium">
            Organizador
          </span>
        )}

        <div className="my-auto flex flex-col items-center">
          <span className="text-2xl mb-1">🖼️</span>
          <p className="text-xs text-white/90 font-medium">Foto del viaje</p>
          <span className="text-[10px] text-white/70 underline cursor-pointer">or browse files</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{trip.title}</h3>
        <p className="text-xs text-gray-400 mb-4">{trip.dates}</p>

        <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-sm">
          <span className="text-gray-500 font-medium">
            {isOwed ? 'Debés' : 'Te deben'}
          </span>
          <span className={`font-bold text-base ${isOwed ? 'text-red-500' : 'text-emerald-600'}`}>
            ${trip.amount.toLocaleString('es-AR')}
          </span>
        </div>
      </div>
    </div>
  );
}