import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [profileImage, setProfileImage] = useState("https://img.freepik.com/premium-photo/default-male-user-icon-blank-profile-image-green-background-profile-picture-icon_962764-98397.jpg");

  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        <header>
          <Navbar profileImage={profileImage} />
        </header>
        <main className="p-6 flex-1 flex container mx-auto max-w-[92%] mt-14">
          <Sidebar profileImage={profileImage} setProfileImage={setProfileImage} />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
