import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const location = useLocation();

  // Check if the current path is '/space-shop'
  const isSpaceShop = location.pathname === '/space-shop';

  return (
    <div className="flex">
      {/* Sidebar should only be visible if not in '/space-shop' */}
      

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="p-6 flex-1 flex container mx-auto max-w-[92%]">
        {!isSpaceShop && <Sidebar />}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
