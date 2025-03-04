import React from 'react';
import ToggleSwitch from '../ToggleSwitch';
import Profile from "../../assets/images/Profile.png";
import { Check } from 'lucide-react';


const UserTable = () => {
  const users = [
    {
      id: 1,
      name: 'Omar Lipshutz',
      avatar: Profile,
      email: 'example@gmail.com',
      phone: '+1 7145 674 369',
      subscription: { type: 'Basic', expiry: '11-02-251' },
      active: true,
    },
    {
      id: 2,
      name: 'Jakob Passaquindici Arcand',
      avatar: Profile,
      email: 'example@gmail.com',
      phone: '+1 7145 674 369',
      subscription: { type: 'Gold', expiry: '11-02-251' },
      active: true,
    },
    {
      id: 3,
      name: 'Madelyn Donin',
      avatar: Profile,
      email: 'example@gmail.com',
      phone: '+1 7145 674 369',
      subscription: { type: 'Platinum', expiry: '11-02-251' },
      active: false,
    },
    {
      id: 4,
      name: 'Roger Gouse',
      avatar: Profile,
      email: 'example@gmail.com',
      phone: '+1 7145 674 369',
      subscription: { type: 'Basic', expiry: '11-02-251' },
      active: true,
    },
    {
      id: 5,
      name: 'Chance Geidt',
      avatar: Profile,
      email: 'example@gmail.com',
      phone: '+1 7145 674 369',
      subscription: { type: 'Basic', expiry: '11-02-251' },
      active: true,
    },
    {
      id: 6,
      name: 'Giana Rhiel Madsen',
      avatar: Profile,
      email: 'example@gmail.com',
      phone: '+1 7145 674 369',
      subscription: { type: 'Basic', expiry: '11-02-251' },
      active: true,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gradient-start to-gradient-end rounded-xl p-6 border border-[#1E293B] mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="">
          <h2 className="text-white text-xl">Artists</h2>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#00EF44] mt-1 flex items-center justify-center rounded-full">
                <Check color="black" size={12}/>
            </div>
            <span className="text-[#A0AEC0] text-sm"> new artists this week</span>
          </div>
         
        </div>
        <div className="flex items-center">
          <span className="text-white text-sm mr-2">...</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left py-3">Name of artists</th>
              <th className="text-left py-3">Email</th>
              <th className="text-left py-3">Phone Number</th>
              <th className="text-left py-3">Subscription Status</th>
              <th className="text-left py-3">Block/Unblock</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-[#1E293B]">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-white">{user.name}</span>
                  </div>
                </td>
                <td className="text-white">{user.email}</td>
                <td className="text-white">{user.phone}</td>
                <td>
                  <div className="flex flex-row">
                    <div className="w-2 h-2 bg-[#00EF44] mt-[6px]  mr-[8px] flex items-center justify-center rounded-full"></div>
                    <span className={`text-sm  text-white
                    
                  `
                    }>
                      {user.subscription.type}
                    </span>
                    <span className="text-white text-xs mt-[3px] ml-[3px]">
                      exp: {user.subscription.expiry}
                    </span>
                  </div>
                </td>
                <td>
                  <ToggleSwitch isActive={user.active} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;