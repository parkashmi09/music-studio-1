import { useState, useEffect } from 'react';
import { ArrowLeft, Camera, ChevronDown, Calendar, Edit, Save, Pen } from "lucide-react";
import { useLocation, useNavigate } from 'react-router-dom';
import Profile from "../../assets/images/Profile.png";

export default function ArtistDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const artist = location.state?.artist;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    zipCode: '',
    phoneNumber: '',
    dateOfBirth: '',
    country: 'USA',
    genre: 'Rock',
    city: 'New York',
    earning: '$100.00',
    lastSeen: 'Today',
    subscriptionPlan: 'Platinum'
  });

  useEffect(() => {
    if (artist) {
      setFormData({
        firstName: artist.firstName || '',
        surname: artist.surname || '',
        email: artist.email || '',
        zipCode: artist.zipCode || '',
        phoneNumber: artist.phoneNumber || '',
        dateOfBirth: artist.dateOfBirth || '',
        country: artist.country || 'USA',
        genre: artist.genre || 'Rock',
        city: artist.city || 'New York',
        earning: artist.earning || '$100.00',
        lastSeen: artist.activity?.status || 'Today',
        subscriptionPlan: artist.plan?.type || 'Platinum'
      });
    }
  }, [artist]);

  if (!artist) {
    return (
      <div className="min-h-screen text-white p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Artist Data Found</h2>
          <button
            onClick={() => navigate('/dashboard/artist-management')}
            className="bg-gradient-to-r from-[#FF0844] to-[#0075FF] text-white px-6 py-2 rounded-lg"
          >
            Back to Artists
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Here you can call onUpdate or any save function to update the artist data
    navigate('/dashboard/artist-management', { state: { artist: { ...artist, ...formData } } });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="text-white">
          <ArrowLeft size={24} onClick={() => window.history.back()} />
        </button>
        <h1 className="text-[18px] font-medium tracking-wide">
          {isEditing ? 'Edit Profile' : 'View Profile'}
        </h1>
        {/* <button 
          className="ml-auto text-white"
          onClick={isEditing ? handleSave : handleEditToggle}
        >
          {isEditing ? (
            <Save size={24} />
          ) : (
            <Edit size={24} />
          )}
        </button> */}
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
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-red-gradient p-1.5 rounded-full">
                <Camera size={16} className="text-white" />
              </button>
            )}
          </div>
          <div className="flex  w-full justify-between ">
        <div>
        <p className="text-xl font-light">
          {`${artist.firstName} ${artist.surname}`}
          </p>
          <p className="text-xl font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
          <button  onClick={isEditing ? handleSave : handleEditToggle} className="text-white bg-red-gradient w-[48px] h-[48px] flex items-center justify-center rounded-full">
            <Pen size={20} color="#FFFFFF" />
          </button>
          </div>
        
        </div>
      </div>

      {/* Form */}
      <div className="bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)] rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          {/* First Name */}
          <div>
            <label className="block mb-2 font-medium">First Name</label>
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded px-4 py-3"
              />
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.firstName}
              </div>
            )}
          </div>

          {/* Surname */}
          <div>
            <label className="block mb-2 font-medium">Surname</label>
            {isEditing ? (
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded px-4 py-3"
              />
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.surname}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded px-4 py-3"
              />
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.email || 'Enter Value'}
              </div>
            )}
          </div>

          {/* Zip Code */}
          <div>
            <label className="block mb-2 font-medium">Zip Code</label>
            {isEditing ? (
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded px-4 py-3"
              />
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.zipCode || 'Enter Value'}
              </div>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            {isEditing ? (
              <div className="flex gap-2">
                <div className="relative w-16">
                  <select
                    name="countryCode"
                    value={formData.countryCode || '+1'}
                    onChange={handleInputChange}
                    className="appearance-none w-full bg-white text-black rounded px-2 py-3 pr-8"
                  >
                    <option>+1</option>
                    {/* Add more country codes if needed */}
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="flex-1 bg-white text-black rounded px-4 py-3"
                />
              </div>
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.phoneNumber || '+1 9120000000'}
              </div>
            )}
          </div>

          {/* Date of birth */}
          <div>
            <label className="block mb-2 font-medium">Date of birth</label>
            {isEditing ? (
              <div className="relative">
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full bg-white text-black rounded px-4 py-3 pr-10"
                />
                {/* <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" /> */}
              </div>
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.dateOfBirth || 'Enter Value'}
              </div>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block mb-2 font-medium">Country</label>
            {isEditing ? (
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10"
                >
                  <option value="USA">USA</option>
                  {/* Add more countries if needed */}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.country}
              </div>
            )}
          </div>

          {/* Genre */}
          <div>
            <label className="block mb-2 font-medium">Genre</label>
            {isEditing ? (
              <div className="relative">
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10"
                >
                  <option value="Rock">Rock</option>
                  <option value="Pop">Pop</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Hip Hop">Hip Hop</option>
                  <option value="Classical">Classical</option>
                  <option value="Electronic">Electronic</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.genre}
              </div>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 font-medium">City</label>
            {isEditing ? (
              <div className="relative">
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10"
                >
                  <option value="New York">New York</option>
                  {/* Add more cities if needed */}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.city}
              </div>
            )}
          </div>

          {/* Earning */}
          <div>
            <label className="block mb-2 font-medium">Earning</label>
            {isEditing ? (
              <input
                type="text"
                name="earning"
                value={formData.earning}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded px-4 py-3"
              />
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.earning}
              </div>
            )}
          </div>

          {/* Last Seen */}
          <div>
            <label className="block mb-2 font-medium">Last Seen</label>
            {isEditing ? (
              <div className="relative">
                <select
                  name="lastSeen"
                  value={formData.lastSeen}
                  onChange={handleInputChange}
                  className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10"
                >
                  <option value="Today">Today</option>
                  <option value="Yesterday">Yesterday</option>
                  <option value="Last Week">Last Week</option>
                  <option value="Last Month">Last Month</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.lastSeen}
              </div>
            )}
          </div>

          {/* Subscription Plan */}
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block mb-2 font-medium">Subscription Plan</label>
            {isEditing ? (
              <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                  <select
                    name="subscriptionPlan"
                    value={formData.subscriptionPlan}
                    onChange={handleInputChange}
                    className="appearance-none w-full bg-white text-black rounded px-4 py-3 pr-10"
                  >
                    <option value="Platinum">Platinum</option>
                    <option value="Gold Plan">Gold Plan</option>
                    <option value="Bronze Plan">Bronze Plan</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                <button className="bg-[#00D061] text-white px-4 py-2 rounded flex items-center gap-2">
                  Upgrade <ChevronDown className="rotate-180" size={16} />
                </button>
                <button className="bg-red-gradient text-white px-4 py-2 rounded flex items-center gap-2">
                  Downgrade <ChevronDown size={16} />
                </button>
              </div>
            ) : (
              <div className="w-full bg-white text-black rounded px-4 py-3">
                {formData.subscriptionPlan}
              </div>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="mt-8 flex justify-center">
            <button 
              className="w-[50%] bg-[#0075FF] text-white py-3 rounded-full font-medium text-lg"
              onClick={handleSave}
            >
              SAVE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}