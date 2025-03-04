import { Pen, X } from "lucide-react";
import Profile from "../../assets/images/Profile.png";
import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export const HelpNotification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    state: '',
  });
  const [supportTeam, setSupportTeam] = useState([
    {
      id: 1,
      name: "Admin name",
      mobile: "+1 321 0345 3345",
      email: "admin@mail.com",
      state: "West Bengal",
      image: Profile
    },
    {
      id: 2,
      name: "Admin name",
      mobile: "+51 921 0345 3345",
      email: "info@mail.com",
      state: "Goa",
      image: Profile
    },
    {
      id: 3,
      name: "Admin name",
      mobile: "+1 321 0945 3345",
      email: "admin@mail.com",
      state: "Goa",
      image: Profile
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      id: supportTeam.length + 1,
      name: `${formData.firstName} ${formData.lastName}`,
      mobile: formData.mobile,
      email: formData.email,
      state: formData.state,
      image: Profile
    };
    setSupportTeam([...supportTeam, newMember]);
    setIsOpen(false);
    setFormData({
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      state: '',
    });
  };

  return (
    <div className="">
      <div className="flex gap-4 items-center mb-6">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Orbitron' }}>Customer Support</h1>
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white hover:bg-white/90 text-black px-4 py-2 rounded-lg flex items-center gap-2"
          style={{ fontFamily: 'Orbitron' }}
        >
          Add A New Person <span className="rounded flex items-center justify-center text-lg">+</span>
        </button>
      </div>

      <p className="text-gray-400 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className="grid grid-cols-4 gap-6">
        {supportTeam.map((member) => (
          <div key={member.id} className="bg-gradient-to-b from-gradient-start to-gradient-end rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-white">{member.name}</span>
              </div>
              <button className="text-red-500">
              <img src="/images/trash.png" alt="" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Mobile number</p>
                  <p className="text-white">{member.mobile}</p>
                </div>
                <button>
                  <img src="/images/pencil.png" alt="" />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Email ID</p>
                  <p className="text-white">{member.email}</p>
                </div>
                <button>
                <img src="/images/pencil.png" alt="" />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">State</p>
                  <p className="text-white">{member.state}</p>
                </div>
                <button>
                <img src="/images/pencil.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-[500px] rounded-lg bg-white">
            <div className="flex justify-between items-center p-4 border-b border-black/10">
              <h3 className="text-xl font-medium" style={{ fontFamily: 'Orbitron' }}>Add New</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm mb-1 font-medium" style={{ fontFamily: 'Orbitron' }}>First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full h-10 rounded border border-gray-300 px-3"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium" style={{ fontFamily: 'Orbitron' }}>Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full h-10 rounded border border-gray-300 px-3"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-1 font-medium" style={{ fontFamily: 'Orbitron' }}>Mobile Number :</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 h-10 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +1
                  </span>
                  <input
                    type="text"
                    placeholder="Enter mobile number"
                    className="flex-1 h-10 rounded-r border border-gray-300 px-3"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-1 font-medium" style={{ fontFamily: 'Orbitron' }}>Email ID :</label>
                <input
                  type="email"
                  placeholder="Enter email id"
                  className="w-full h-10 rounded border border-gray-300 px-3"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-1 font-medium" style={{ fontFamily: 'Orbitron' }}>State :</label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="w-full h-10 rounded border border-gray-300 px-3"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                />
              </div>

              <div className="flex items-center mb-8">
                <input
                  type="checkbox"
                  id="notify"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="notify" className="ml-2 text-sm text-gray-600" style={{ fontFamily: 'Orbitron' }}>
                  notify them for there new role
                </label>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-2 border border-[#FF0844] text-[#FF0844] rounded hover:bg-[#FF0844]/5"
                  style={{ fontFamily: 'Orbitron' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 bg-gradient-to-r from-[#FF0844] to-[#FFB199] text-white rounded hover:opacity-90"
                  style={{ fontFamily: 'Orbitron' }}
                >
                  Add
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};