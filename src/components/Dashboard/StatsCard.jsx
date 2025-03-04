import React from 'react';
import { Users, MousePointer, DollarSign, ShoppingCart } from 'lucide-react';

const StatsCard = ({ icon, title, value, iconBgColor }) => {
  return (
    <div className="flex flex-col gap-2 bg-transparent">
      <div className="flex items-center gap-3">
        <div className={`${iconBgColor} w-[25px] h-[25px] flex items-center justify-center rounded-lg`}>
         <img src={icon} alt={title} className="object-contain"/>
        </div>
        <div>
          <p className="text-gray-400 text-sm "> {title}</p>
          <p className="text-white font-semibold text-[18px] ">{value}</p>
        </div>
      </div>
      <div className="h-1 bg-[#2563EB] rounded-full max-w-[100px]"></div> {/* Progress bar */}
    </div>
  );
};

export default StatsCard;