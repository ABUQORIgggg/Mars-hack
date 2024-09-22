import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-base-100 shadow-lg h-screen p-4">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/path-to-avatar.jpg" alt="User Avatar" />
          </div>
        </div>
        <h2 className="mt-4 text-xl font-semibold">Abdulloh Isroilov</h2>
        <p className="text-sm text-gray-500">Кодеры | INPR-961 | 12:00</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-primary text-primary-content rounded-lg p-4 text-center">
          <span className="block text-2xl font-bold">364</span>
          <span>Coins</span>
        </div>
        <div className="bg-secondary text-secondary-content rounded-lg p-4 text-center">
          <span className="block text-2xl font-bold">4262</span>
          <span>XP</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        <a href="/courses" className="btn btn-ghost btn-block">Курсы</a>
        <a href="/news" className="btn btn-ghost btn-block">Новости</a>
        <a href="/friends" className="btn btn-ghost btn-block">Друзья</a>
        <a href="/share" className="btn btn-ghost btn-block">Поделиться</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
