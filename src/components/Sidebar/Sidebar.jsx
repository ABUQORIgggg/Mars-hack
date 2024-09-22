import React, { useState } from 'react';
import { StarIcon } from "lucide-react";
import { LuImagePlus } from "react-icons/lu";
import { Link } from 'react-router-dom';

export default function ProfileSidebar({ profileImage, setProfileImage }) {
  const [showAvatars, setShowAvatars] = useState(false);

  const handleImageClick = () => {
    setShowAvatars(true);
  };

  const handleAvatarSelect = (avatarUrl) => {
    setProfileImage(avatarUrl); // Update the image in the parent state
    setShowAvatars(false);
  };

  return (
    <aside className="max-w-[30%] w-full min-w-[30%] bg-base-100 shadow-lg h-screen p-4 rounded-xl">
      <div className="max-w-sm mx-auto">
        <div className="p-6 space-y-4">
          <div className="flex justify-center">
            <div className='relative w-24 h-24'>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
                onClick={handleImageClick}
              />
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer" onClick={handleImageClick}>
                <LuImagePlus className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>

          {showAvatars && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Select an Avatar</h3>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <img
                      key={i}
                      src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${i}`}
                      alt={`Avatar ${i}`}
                      className="w-16 h-16 rounded-full cursor-pointer"
                      onClick={() => handleAvatarSelect(`https://api.dicebear.com/6.x/avataaars/svg?seed=${i}`)}
                    />
                  ))}
                </div>
                <button 
                  className="mt-4 bg-gray-200 px-4 py-2 rounded"
                  onClick={() => setShowAvatars(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-[#FF6347]">Levels</p>
            <div className="flex justify-center space-x-1 mt-1">
              <StarIcon className="w-5 h-5 text-[#FFD700] fill-current" />
              <StarIcon className="w-5 h-5 text-[#FFD700] fill-current" />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#000080]">Abdulloh Isroilov</h2>
            <p className="text-sm text-gray-600">Кодеры | INPR-961 | Mirzaaliyev Bekzod |</p>
            <p className="text-sm text-gray-600">12:00</p>
          </div>

          <div className="bg-[#FF7F50] rounded-lg p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-[#FFD700] rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-white">364</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#FFD700] rounded-full p-2">
                <span className="font-bold text-white">XP</span>
              </div>
              <span className="font-bold text-white">4262</span>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <div className="bg-[#4169E1] rounded-full p-2">
                  <span className="text-white font-bold">24</span>
                </div>
                <div>
                  <p className="font-bold text-gray-700">25x Davomat</p>
                  <p className="text-xs text-gray-500">посещать занятия, не пропуская 25 занятий</p>
                </div>
              </div>
              <button className="text-[#1E90FF] text-sm">Подробнее</button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-[#FFD700] h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-right text-sm text-gray-600 mt-1">19</p>
          </div>

          <div className="bg-[#000080] rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-white">Mars Games</h3>
              <p className="text-sm text-[#87CEFA]">Учитесь с играми</p>
            </div>
            <Link to="/monkey-type"><button className="bg-[#FF6347] text-white px-4 py-2 rounded-full">Играть</button></Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
