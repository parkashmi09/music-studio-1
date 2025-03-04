import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="flex min-h-screen relative"
    >
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 rounded-lg overflow-hidden"
      >
        {isSidebarOpen ? (
          <X className="text-white h-6 w-6" />
        ) : (
          <Menu className="text-white h-6 w-6" />
        )}
      </button>

      {/* Sidebar - Fixed */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 md:ml-[280px] lg:ml-[323px] flex flex-col h-screen">
        {/* Fixed Header */}
        <div className="sticky top-0 z-10">
          <Header />
        </div>
        
        {/* Scrollable content area */}
        <div className="flex-1 overflow-auto">
          <main className="p-4 md:p-6 space-y-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;