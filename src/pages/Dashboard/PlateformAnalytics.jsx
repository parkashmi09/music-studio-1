export const PlatformAnalytics = () => {
    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Plateform Analytics</h1>
        
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <div className="flex flex-col items-center text-white text-center">
            <svg 
              className="w-20 h-20 mb-4 text-blue-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h2 className="text-2xl font-bold mb-2">In Progress</h2>
            <p className="text-gray-300 max-w-md">
              This section is currently under development. Please check back soon for updates.
            </p>
          </div>
        </div>
      </div>
    );
  };
  