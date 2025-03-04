import React, { useState } from 'react';
import { Download } from 'lucide-react';
import DataTable from '../../components/DataTable';

const generateFinancialData = (count) => {
  const artists = [
    'Wilson Franci', 'Kierra Curtis', 'Kianna Torff', 'Marley Torff', 'Mira Korsgaard',
    'Justin Lubin', 'Martin Levin', 'Cooper Bator', 'Haylie Madsen', 'Rayna Vetrovs',
    'Erin Philips', 'Davis Arcand'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    artistName: artists[i % artists.length],
    genre: 'Lorem ipsum',
    mobileNo: '+1 7189 963 369',
    email: 'abc@gmail.com',
    accountNo: '011004050000013',
    date: i % 3 === 0 ? 'Today' : i % 3 === 1 ? 'Yesterday' : 'Last Week',
    payout: '$100.00',
    type: i % 4 === 0 ? 'subscription' : i % 4 === 1 ? 'merchandise' : i % 4 === 2 ? 'streaming' : 'payout'
  }));
};

const FinancialManagement = () => {
  const [activeTab, setActiveTab] = useState('Subscriptions');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [financialData] = useState(generateFinancialData(50));

  const tabData = [
    { 
      id: 1, 
      name: 'Subscriptions', 
      count: 290, 
      filterCondition: () => true,
      value: '$100k'
    },
    { 
      id: 2, 
      name: 'Merchandise Sales', 
      count: 150, 
      filterCondition: (item) => item.type === 'merchandise',
      value: '$90k'
    },
    { 
      id: 3, 
      name: 'Streaming', 
      count: 180, 
      filterCondition: (item) => item.type === 'streaming',
      value: '$50k'
    },
    { 
      id: 4, 
      name: 'Payouts to Artists', 
      count: 120, 
      filterCondition: (item) => item.type === 'payout',
      value: '$15k'
    }
  ];

  const columns = [
    { key: 'artistName', label: 'ARTISTS NAME', width: 'w-[15%]' },
    { key: 'genre', label: 'GENRE', width: 'w-[10%]' },
    { key: 'mobileNo', label: 'MOBILE NO.', width: 'w-[15%]' },
    { key: 'email', label: 'EMAIL', width: 'w-[15%]' },
    { key: 'accountNo', label: 'ACCOUNT NO', width: 'w-[15%]' },
    { key: 'date', label: 'DATE', width: 'w-[15%]' },
    { key: 'payout', label: 'PAYOUT', width: 'w-[15%]' }
  ];

  const renderCell = (item, key) => {
    return item[key];
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Revenue Overview</h2>
            <p className="text-gray-400 text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

        

          <button className="bg-red-gradient text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download Report
          </button>
        </div>

        <DataTable
          tabData={tabData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          columns={columns}
          data={financialData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          renderCell={renderCell}
        />
      </div>
    </div>
  );
};

export default FinancialManagement;