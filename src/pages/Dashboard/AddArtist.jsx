import { ArrowLeft, Camera, ChevronDown, Calendar, Pen } from "lucide-react"
import Profile from "../../assets/images/Profile.png";

export default function AddArtistForm() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[18px] font-medium tracking-wide">Add An Artist</h1>
      </div>

      {/* Profile Section */}
      <div className="bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)] rounded-lg p-6 mb-6">
      <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-red-purple">
              <div className="w-full h-full rounded-full bg-gray-300">
                {/* Profile image placeholder - could be enhanced with actual image if available */}
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"/>
              </div>
            </div>
          
              <button className="absolute bottom-0 right-0 bg-red-gradient p-1.5 rounded-full">
                <Camera size={16} className="text-white" />
              </button>
            
          </div>
          <div className="flex  w-full justify-between ">
        <div>
        <p className="text-xl font-light">
         
          </p>
          <p className="text-xl font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        
          </div>
        
        </div>
      </div>

      {/* Form */}
      <div className="bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)] rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          {/* First Name */}
          <div>
            <label className="block mb-2 font-medium">First Name</label>
            <input type="text" placeholder="Mobina" className="w-full bg-white text-black rounded px-4 py-3" />
          </div>

          {/* Surname */}
          <div>
            <label className="block mb-2 font-medium">Surname</label>
            <input type="text" placeholder="Mirbaghen" className="w-full bg-white text-black rounded px-4 py-3" />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Email</label>
            <input type="email" placeholder="Enter Value" className="w-full bg-white text-black rounded px-4 py-3" />
          </div>

          {/* Zip Code */}
          <div>
            <label className="block mb-2 font-medium">Zip Code</label>
            <input type="text" placeholder="Enter Value" className="w-full bg-white text-black rounded px-4 py-3" />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <div className="flex gap-2">
              <div className="relative w-16">
                <select className="appearance-none w-full bg-white text-black rounded px-2 py-3 pr-8">
                  <option>+1</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <input type="tel" placeholder="9120000000" className="flex-1 bg-white text-black rounded px-4 py-3" />
            </div>
          </div>

          {/* Date of birth */}
          <div>
            <label className="block mb-2 font-medium">Date of birth</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Value"
                className="w-full bg-white text-black rounded px-4 py-3 pr-10"
              />
              <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block mb-2 font-medium">Country</label>
            <div className="relative">
              <select className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10">
                <option>USA</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Genre */}
          <div>
            <label className="block mb-2 font-medium">Genre</label>
            <div className="relative">
              <select className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10">
                <option>Lorem Ipsum</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 font-medium">City</label>
            <div className="relative">
              <select className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10">
                <option>New York</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Earning */}
          <div>
            <label className="block mb-2 font-medium">Earning</label>
            <input type="text" placeholder="$100.00" className="w-full bg-white text-black rounded px-4 py-3" />
          </div>

          {/* Last Seen */}
          <div>
            <label className="block mb-2 font-medium">Last Seen</label>
            <div className="relative">
              <select className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10">
                <option>Today</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Subscription Plan */}
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block mb-2 font-medium">Subscription Plan</label>
            <div className="relative">
              <select className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10">
                <option>Platinum</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Add Button */}
        <div className="mt-8 flex justify-center">
          <button className="w-[50%] bg-[#0075FF] text-white py-3 rounded-full font-medium text-lg">ADD</button>
        </div>
      </div>
    </div>
  )
}

