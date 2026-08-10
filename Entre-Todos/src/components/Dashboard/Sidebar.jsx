import React, { useState } from 'react';

export default function Sidebar() {
  const [role, setRole] = useState('Usuario');

  return (
    <aside className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col justify-between p-4 font-sans">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              O
            </div>
            <span className="font-bold text-gray-800 text-lg">Entre-Todos</span>
          </div>
          <button className="p-1 rounded hover:bg-gray-100 text-gray-400 font-bold">
            ‹
          </button>
        </div>

        <div className="bg-gray-100 p-1 rounded-xl flex mb-6">
          <button
            onClick={() => setRole('Usuario')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              role === 'Usuario' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'
            }`}
          >
            Usuario
          </button>
          <button
            onClick={() => setRole('Admin')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              role === 'Admin' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'
            }`}
          >
            Admin
          </button>
        </div>

        <nav className="space-y-1">
          <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-blue-50 text-blue-600 font-medium text-sm">
            <div className="flex items-center gap-3">
              <span>💼</span>
              <span>Mis viajes</span>
            </div>
          </a>

          <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-sm">
            <div className="flex items-center gap-3">
              <span>🔔</span>
              <span>Notificaciones</span>
            </div>
            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">2</span>
          </a>

          <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-sm">
            <div className="flex items-center gap-3">
              <span>✉️</span>
              <span>Invitaciones</span>
            </div>
            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">1</span>
          </a>

          <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-sm">
            <div className="flex items-center gap-3">
              <span>👤</span>
              <span>Perfil</span>
            </div>
          </a>
        </nav>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-400 text-white font-bold flex items-center justify-center text-sm">
          FL
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800">Florencia López</p>
          <p className="text-xs text-gray-400">Organizador</p>
        </div>
      </div>
    </aside>
  );
}