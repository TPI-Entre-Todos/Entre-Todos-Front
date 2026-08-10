import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TripCard from '../components/TripCard';
import { Plus, Search } from 'lucide-react';

const mockTrips = [
  {
    id: 1,
    initial: 'V',
    title: 'Viaje a Mendoza',
    dates: '5 de oct de 2025 – 9 de oct de 2025',
    balanceType: 'debt',
    amount: 10000,
    bgColor: 'bg-gradient-to-br from-orange-600 to-amber-700',
    isOrganizer: false,
    status: 'activo'
  },
  {
    id: 2,
    initial: 'R',
    title: 'Rosario Boys Trip',
    dates: '10 de sept de 2026 – 13 de sept de 2026',
    balanceType: 'debt',
    amount: 8500,
    bgColor: 'bg-gradient-to-br from-blue-700 to-sky-800',
    isOrganizer: true,
    status: 'activo'
  },
  {
    id: 3,
    initial: 'A',
    title: 'Asado de fin de año',
    dates: '30 de dic de 2025 – 31 de dic de 2025',
    balanceType: 'debt',
    amount: 10000,
    bgColor: 'bg-gradient-to-br from-yellow-600 to-amber-700',
    isOrganizer: false,
    status: 'activo'
  },
  {
    id: 4,
    initial: 'C',
    title: 'Cumpleaños de Fede',
    dates: '2 de jun de 2026 – 2 de jun de 2026',
    balanceType: 'credit',
    amount: 1000,
    bgColor: 'bg-gradient-to-br from-emerald-700 to-teal-800',
    isOrganizer: false,
    status: 'activo'
  },
  {
    id: 5,
    initial: 'B',
    title: 'Bariloche 2026',
    dates: '14 de ago de 2026 – 21 de ago de 2026',
    balanceType: 'credit',
    amount: 39400,
    bgColor: 'bg-gradient-to-br from-orange-600 to-amber-700',
    isOrganizer: true,
    status: 'activo'
  }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Todos');

  return (
    <div className="flex h-screen bg-[#faf8f5]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* Top Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Tus viajes</h1>
            <p className="text-sm text-gray-500 font-medium">3 viajes activos · 5 en total</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 text-sm">
            <Plus size={18} />
            Nuevo viaje
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="bg-gray-200/60 p-1 rounded-xl flex gap-1">
            {['Todos', 'Activos', 'Archivados'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === tab
                    ? 'bg-white shadow-sm text-gray-800'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search and Sort */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar viaje..."
                className="pl-4 pr-10 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 shadow-sm"
              />
            </div>
            <select className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-600 font-medium shadow-sm focus:outline-none">
              <option>Más recientes</option>
              <option>Más antiguos</option>
            </select>
          </div>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </main>
    </div>
  );
}