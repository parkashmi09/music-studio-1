import React from "react";
import { Users, MousePointer, DollarSign, ShoppingCart } from "lucide-react";
import BarChartComponent from "../../components/Dashboard/Barchart";
import StatsCard from "../../components/Dashboard/StatsCard";
import AreaChartComponent from "../../components/Dashboard/AreaChart";
import SatisfactionGauge from "../../components/Dashboard/SatisficationGauge";
import CustomDropdown from "../../components/CustomDropdown";
import UserTable from "../../components/Dashboard/UserTable";


function App() {
  return (
    <div className="">
      <div className="flex gap-4">
        <div className="w-[70%] bg-gradient-to-b from-gradient-start to-gradient-end rounded-xl p-4 border border-[#1E293B]">
          {/* Chart Section */}
          <div className="w-full">
            <BarChartComponent />
          </div>

          {/* Stats Section */}
          <div className="flex p-2  w-full gap-4 items-center">
            {/* Title */}
            <div className="mt-4  w-[30%]">
              <h2 className="text-[18px] text-white">Active Users</h2>
              <p className="text-[#22C55E] text-[14px]">
                (+32) <span className="text-[#9f9f9f]">than last week</span>
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-6 w-full">
              <StatsCard
                icon="/images/dashboard/wallet.png"
                title="Users"
                value="32,984"
                iconBgColor="bg-[#2563EB]"
              />
              <StatsCard
                icon="/images/dashboard/sharp.png"
                title="Clicks"
                value="2.42m"
                iconBgColor="bg-[#2563EB]"
              />
              <StatsCard
                icon="/images/dashboard/cart.png"
                title="Sales"
                value="2,400$"
                iconBgColor="bg-[#2563EB]"
              />
              <StatsCard
                icon="/images/dashboard/settings.png"
                title="Items"
                value="320"
                iconBgColor="bg-[#2563EB]"
              />
            </div>
          </div>
        </div>

        <div className="w-[30%] bg-custom-dark-gradient rounded-xl border border-[#1E293B]">
          <SatisfactionGauge percentage={95} />
        </div>
      </div>

      <div className="w-full mt-4">
        {/* Sales Overview Section */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-b from-gradient-start to-gradient-end rounded-xl p-6 border border-[#1E293B]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl text-white font-bold mb-1" >
                  Sales overview
                </h2>
                <p className="text-[#22C55E] text-sm">
                  (+51) <span className=" text-[#9f9f9f]"> more in 2025
                    </span>
                </p>
              </div>
           <div className="w-[202px]">
           <CustomDropdown title="All" items={["All", "This week", "This month", 'Subscription']} />
           </div>
            </div>
            <AreaChartComponent />
          </div>
        </div>
      </div>
      <UserTable/>

    
    </div>
  );
}

export default App;
