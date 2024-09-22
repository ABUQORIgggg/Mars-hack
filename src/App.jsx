import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [profileImage, setProfileImage] = useState("https://img.freepik.com/premium-photo/default-male-user-icon-blank-profile-image-green-background-profile-picture-icon_962764-98397.jpg");
  const location = useLocation();

  // Check if the current path is '/space-shop'
  const isSpaceShop = location.pathname === '/space-shop';

  return (
    <div className="flex">
      {/* Sidebar should only be visible if not in '/space-shop' */}
      

      <div className="flex-1 flex flex-col">
        <header>
          <Navbar profileImage={profileImage} />
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
