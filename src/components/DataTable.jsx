import React, { useMemo } from 'react';

const DataTable = ({
  tabData,
  activeTab,
  setActiveTab,
  columns,
  data,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  renderCell,
}) => {
  const filteredData = useMemo(() => {
    const currentTab = tabData.find(tab => tab.name === activeTab);
    if (!currentTab) return data;

    return data.filter(item => currentTab.filterCondition(item));
  }, [data, activeTab, tabData]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pageNumbers = useMemo(() => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <>
      {/* Tabs Section */}
      <div className="overflow-x-auto">
        <div className="flex border-b border-blue-800 min-w-max">
          {tabData.map((tab) => (
            <button 
              key={tab.id}
              className={`py-2 px-4 flex items-center gap-2 ${
                activeTab === tab.name 
                  ? 'text-[#00ef45] border-b-2 border-[#00ef45]' 
                  : 'text-white'
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
              <span className={`${
                activeTab === tab.name 
                  ? 'text-white border border-[#00ef45]' 
                  : 'text-white border border-white'
              } ml-2 text-white text-xs px-3 py-1 rounded-[10px]`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-4 overflow-x-auto rounded-lg border border-[#515c79]">
        <div className="min-w-[900px]">
          <table className="w-full">
            <thead>
              <tr className="text-white text-[16px] uppercase bg-blue-linear">
                {columns.map((column) => (
                  <th key={column.key} className={`py-3 px-4 text-left ${column.width || ''}`}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)]'>
              {paginatedData.map((item) => (
                <tr key={item.id} className="text-white text-[14px] border border-[#515c79] hover:bg-blue-900/30">
                  {columns.map((column) => (
                    <td key={`${item.id}-${column.key}`} className="py-4 px-4 border border-[#515c79]">
                      {renderCell(item, column.key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center py-4 text-white bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)] px-4 border-t-0 border border-[#515c79] rounded-b-lg">
        <div className="text-sm font-medium">
          Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            className="px-4 py-2 text-white hover:text-blue-300 font-medium flex items-center"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;Previous
          </button>
          
          {pageNumbers.map((number, index) => (
            number === '...' ? (
              <span key={index} className="text-white">...</span>
            ) : (
              <button 
                key={index}
                className={`w-8 h-8 flex items-center justify-center rounded-md ${
                  currentPage === number 
                    ? 'bg-red-gradient' 
                    : 'bg-[#515c79]'
                }`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            )
          ))}
          
          <button 
            className="px-4 py-2 text-white hover:text-blue-300 font-medium flex items-center"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next&gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default DataTable;