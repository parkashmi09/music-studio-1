import React, { useState } from "react";
import { Check, Plus } from "lucide-react";
import ToggleSwitch from "../../components/ToggleSwitch";
import Eye from "../../assets/images/eye-blue.png";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/DataTable";
import CustomDropdown from "../../components/CustomDropdown";

const generateArtists = (count) => {
  const plans = ["Bronze Plan", "Gold Plan", "Platinum Plan"];
  const genres = ["Rock", "Pop", "Jazz", "Hip Hop", "Classical", "Electronic"];
  const statuses = ["Today", "Yesterday", "Last Week", "Last Month"];
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
  const names = [
    "Wilson Franci",
    "Kierra Curtis",
    "Kianna Torff",
    "Marley Torff",
    "Mira Korsgaard",
    "Justin Lubin",
    "Martin Levin",
    "Cooper Bator",
    "Haylie Madsen",
    "Rayna Vetrovs",
    "Erin Philips",
    "Davis Arcand",
    "Emma Stone",
    "Chris Evans",
    "Robert Downey",
    "Scarlett Johnson",
    "Mark Ruffalo",
    "Chris Hemsworth",
    "Tom Hiddleston",
    "Elizabeth Olsen",
  ];

  return Array.from({ length: count }, (_, i) => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const date =
      status === "Last Week"
        ? "03/02/2025"
        : status === "Last Month"
        ? "01/01/2025"
        : "";
    const name = names[i % names.length];
    const [firstName, ...surnameArr] = name.split(" ");

    return {
      id: i + 1,
      name: name,
      firstName: firstName,
      surname: surnameArr.join(" "),
      email: `${firstName.toLowerCase()}.${surnameArr
        .join("")
        .toLowerCase()}@example.com`,
      zipCode: Math.floor(10000 + Math.random() * 90000).toString(),
      phoneNumber: `${Math.floor(100 + Math.random() * 900)}-${Math.floor(
        100 + Math.random() * 900
      )}-${Math.floor(1000 + Math.random() * 9000)}`,
      dateOfBirth: `${1970 + Math.floor(Math.random() * 30)}-${String(
        1 + Math.floor(Math.random() * 12)
      ).padStart(2, "0")}-${String(1 + Math.floor(Math.random() * 28)).padStart(
        2,
        "0"
      )}`,
      country: "USA",
      city: cities[Math.floor(Math.random() * cities.length)],
      genre: genres[Math.floor(Math.random() * genres.length)],
      plan: {
        type: plans[Math.floor(Math.random() * plans.length)],
        expiry: "10/02/2025",
      },
      activity: {
        status,
        date,
      },
      earning: `$${(Math.random() * 1000).toFixed(2)}`,
      active: Math.random() > 0.3, // 70% chance of being active
    };
  });
};

const ArtistManagement = () => {
  const [activeTab, setActiveTab] = useState("All Artists");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [artists] = useState(generateArtists(50));
  const navigate = useNavigate();

  const tabData = [
    {
      id: 1,
      name: "All Artists",
      count: 540,
      filterCondition: () => true,
    },
    {
      id: 2,
      name: "Online Artists",
      count: 25,
      filterCondition: (item) => item.active,
    },
    {
      id: 3,
      name: "Non-active Artists",
      count: 12,

      filterCondition: (item) => !item.active,
    },
    {
      id: 4,
      name: "Blocked Artists",
      count: 12,
      filterCondition: (item) => !item.active,
    },
  ];

  const columns = [
    { key: "name", label: "Artists Name", width: "w-[20%]" },
    { key: "genre", label: "Genre", width: "w-[15%]" },
    { key: "plan", label: "Subscription Plan", width: "w-[20%]" },
    { key: "activity", label: "Activity", width: "w-[15%]" },
    { key: "earning", label: "Earning", width: "w-[10%]" },
    { key: "view", label: "View & Edit", width: "w-[10%]" },
    { key: "action", label: "Action", width: "w-[10%]" },
  ];
  const earningsItems = ["Streaming", "Merchandise", "Live Performance"];
  const dateItems = ["Today", "Yesterday", "Last Week"];
  const subscriptionItems = ["Bronze", "Platinum", "Gold"];

  const handleViewArtist = (artist) => {
    navigate("/dashboard/artist-details", { state: { artist } });
  };

  const handleToggleActive = (id) => {
    setArtists(
      artists.map((artist) =>
        artist.id === id ? { ...artist, active: !artist.active } : artist
      )
    );
  };

  const renderCell = (item, key) => {
    switch (key) {
      case "plan":
        return (
          <div>
            <div>{item.plan.type}</div>
            <div className="text-sm text-gray-400">Exp: {item.plan.expiry}</div>
          </div>
        );
      case "activity":
        return (
          <div>
            <div>{item.activity.status}</div>
            {item.activity.date && (
              <div className="text-sm text-gray-400">{item.activity.date}</div>
            )}
          </div>
        );
      case "view":
        return (
          <button
            onClick={() => handleViewArtist(item)}
            className="text-blue-400 hover:text-blue-300"
          >
            <img
              src={Eye}
              alt="View & Edit"
              className="w-5 h-5 mx-auto object-contain"
            />
          </button>
        );
      case "action":
        return (
          <div className="flex justify-center">
            <ToggleSwitch
              isActive={item.active}
              onChange={() => handleToggleActive(item.id)}
            />
          </div>
        );
      default:
        return item[key];
    }
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h2 className="text-2xl font-bold text-white">Our Artists</h2>
              <button
                onClick={() => navigate("/dashboard/add-artist")}
                className="bg-white hover:bg-opacity-20 text-black px-4 py-2 rounded-lg flex items-center gap-2 w-fit"
              >
                <Plus className="h-5 w-5" />
                Add An New Artist
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex  gap-4">
            <CustomDropdown
              title="Select Date"
              items={dateItems}
              
            />
            <CustomDropdown
              title="Select Subscription"
              items={subscriptionItems}
             
            />
          <div className="w-[202px]">
          <CustomDropdown
              title="Earnings From"
              items={earningsItems}
              
            />
          </div>
          </div>
        </div>

        <DataTable
          tabData={tabData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          columns={columns}
          data={artists}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          renderCell={renderCell}
        />
      </div>
    </div>
  );
};

export default ArtistManagement;
