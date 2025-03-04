import React from "react";
import { Camera, Eye, EyeOff, Pencil } from "lucide-react";
import Profile from "../../assets/images/Profile.png";
export default function Settings() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="mb-6">
        <h1
          className="text-[32px] font-bold"
          
        >
          Settings
        </h1>
        <p className="text-[#A0AEC0] text-[16px]">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>

      {/* Profile Details Section */}
      <div className=" rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Profile Picture */}
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#56A67C] flex items-center justify-center">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-[#56A67C] p-1.5 rounded-full">
                <Pencil size={16} className="text-white" />
              </button>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[24px] font-bold mb-6">Profile Details</h2>
            {/* Form Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}

              <div>
                <label className="block mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  value="Allison"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  value="Lubin"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block mb-2 font-medium">Date Of Birth</label>
                <input
                  type="text"
                  value="12/12/1994"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  value="+1 987 562103"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  value="example@gmail.com"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block mb-2 font-medium">Gender</label>
                <input
                  type="text"
                  value="Male"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block mb-2 font-medium">Address</label>
                <input
                  type="text"
                  value="San Jose, California, USA"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block mb-2 font-medium">Postal Code</label>
                <input
                  type="text"
                  value="100001"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block mb-2 font-medium">Country</label>
                <input
                  type="text"
                  value="USA"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* City */}
              <div>
                <label className="block mb-2 font-medium">City</label>
                <input
                  type="text"
                  value="San Jose"
                  className="w-full bg-white text-black rounded px-4 py-3"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block mb-2 font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value="••••••••••••••"
                    className="w-full bg-white text-black rounded px-4 py-3 pr-10"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff size={16} className="text-gray-500" />
                    ) : (
                      <Eye size={16} className="text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Save Button */}
        <div className="mt-8 flex justify-center">
          <button className="w-[180px] bg-red-gradient text-white py-3 rounded-md font-medium text-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
