import React from 'react';
import { Search } from 'lucide-react';
import Profile from "../assets/images/Profile.png";
import SettingsIcon from "../assets/images/settings.png";
import NotificationIcon from "../assets/images/notifcation.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-3 px-6 bg-white/10 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[20px] w-full element shadow-xl min-h-[82px]">
      {/* Search Bar */}
      <div className="relative w-[342px]">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search here..."
          className="bg-white rounded-md py-2 pl-10 pr-4 w-full focus:outline-none"
        />
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {/* Settings Icon */}
        <button onClick={() => navigate("/dashboard/settings")} className="p-2 rounded-full bg-white">
          <img 
            src={SettingsIcon} 
            alt="Settings"
            className="h-5 w-5"
          />
        </button>
        <button className="p-2 rounded-full bg-white">
          <img 
            src={NotificationIcon} 
            alt="notification"
            className="h-5 w-5"
          />
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-white font-medium">Allison Lubin</p>
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-blue-500">
            <img 
              src={Profile}
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;