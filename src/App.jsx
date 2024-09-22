import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="p-6 flex-1 flex container mx-auto max-w-[92%] ">
            <Sidebar />
            <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
