// src/components/Sidebar.jsx
import React from 'react';
import { Home, Video, TvMinimal, UserRound, History, Clock4, Flame, Music, Gamepad2, Trophy, TvMinimalPlay, ListMusic, Tv, Settings, Flag, CircleHelp, MessageSquareWarning } from 'lucide-react';

const sidebarLinks = [
  // Define your sidebar links here
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed top-0 left-0 h-full bg-white dark:bg-neutral-900 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <nav>
        {sidebarLinks.map((link, index) => (
          <a key={index} href={link.url} className="flex items-center p-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            <link.icon className="h-6 w-6 mr-2" />
            {link.title}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;